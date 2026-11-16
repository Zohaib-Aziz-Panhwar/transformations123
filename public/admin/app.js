/* Blog editor for transformations123.com/admin/ -- talks to api.php. */

const $ = (id) => document.getElementById(id)
const GROUPS = [['government', 'Government'], ['ses', 'SES'], ['military', 'Military'], ['corporate', 'Corporate']]
const IMG = '/assets/images/blog/'

let csrf = ''
let posts = []
let current = null   // { post, isNew }
let dirty = false

// ------------------------------------------------------------------ api ----

async function api(action, { body, query = '' } = {}) {
  const res = await fetch(`api.php?a=${action}${query}`, {
    method: body ? 'POST' : 'GET',
    credentials: 'same-origin',
    headers: { 'content-type': 'application/json', 'x-csrf': csrf },
    body: body ? JSON.stringify(body) : undefined,
  })
  let out = {}
  try { out = await res.json() } catch { /* not JSON: a server error page */ }
  if (res.status === 401) { location.replace('login.html'); throw new Error('Signed out') }
  if (!res.ok) throw new Error(out.error || `The server said ${res.status}`)
  return out
}

function toast(msg, isError = false) {
  const t = $('toast')
  t.textContent = msg
  t.classList.toggle('is-error', isError)
  t.hidden = false
  clearTimeout(toast.timer)
  toast.timer = setTimeout(() => { t.hidden = true }, isError ? 6000 : 3000)
}

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const fmtDate = (iso) => iso ? new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : ''
const today = () => { const d = new Date(); return new Date(d - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10) }
const slugify = (s) => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/['’]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 90).replace(/-+$/, '')

// --------------------------------------------------------------- dialog ----

/** A small modal. fields: [{ id, label, type, value }]. Resolves to values or null. */
function ask(title, fields, okLabel = 'OK', danger = false) {
  const d = $('dialog')
  $('dialogForm').innerHTML = `<h2>${esc(title)}</h2>` +
    fields.map((f) => f.text
      ? `<p>${esc(f.text)}</p>`
      : `<div class="field"><label for="dlg_${f.id}">${esc(f.label)}</label><input id="dlg_${f.id}" type="${f.type || 'text'}" value="${esc(f.value || '')}" /></div>`).join('') +
    `<div class="actions"><button class="btn btn--ghost" value="cancel">Cancel</button><button class="btn ${danger ? 'btn--danger' : 'btn--primary'}" value="ok">${esc(okLabel)}</button></div>`
  d.showModal()
  d.querySelector('input')?.focus()
  return new Promise((resolve) => {
    d.addEventListener('close', () => {
      if (d.returnValue !== 'ok') return resolve(null)
      const out = {}
      for (const f of fields) if (f.id) out[f.id] = $('dlg_' + f.id).value
      resolve(out)
    }, { once: true })
  })
}

// --------------------------------------------------------------- photos ----

/** Resized in the browser, so a 6 MB phone photo uploads as ~300 KB. */
function resize(file, max = 1600) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const scale = Math.min(1, max / Math.max(img.width, img.height))
      const canvas = Object.assign(document.createElement('canvas'), { width: Math.round(img.width * scale), height: Math.round(img.height * scale) })
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      URL.revokeObjectURL(img.src)
      resolve(canvas.toDataURL('image/jpeg', 0.85))
    }
    img.onerror = () => reject(new Error('That file could not be opened as a photo'))
    img.src = URL.createObjectURL(file)
  })
}

async function upload(file) {
  toast('Uploading photo…')
  const dataUrl = await resize(file)
  return api('upload', { body: { name: file.name, dataUrl } })
}

// ------------------------------------------------------------ list view ----

function showList() {
  current = null
  setDirty(false)
  $('editView').hidden = true
  $('listView').hidden = false
  history.replaceState(null, '', './')
  renderList()
}

