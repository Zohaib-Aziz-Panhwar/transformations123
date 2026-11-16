const $ = (id) => document.getElementById(id)
let needsSetup = false

const showError = (msg) => { $('error').textContent = msg; $('error').hidden = !msg }

async function init() {
  try {
    const s = await (await fetch('api.php?a=session', { credentials: 'same-origin' })).json()
    if (s.signedIn) return location.replace('./')
    needsSetup = s.needsSetup
  } catch {
    return showError('The editor is not responding. Please try again in a minute.')
  }
  if (needsSetup) {
    $('title').textContent = 'Create your login'
    $('sub').textContent = 'First time here. Enter the setup code you were given, then choose a username and password.'
    $('codeField').hidden = false
    $('code').required = true
    $('code').focus()
    $('passwordLabel').innerHTML = 'Password <span class="help">at least 10 characters</span>'
    $('password').autocomplete = 'new-password'
    $('submit').textContent = 'Create login'
  }
}

$('form').addEventListener('submit', async (e) => {
  e.preventDefault()
  showError('')
  $('submit').disabled = true
  try {
    const res = await fetch(needsSetup ? 'api.php?a=setup' : 'api.php?a=login', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ code: $('code').value, username: $('username').value, password: $('password').value }),
    })
    const out = await res.json()
    if (!res.ok) throw new Error(out.error || 'Sign in failed')
    location.replace('./')
  } catch (err) {
    showError(err.message)
    $('password').value = ''
    $('password').focus()
    $('submit').disabled = false
  }
})

init()
