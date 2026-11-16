/* Blog index.

   The list is NOT bundled: it lives on the server as content/posts.json, which
   Amy edits through /admin/. main.jsx calls loadPosts() before the first
   render, so every component can keep reading `posts` synchronously.

   content/posts.seed.json is the copy shipped with the build. It is only used
   until the editor saves for the first time and creates content/posts.json;
   after that the server's file is the source of truth and deploys never touch
   it (see .github/workflows/deploy.yml). */

const A = import.meta.env.BASE_URL;

// A live binding: importers see the array assigned by loadPosts().
export let posts = [];

async function fetchJson(path) {
  const r = await fetch(`${A}content/${path}`, { cache: 'no-cache' });
  if (!r.ok) throw new Error(`${path}: ${r.status}`);
  return r.json();
}

export async function loadPosts() {
  let list;
  try {
    list = await fetchJson('posts.json');
  } catch {
    try { list = await fetchJson('posts.seed.json'); } catch { list = []; }
  }
  posts = (Array.isArray(list) ? list : [])
    .filter(p => p && p.slug && !p.draft)
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
  return posts;
}