function renderList() {
  const q = $('search').value.trim().toLowerCase()
  const list = posts.filter((p) => !q || p.title.toLowerCase().includes(q) || (p.excerpt || '').toLowerCase().includes(q))
  $('count').textContent = `${posts.length} posts${q ? ` · ${list.length} match` : ''}`
  $('posts').innerHTML = list.map((p) => `
    <li class="post" data-slug="${esc(p.slug)}">
      ${p.image ? `<img src="${IMG + esc(p.image)}" alt="" loading="lazy" />` : '<span class="noimg"></span>'}
      <div>
        <p class="post__title">${esc(p.title)}${p.draft ? '<span class="badge">Draft</span>' : ''}</p>
        <div class="post__meta">${fmtDate(p.date)} · ${p.minutes || 1} min read</div>
      </div>
      <div class="post__actions">
        <button class="btn btn--sm" data-act="edit" type="button">Edit</button>
        ${p.draft ? '' : `<a class="btn btn--ghost btn--sm" href="/blog/${esc(p.slug)}" target="_blank" rel="noopener">View ↗</a>`}
      </div>
    </li>`).join('')
}

$('posts').addEventListener('click', (e) => {
  if (e.target.closest('a')) return
  const li = e.target.closest('.post')
  if (li) openPost(li.dataset.slug)
})
$('search').addEventListener('input', renderList)
$('newPost').addEventListener('click', () => openPost(null))

// ------------------------------------------------------------ edit view ----

function setDirty(v) {
  dirty = v
  const s = $('status')
  s.textContent = v ? 'Unsaved changes' : (current && !current.isNew ? 'All changes saved' : '')
  s.classList.toggle('is-dirty', v)
}

function setCover(file) {
  current.post.image = file || ''
  const c = $('cover')
  c.style.backgroundImage = file ? `url("${IMG + file}")` : ''
  c.classList.toggle('has-image', !!file)
  $('coverClear').hidden = !file
}

function updateWordCount() {
  const words = ($('body').innerText.trim().match(/\S+/g) || []).length
  $('wordCount').textContent = `${words} words · about ${Math.max(1, Math.round(words / 230))} min read`
}

async function openPost(slug) {
  if (slug) {
    const post = posts.find((p) => p.slug === slug)
    if (!post) return toast('That post was not found', true)
    let html = ''
    try { html = (await api('get', { query: '&slug=' + encodeURIComponent(slug) })).html } catch (e) { return toast(e.message, true) }
    current = { post: structuredClone(post), isNew: false }
    $('body').innerHTML = html
  } else {
    current = { post: { slug: '', title: '', date: today(), excerpt: '', image: '', imageAlt: '', wide: false, groups: [] }, isNew: true }
    $('body').innerHTML = ''
  }
  const p = current.post
  $('title').value = p.title
  $('date').value = p.date
  $('draft').checked = !!p.draft
  $('imageAlt').value = p.imageAlt || ''
  $('wide').checked = !!p.wide
  $('excerpt').value = current.isNew ? '' : (p.excerpt || '')
  $('slug').value = p.slug
  $('slug').disabled = !current.isNew
  $('slugNote').textContent = current.isNew
    ? 'Filled in from the title. Cannot be changed after publishing.'
    : 'Fixed once published, so links to this post keep working.'
  $('groups').innerHTML = GROUPS.map(([k, label]) =>
    `<label class="check"><input type="checkbox" value="${k}" ${(p.groups || []).includes(k) ? 'checked' : ''} /> ${label}</label>`).join('')
  setCover(p.image)
  $('delete').hidden = current.isNew
  $('viewLive').hidden = current.isNew || !!p.draft
  $('viewLive').href = '/blog/' + p.slug
  $('save').textContent = current.isNew ? 'Publish' : 'Save changes'
  updateWordCount()
  $('listView').hidden = true
  $('editView').hidden = false
  setDirty(false)
  history.replaceState(null, '', current.isNew ? '#new' : '#' + p.slug)
  window.scrollTo(0, 0)
  ;(current.isNew ? $('title') : $('body')).focus()
}

