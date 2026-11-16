# Blog editor (/admin/)

Amy writes and edits blog posts herself at <https://transformations123.com/admin/>.
Saving publishes immediately: no build, no deploy, no developer.

## How it fits together

| Where | What |
| --- | --- |
| `content/posts.json` (server only) | The blog index. The site fetches it on load (`src/data/posts.js`). |
| `content/posts.seed.json` (repo) | Fallback the site uses until the editor first saves and creates `posts.json`. |
| `content/blog/<slug>.json` (server) | Each article body, `{"html": "..."}`. |
| `assets/images/blog/` (server) | Cover and in-article photos. Uploads get a random suffix, since images are cached for a year. |
| `~/.t123-editor/` (server, outside the web root) | Login hash, sessions, attempt counter, and the last 60 backups of every file the editor replaced. |

The GitHub deploy **excludes** `content/posts.json` and `content/blog/**`
(see `.github/workflows/deploy.yml`), so a code deploy can never undo a post Amy
wrote. The copies in this repo are a snapshot from the migration, not the live
content. Add or edit posts through `/admin/`, not by committing JSON.

## First sign-in

Creating the login needs the one-time setup code in
`admin-setup-code.local.txt` (git-ignored, on the developer's machine). Its
SHA-256 is in `public/admin/api.php`. Once a login exists, setup is closed.

Forgotten password: delete `~/.t123-editor/login.json` on the server (cPanel
File Manager), then create the login again with the setup code.

## Safety

- Every write needs a signed-in session plus a CSRF token; sessions last 12 hours.
- Six wrong attempts lock sign-in for 15 minutes.
- Article HTML is cleaned on the server to the tags the existing posts use
  (headings, paragraphs, lists, links, quotes, images, tables).
- Deleting a post removes it from the index only; its body and backups stay.
