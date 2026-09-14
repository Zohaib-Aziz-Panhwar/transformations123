// Mobile navigation toggle
(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  // close menu when a link is tapped
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Graceful fallback for images that haven't been supplied yet:
// the parent gets `.is-missing` so CSS can show a branded gradient instead of a broken icon.
(function () {
  document.querySelectorAll('.who-img img, .hero-portrait img').forEach(function (img) {
    function markMissing() { img.parentElement.classList.add('is-missing'); }
    if (img.complete && img.naturalWidth === 0) markMissing();
    img.addEventListener('error', markMissing);
  });
})();