$('title').addEventListener('input', () => {
  if (current?.isNew && !$('slug').dataset.touched) $('slug').value = slugify($('title').value)
})
$('slug').addEventListener('input', () => { $('slug').dataset.touched = '1' })
$('slug').addEventListener('change', () => { $('slug').value = slugify($('slug').value) })

$('editView').addEventListener('input', (e) => {
  if (e.target.closest('#body')) updateWordCount()
  setDirty(true)
})
$('editView').addEventListener('change', () => setDirty(true))

$('back').addEventListener('click', () => {
  if (dirty && !confirm('You have unsaved changes. Leave without saving?')) return
  showList()
})

window.addEventListener('beforeunload', (e) => { if (dirty) { e.preventDefault(); e.returnValue = '' } })

$('coverPick').addEventListener('click', () => $('coverFile').click())
$('coverFile').addEventListener('change', async (e) => {
  const file = e.target.files[0]
  e.target.value = ''
  if (!file) return
  try {
    const out = await upload(file)
    setCover(out.file)
    if (!$('imageAlt').value) $('imageAlt').value = $('title').value
    setDirty(true)
    toast('Photo uploaded')
  } catch (err) { toast(err.message, true) }
})
$('coverClear').addEventListener('click', () => { setCover(''); setDirty(true) })

async function save() {
  const p = current.post
  p.title = $('title').value.trim()
  p.date = $('date').value
  p.draft = $('draft').checked
  p.imageAlt = $('imageAlt').value.trim()
  p.wide = $('wide').checked
  p.excerpt = $('excerpt').value.trim()
  p.groups = [...$('groups').querySelectorAll('input:checked')].map((i) => i.value)
  if (current.isNew) p.slug = slugify($('slug').value || p.title)

  if (!p.title) return toast('Give the post a title first', true)
  if (!p.slug) return toast('The web address is empty', true)
  if (!p.date) return toast('Pick a date', true)

  $('save').disabled = true
  try {
    const out = await api('save', { body: { post: p, html: $('body').innerHTML, isNew: current.isNew } })
    const wasNew = current.isNew
    const i = posts.findIndex((x) => x.slug === out.post.slug)
    if (i >= 0) posts[i] = out.post; else posts.unshift(out.post)
    posts.sort((a, b) => String(b.date).localeCompare(String(a.date)))
    current = { post: structuredClone(out.post), isNew: false }
    $('slug').disabled = true
    $('slugNote').textContent = 'Fixed once published, so links to this post keep working.'
    $('delete').hidden = false
    $('viewLive').hidden = !!out.post.draft
    $('viewLive').href = '/blog/' + out.post.slug
    $('save').textContent = 'Save changes'
    $('excerpt').value = out.post.excerpt
    history.replaceState(null, '', '#' + out.post.slug)
    setDirty(false)
    toast(out.post.draft ? 'Saved as a draft (not on the site)' : wasNew ? 'Published! It is live on the blog now.' : 'Saved. The live post is updated.')
  } catch (err) {
    toast(err.message, true)
  } finally {
    $('save').disabled = false
  }
}
$('save').addEventListener('click', save)
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's' && current) { e.preventDefault(); save() }
})

$('delete').addEventListener('click', async () => {
  const p = current.post
  const ok = await ask('Delete this post?', [{ text: `“${p.title}” will be removed from the blog. A backup copy is kept on the server.` }], 'Delete', true)
  if (!ok) return
  try {
    await api('delete', { body: { slug: p.slug } })
    posts = posts.filter((x) => x.slug !== p.slug)
    toast('Post deleted')
    showList()
  } catch (err) { toast(err.message, true) }
})

// -------------------------------------------------------- rich text box ----

const body = $('body')
document.execCommand('defaultParagraphSeparator', false, 'p')

$('toolbar').addEventListener('mousedown', (e) => { if (e.target.closest('button')) e.preventDefault() })
$('toolbar').addEventListener('click', (e) => {
  const b = e.target.closest('button')
  if (!b) return
  body.focus()
  if (b.dataset.block) {
    // Pressing Quote / H2 again on the same block turns it back into a paragraph.
    const block = closestBlock()
    const tag = block && block.tagName.toLowerCase() === b.dataset.block ? 'p' : b.dataset.block
    document.execCommand('formatBlock', false, `<${tag}>`)
  } else if (b.dataset.cmd) {
    document.execCommand(b.dataset.cmd, false, null)
  }
  setDirty(true)
})

