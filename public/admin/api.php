<?php
/**
 * Backend for the hosted blog editor at /admin/.
 *
 * Reads and writes the files the site fetches at runtime:
 *   content/posts.json        the blog index (falls back to posts.seed.json)
 *   content/blog/<slug>.json  each article body, as {"html": "..."}
 *   assets/images/blog/       cover and in-article photos
 *
 * Every response is JSON. Every state-changing call needs a signed-in session
 * and a matching CSRF token. The password hash, sessions and backups live
 * OUTSIDE the web root, so no request can fetch them.
 */

declare(strict_types=1);

// A PHP notice printed into a response would corrupt the JSON the editor reads.
ini_set('display_errors', '0');

// ---------------------------------------------------------------- paths ----

$docroot = rtrim((string) ($_SERVER['DOCUMENT_ROOT'] ?? dirname(__DIR__)), '/');
// The account home: transformations123 is an addon domain, so one level up is
// public_html (another site's web root) and two levels up is private.
$private = dirname($docroot, 2) . '/.t123-editor';
$credFile = $private . '/login.json';
$lockFile = $private . '/attempts.json';
$backups  = $private . '/backups';
$contentDir = $docroot . '/content';
$blogDir    = $contentDir . '/blog';
$imageDir   = $docroot . '/assets/images/blog';

// SHA-256 of the one-time setup code. Without that code nobody can create the
// first login, so the editor cannot be claimed by whoever finds it first.
const SETUP_CODE_SHA256 = '7bdb518b5ee4c087a40306df8077ac74373d74833159175a4a732adefd767dd2';

const MAX_BODY      = 24 * 1024 * 1024;
const MAX_ATTEMPTS  = 6;
const LOCKOUT_MINS  = 15;
const SESSION_HOURS = 12;
const KEEP_BACKUPS  = 60;
const GROUPS        = ['government', 'ses', 'military', 'corporate'];

// -------------------------------------------------------------- helpers ----