function closestBlock() {
  let n = getSelection().anchorNode
  while (n && n !== body) {
    if (n.nodeType === 1 && /^(P|H2|H3|H4|BLOCKQUOTE|LI)$/.test(n.tagName)) return n
    n = n.parentNode
  }
  return null
}

async function addLink() {
  const sel = getSelection()
  if (!sel.rangeCount || !body.contains(sel.anchorNode)) return toast('Select some text in the article first', true)
  const range = sel.getRangeAt(0).cloneRange()
  const existing = sel.anchorNode.parentElement?.closest('a')?.getAttribute('href') || ''
  const out = await ask('Add a link', [{ id: 'url', label: 'Web address', value: existing || 'https://' }], 'Add link')
  if (!out) return
  let url = out.url.trim()
  if (!url || url === 'https://') return
  if (!/^(https?:|mailto:|tel:|\/|#)/i.test(url)) url = 'https://' + url
  body.focus()
  sel.removeAllRanges()
  sel.addRange(range)
  if (range.collapsed) {
    document.execCommand('insertHTML', false, `<a href="${esc(url)}">${esc(url)}</a>`)
  } else {
    document.execCommand('createLink', false, url)
  }
  // Links to other sites open in a new tab, like the rest of the blog.
  if (/^https?:/i.test(url) && !url.includes(location.host)) {
    body.querySelectorAll(`a[href="${CSS.escape(url)}"]`).forEach((a) => { a.target = '_blank'; a.rel = 'noopener' })
  }
  setDirty(true)
}
$('linkBtn').addEventListener('click', addLink)
body.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); addLink() }
})

let savedRange = null
$('imageBtn').addEventListener('click', () => {
  const sel = getSelection()
  savedRange = sel.rangeCount && body.contains(sel.anchorNode) ? sel.getRangeAt(0).cloneRange() : null
  $('inlineFile').click()
})
$('inlineFile').addEventListener('change', async (e) => {
  const file = e.target.files[0]
  e.target.value = ''
  if (!file) return
  try {
    const out = await upload(file)
    const cap = await ask('Describe the photo', [{ id: 'alt', label: 'Description (for screen readers)', value: '' }], 'Insert')
    body.focus()
    const sel = getSelection()
    sel.removeAllRanges()
    if (savedRange) sel.addRange(savedRange)
    else { const r = document.createRange(); r.selectNodeContents(body); r.collapse(false); sel.addRange(r) }
    document.execCommand('insertHTML', false, `<figure><img src="${esc(out.url)}" alt="${esc(cap?.alt || '')}"></figure><p><br></p>`)
    setDirty(true)
    toast('Photo added')
  } catch (err) { toast(err.message, true) }
})

/* Pasting from Word or Google Docs brings fonts, colours and wrappers. Keep
   only the structure the blog uses; the server applies the same rules again. */
const KEEP = new Set(['P', 'BR', 'HR', 'STRONG', 'EM', 'U', 'H2', 'H3', 'H4', 'UL', 'OL', 'LI', 'BLOCKQUOTE', 'A', 'FIGURE', 'FIGCAPTION', 'IMG', 'TABLE', 'THEAD', 'TBODY', 'TR', 'TD', 'TH'])
const RENAME = { B: 'STRONG', I: 'EM', H1: 'H2', H5: 'H4', H6: 'H4', DIV: 'P' }

function cleanPasted(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  const walk = (node) => {
    for (const el of [...node.children]) {
      walk(el)
      let tag = el.tagName
      const style = (el.getAttribute('style') || '').toLowerCase()
      // Google Docs marks bold/italic with inline styles on spans.
      if (tag === 'SPAN' || (tag === 'B' && /font-weight:\s*(normal|400)/.test(style))) {
        const bold = /font-weight:\s*(bold|[6-9]00)/.test(style)
        const italic = /font-style:\s*italic/.test(style)
        if (bold || italic) {
          let inner = el.innerHTML
          if (italic) inner = `<em>${inner}</em>`
          if (bold) inner = `<strong>${inner}</strong>`
          el.outerHTML = inner
        } else {
          el.replaceWith(...el.childNodes)
        }
        continue
      }
      if (['SCRIPT', 'STYLE', 'META', 'LINK', 'TITLE', 'svg', 'IFRAME', 'OBJECT'].includes(tag)) { el.remove(); continue }
      if (RENAME[tag]) {
        const n = doc.createElement(RENAME[tag])
        n.append(...el.childNodes)
        if (tag !== 'DIV' || !n.querySelector('p,h2,h3,ul,ol,table,blockquote')) { el.replaceWith(n); tag = n.tagName; continue }
        el.replaceWith(...n.childNodes)
        continue
      }
      if (!KEEP.has(tag)) { el.replaceWith(...el.childNodes); continue }
      for (const a of [...el.attributes]) {
        const keep = (tag === 'A' && a.name === 'href') || (tag === 'IMG' && ['src', 'alt'].includes(a.name)) || (['TD', 'TH'].includes(tag) && ['colspan', 'rowspan'].includes(a.name))
        if (!keep) el.removeAttribute(a.name)
      }
      if (tag === 'IMG' && !/^(https:|\/)/.test(el.getAttribute('src') || '')) el.remove()
      if (tag === 'A' && /^https?:/.test(el.getAttribute('href') || '') && !el.href.includes(location.host)) { el.target = '_blank'; el.rel = 'noopener' }
    }
  }
  walk(doc.body)
  // Word leaves empty paragraphs between real ones.
  doc.body.querySelectorAll('p').forEach((p) => { if (!p.textContent.trim() && !p.querySelector('img')) p.remove() })
  return doc.body.innerHTML
}

body.addEventListener('paste', (e) => {
  const html = e.clipboardData.getData('text/html')
  const text = e.clipboardData.getData('text/plain')
  e.preventDefault()
  if (html) {
    document.execCommand('insertHTML', false, cleanPasted(html))
  } else if (text) {
    // Plain text: blank lines start new paragraphs.
    const paras = text.replace(/\r/g, '').split(/\n\s*\n/).map((t) => `<p>${esc(t.trim()).replace(/\n/g, '<br>')}</p>`)
    document.execCommand('insertHTML', false, paras.length > 1 ? paras.join('') : esc(text))
  }
  setDirty(true)
  updateWordCount()
})

// Dropped files would otherwise be embedded as huge data: URLs.
body.addEventListener('drop', (e) => { if (e.dataTransfer?.files?.length) { e.preventDefault(); toast('Use the Photo button to add pictures', true) } })

// ------------------------------------------------------------- account ----

$('signout').addEventListener('click', async () => {
  if (dirty && !confirm('You have unsaved changes. Sign out anyway?')) return
  dirty = false
  await api('logout', { body: {} }).catch(() => {})
  location.replace('login.html')
})

$('changePassword').addEventListener('click', async () => {
  const out = await ask('Change password', [
    { id: 'current', label: 'Current password', type: 'password' },
    { id: 'next', label: 'New password (at least 10 characters)', type: 'password' },
  ], 'Change password')
  if (!out) return
  try { await api('password', { body: out }); toast('Password changed') } catch (err) { toast(err.message, true) }
})

// ---------------------------------------------------------------- start ----

async function start() {
  const s = await (await fetch('api.php?a=session', { credentials: 'same-origin' })).json()
  if (!s.signedIn) return location.replace('login.html')
  csrf = s.csrf
  posts = (await api('list')).posts
  const hash = decodeURIComponent(location.hash.slice(1))
  if (hash === 'new') openPost(null)
  else if (hash && posts.some((p) => p.slug === hash)) openPost(hash)
  else showList()
}

start().catch((err) => toast(err.message, true))