function send(int $code, array $body): never {
    http_response_code($code);
    header('Content-Type: application/json; charset=utf-8');
    header('X-Content-Type-Options: nosniff');
    header('Cache-Control: no-store');
    echo json_encode($body, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function body(): array {
    $raw = file_get_contents('php://input', false, null, 0, MAX_BODY + 1);
    if ($raw === false || strlen($raw) > MAX_BODY) send(413, ['error' => 'That was too large to save']);
    $d = json_decode($raw ?: '{}', true);
    return is_array($d) ? $d : [];
}

/** Written via a temp file and renamed, so a failed write cannot truncate. */
function put_atomic(string $path, string $data): void {
    $tmp = $path . '.tmp' . bin2hex(random_bytes(3));
    if (file_put_contents($tmp, $data, LOCK_EX) === false) send(500, ['error' => 'Could not write ' . basename($path)]);
    if (!rename($tmp, $path)) { @unlink($tmp); send(500, ['error' => 'Could not replace ' . basename($path)]); }
}

function to_json($v): string {
    return json_encode($v, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n";
}

function creds(string $file): ?array {
    if (!is_file($file)) return null;
    $d = json_decode((string) file_get_contents($file), true);
    return is_array($d) && isset($d['user'], $d['hash']) ? $d : null;
}

function valid_slug(string $s): bool {
    return (bool) preg_match('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', $s) && strlen($s) <= 120;
}

function read_index(string $dir): array {
    foreach (['posts.json', 'posts.seed.json'] as $f) {
        if (is_file("$dir/$f")) {
            $d = json_decode((string) file_get_contents("$dir/$f"), true);
            if (is_array($d)) return $d;
            send(500, ['error' => "$f could not be read"]);
        }
    }
    return [];
}

/** Keep a copy of every index and body we are about to replace. */
function backup(string $backups, string $name, string $source): void {
    if (!is_file($source)) return;
    if (!is_dir($backups)) @mkdir($backups, 0700, true);
    @copy($source, $backups . '/' . gmdate('Ymd-His') . '-' . $name);
    $all = glob($backups . '/*') ?: [];
    sort($all);
    foreach (array_slice($all, 0, max(0, count($all) - KEEP_BACKUPS)) as $old) @unlink($old);
}

// ------------------------------------------------------- HTML sanitiser ----

/**
 * Article bodies are inserted into the page as HTML, so only a fixed set of
 * tags and attributes survives -- the ones the existing articles already use.
 * Anything else is unwrapped (its text kept) or, for scripts and the like,
 * dropped entirely.
 */
function clean_html(string $html): string {
    $allowed = [
        'p' => ['class'], 'br' => [], 'hr' => [], 'strong' => [], 'b' => [], 'em' => [], 'i' => [], 'u' => [],
        'h2' => [], 'h3' => [], 'h4' => [], 'ul' => ['class'], 'ol' => ['class'], 'li' => [],
        'blockquote' => [], 'a' => ['href', 'target', 'rel'],
        'figure' => ['class'], 'figcaption' => [], 'img' => ['src', 'alt', 'width', 'height'],
        'table' => [], 'thead' => [], 'tbody' => [], 'tr' => [], 'td' => ['colspan', 'rowspan'], 'th' => ['colspan', 'rowspan'],
    ];
    $drop = ['script', 'style', 'iframe', 'object', 'embed', 'form', 'input', 'button', 'textarea', 'select', 'svg', 'math', 'link', 'meta', 'head', 'title', 'noscript', 'template'];

    $doc = new DOMDocument('1.0', 'UTF-8');
    libxml_use_internal_errors(true);
    $doc->loadHTML('<?xml encoding="UTF-8"><div id="__root">' . $html . '</div>', LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD | LIBXML_NONET);
    libxml_clear_errors();
    $found = (new DOMXPath($doc))->query('//div[@id="__root"]');
    $root = $found && $found->length ? $found->item(0) : null;
    if (!$root) return '';

    $walk = function (DOMNode $node) use (&$walk, $allowed, $drop, $doc) {
        for ($child = $node->firstChild; $child !== null; $child = $next) {
            $next = $child->nextSibling;
            if ($child instanceof DOMComment || $child instanceof DOMProcessingInstruction) {
                $node->removeChild($child);
                continue;
            }
            if (!($child instanceof DOMElement)) continue;
            $tag = strtolower($child->tagName);

            if (in_array($tag, $drop, true)) { $node->removeChild($child); continue; }

            $walk($child);

            if (!isset($allowed[$tag])) {
                // Unknown wrapper (span, div, font...): keep what is inside it.
                while ($child->firstChild) $node->insertBefore($child->firstChild, $child);
                $node->removeChild($child);
                continue;
            }

            foreach (iterator_to_array($child->attributes) as $attr) {
                $name = strtolower($attr->name);
                if (!in_array($name, $allowed[$tag], true)) { $child->removeAttribute($attr->name); continue; }
                $val = trim($attr->value);
                if ($name === 'href' && !preg_match('#^(https?:|mailto:|tel:|/|\#)#i', $val)) $child->removeAttribute($attr->name);
                if ($name === 'src' && !preg_match('#^(https:|/)#i', $val)) $child->removeAttribute($attr->name);
                if ($name === 'target' && $val !== '_blank') $child->removeAttribute($attr->name);
                if ($name === 'class' && !preg_match('/^[a-z0-9 _-]{1,60}$/i', $val)) $child->removeAttribute($attr->name);
                if (in_array($name, ['width', 'height', 'colspan', 'rowspan'], true) && !preg_match('/^\d{1,4}$/', $val)) $child->removeAttribute($attr->name);
            }
            if ($tag === 'a' && $child->getAttribute('target') === '_blank') $child->setAttribute('rel', 'noopener');
            if ($tag === 'img' && !$child->hasAttribute('src')) $node->removeChild($child);
        }
    };
    $walk($root);

    $out = '';
    foreach ($root->childNodes as $n) $out .= $doc->saveHTML($n);
    // Empty paragraphs from pressing Enter twice.
    $out = preg_replace('#<p>(\s|&nbsp;|<br>)*</p>#u', '', $out) ?? $out;
    return trim($out);
}

function words(string $html): int {
    $text = trim(html_entity_decode(strip_tags($html), ENT_QUOTES | ENT_HTML5, 'UTF-8'));
    return $text === '' ? 0 : count(preg_split('/\s+/u', $text) ?: []);
}

function excerpt_from(string $html): string {
    $text = trim(preg_replace('/\s+/u', ' ', html_entity_decode(strip_tags(str_replace('</p>', '</p> ', $html)), ENT_QUOTES | ENT_HTML5, 'UTF-8')) ?? '');
    // Whole words up to ~260 characters; /u keeps multi-byte characters intact.
    if (!preg_match('/^.{261}/su', $text)) return $text;
    preg_match('/^.{0,260}(?=\s)/su', $text, $m);
    return rtrim($m[0] ?? '', " ,.;:") . '…';
}

// -------------------------------------------------------------- session ----

if (!is_dir($private) && !@mkdir($private, 0700, true)) {
    send(500, ['error' => 'The editor cannot create its private folder on the server']);
}

session_set_cookie_params([
    'lifetime' => SESSION_HOURS * 3600,
    'path'     => '/admin',
    'secure'   => true,
    'httponly' => true,
    'samesite' => 'Strict',
]);
session_name('t123_editor');
if (!is_dir($private . '/sessions')) @mkdir($private . '/sessions', 0700, true);
session_save_path($private . '/sessions');
ini_set('session.gc_maxlifetime', (string) (SESSION_HOURS * 3600));
session_start();

$signedIn = !empty($_SESSION['ok']) && ($_SESSION['exp'] ?? 0) > time();
if (!$signedIn) $_SESSION['ok'] = false;
if (empty($_SESSION['csrf'])) $_SESSION['csrf'] = bin2hex(random_bytes(32));

function require_session(bool $signedIn): void {
    if (!$signedIn) send(401, ['error' => 'Please sign in again']);
    if ($_SERVER['REQUEST_METHOD'] !== 'POST' && ($_GET['a'] ?? '') !== 'list' && ($_GET['a'] ?? '') !== 'get') {
        send(405, ['error' => 'Use POST']);
    }
    $sent = $_SERVER['HTTP_X_CSRF'] ?? '';
    if (!hash_equals((string) $_SESSION['csrf'], (string) $sent)) {
        send(403, ['error' => 'This page went stale. Reload and try again.']);
    }
}

function start_session(): void {
    session_regenerate_id(true);
    $_SESSION['ok'] = true;
    $_SESSION['exp'] = time() + SESSION_HOURS * 3600;
}

// --------------------------------------------------------------- routes ----

$a = (string) ($_GET['a'] ?? '');
$existing = creds($credFile);

if ($a === 'session') {
    send(200, ['signedIn' => $signedIn, 'needsSetup' => $existing === null, 'csrf' => $_SESSION['csrf']]);
}

if ($a === 'setup' || $a === 'login') {
    // One shared attempt counter, kept beside the hash so it survives sessions.
    $lock = is_file($lockFile) ? (json_decode((string) file_get_contents($lockFile), true) ?: []) : [];
    $fails = (int) ($lock['n'] ?? 0);
    $until = (int) ($lock['until'] ?? 0);
    if ($until > time()) {
        send(429, ['error' => 'Too many attempts. Try again in ' . (int) ceil(($until - time()) / 60) . ' minutes.']);
    }
    $fail = function (string $msg) use ($fails, $lockFile): never {
        $fails++;
        $next = ['n' => $fails >= MAX_ATTEMPTS ? 0 : $fails, 'until' => $fails >= MAX_ATTEMPTS ? time() + LOCKOUT_MINS * 60 : 0];
        put_atomic($lockFile, json_encode($next));
        send(401, ['error' => $msg]);
    };
    $d = body();

    if ($a === 'setup') {
        if ($existing !== null) send(409, ['error' => 'A login already exists']);
        $code = strtoupper(trim((string) ($d['code'] ?? '')));
        if (!hash_equals(SETUP_CODE_SHA256, hash('sha256', $code))) $fail('That setup code is not right');
        $user = trim((string) ($d['username'] ?? ''));
        $pass = (string) ($d['password'] ?? '');
        if (strlen($user) < 2)  send(400, ['error' => 'Choose a username of at least 2 characters']);
        if (strlen($pass) < 10) send(400, ['error' => 'Choose a password of at least 10 characters']);
        put_atomic($credFile, json_encode(['user' => $user, 'hash' => password_hash($pass, PASSWORD_DEFAULT)], JSON_PRETTY_PRINT));
        @chmod($credFile, 0600);
    } else {
        if ($existing === null) send(400, ['error' => 'No login has been set up yet']);
        $userOk = hash_equals($existing['user'], (string) ($d['username'] ?? ''));
        $passOk = password_verify((string) ($d['password'] ?? ''), $existing['hash']);
        // Same message either way, so neither field can be probed.
        if (!$userOk || !$passOk) $fail('Wrong username or password');
    }
    @unlink($lockFile);
    start_session();
    send(200, ['ok' => true, 'csrf' => $_SESSION['csrf']]);
}

if ($a === 'logout') {
    $_SESSION = [];
    session_destroy();
    send(200, ['ok' => true]);
}

if ($a === 'password') {
    require_session($signedIn);
    $d = body();
    if ($existing === null || !password_verify((string) ($d['current'] ?? ''), $existing['hash'])) {
        send(400, ['error' => 'Your current password is not right']);
    }
    $pass = (string) ($d['next'] ?? '');
    if (strlen($pass) < 10) send(400, ['error' => 'Choose a password of at least 10 characters']);
    put_atomic($credFile, json_encode(['user' => $existing['user'], 'hash' => password_hash($pass, PASSWORD_DEFAULT)], JSON_PRETTY_PRINT));
    send(200, ['ok' => true]);
}

if ($a === 'list') {
    require_session($signedIn);
    send(200, ['posts' => read_index($contentDir)]);
}

if ($a === 'get') {
    require_session($signedIn);
    $slug = (string) ($_GET['slug'] ?? '');
    if (!valid_slug($slug)) send(400, ['error' => 'Bad article address']);
    $file = "$blogDir/$slug.json";
    $d = is_file($file) ? json_decode((string) file_get_contents($file), true) : null;
    send(200, ['html' => is_array($d) ? (string) ($d['html'] ?? '') : '']);
}

if ($a === 'save') {
    require_session($signedIn);
    $d = body();
    $p = is_array($d['post'] ?? null) ? $d['post'] : [];
    $isNew = !empty($d['isNew']);

    $slug  = (string) ($p['slug'] ?? '');
    $title = trim((string) ($p['title'] ?? ''));
    $date  = (string) ($p['date'] ?? '');
    if (!valid_slug($slug)) send(400, ['error' => 'The web address may only use lowercase letters, numbers and hyphens']);
    if ($title === '') send(400, ['error' => 'The post needs a title']);
    if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $date)) send(400, ['error' => 'The date is not valid']);

    $html = clean_html((string) ($d['html'] ?? ''));
    if (words($html) < 20) send(400, ['error' => 'The article is too short to publish (under 20 words)']);

    $image = basename((string) ($p['image'] ?? ''));
    if ($image !== '' && !is_file("$imageDir/$image")) send(400, ['error' => 'The cover photo is missing; upload it again']);

    $excerpt = trim((string) ($p['excerpt'] ?? ''));
    $entry = [
        'slug'     => $slug,
        'title'    => $title,
        'date'     => $date,
        'excerpt'  => $excerpt !== '' ? $excerpt : excerpt_from($html),
        'image'    => $image,
        'imageAlt' => trim((string) ($p['imageAlt'] ?? '')) ?: $title,
        'wide'     => !empty($p['wide']),
        'category' => null,
        'minutes'  => max(1, (int) round(words($html) / 230)),
        'groups'   => array_values(array_intersect(GROUPS, array_filter((array) ($p['groups'] ?? []), 'is_string'))),
    ];
    if (!empty($p['draft'])) $entry['draft'] = true;

    $index = read_index($contentDir);
    $at = null;
    foreach ($index as $i => $row) if (($row['slug'] ?? '') === $slug) $at = $i;
    if ($isNew && $at !== null) send(409, ['error' => 'Another post already uses that web address. Change it slightly.']);
    if (!$isNew && $at === null) send(404, ['error' => 'That post no longer exists']);

    if ($at === null) {
        array_unshift($index, $entry);
    } else {
        // Keep any fields the editor does not know about.
        $merged = array_merge($index[$at], $entry);
        if (empty($p['draft'])) unset($merged['draft']);
        $index[$at] = $merged;
    }
    usort($index, fn($x, $y) => strcmp((string) ($y['date'] ?? ''), (string) ($x['date'] ?? '')));

    if (!is_dir($blogDir) && !mkdir($blogDir, 0755, true)) send(500, ['error' => 'Could not create the blog folder']);
    backup($backups, "$slug.json", "$blogDir/$slug.json");
    backup($backups, 'posts.json', "$contentDir/posts.json");
    // Body first: if the index write then failed, nothing points at a missing file.
    put_atomic("$blogDir/$slug.json", json_encode(['html' => $html], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));
    put_atomic("$contentDir/posts.json", to_json($index));
    send(200, ['ok' => true, 'post' => $entry, 'savedAt' => gmdate('c')]);
}

if ($a === 'delete') {
    require_session($signedIn);
    $slug = (string) (body()['slug'] ?? '');
    if (!valid_slug($slug)) send(400, ['error' => 'Bad article address']);
    $index = read_index($contentDir);
    $kept = array_values(array_filter($index, fn($r) => ($r['slug'] ?? '') !== $slug));
    if (count($kept) === count($index)) send(404, ['error' => 'That post no longer exists']);
    backup($backups, 'posts.json', "$contentDir/posts.json");
    // The body stays in place (and in backups) so the post can be restored.
    put_atomic("$contentDir/posts.json", to_json($kept));
    send(200, ['ok' => true]);
}

if ($a === 'upload') {
    require_session($signedIn);
    $d = body();
    if (!preg_match('#^data:image/(jpeg|png|webp);base64,([A-Za-z0-9+/=]+)$#', (string) ($d['dataUrl'] ?? ''), $m)) {
        send(400, ['error' => 'Expected a JPEG, PNG or WebP image']);
    }
    $bytes = base64_decode($m[2], true);
    if ($bytes === false || strlen($bytes) < 64) send(400, ['error' => 'That image could not be read']);

    // Trust the bytes, not the declared type.
    $info = @getimagesizefromstring($bytes);
    if ($info === false || !in_array($info[2], [IMAGETYPE_JPEG, IMAGETYPE_PNG, IMAGETYPE_WEBP], true)) {
        send(400, ['error' => 'That file is not a real image']);
    }
    $ext = [IMAGETYPE_JPEG => '.jpg', IMAGETYPE_PNG => '.png', IMAGETYPE_WEBP => '.webp'][$info[2]];

    // Built here from scratch, so nothing the caller sends can escape the folder.
    // The random tail matters: images are cached for a year, so a re-upload
    // must never reuse a name.
    $stem = strtolower(pathinfo((string) ($d['name'] ?? 'image'), PATHINFO_FILENAME));
    $stem = trim(preg_replace('/[^a-z0-9]+/', '-', $stem) ?? '', '-');
    $file = substr($stem === '' ? 'image' : $stem, 0, 60) . '-' . bin2hex(random_bytes(3)) . $ext;

    if (!is_dir($imageDir) && !mkdir($imageDir, 0755, true)) send(500, ['error' => 'Could not create the image folder']);
    if (file_put_contents("$imageDir/$file", $bytes, LOCK_EX) === false) send(500, ['error' => 'Could not save the image']);
    send(200, ['file' => $file, 'url' => '/assets/images/blog/' . $file]);
}

send(404, ['error' => 'Unknown action']);
