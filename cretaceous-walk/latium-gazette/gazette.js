// The Latium Gazette, Sheet 84 — a small press touch.
// Clicking the masthead stamps the sheet with the press mark; the
// column of ads tallies itself into the footnote mark. Purely
// decorative: the sheet reads fully without it.
(function () {
  var masthead = document.querySelector('.masthead');
  var footmark = document.querySelector('.footmark');
  if (!masthead || !footmark) return;

  var ads = document.querySelectorAll('.grid article').length;
  footmark.textContent = 'L · K · Creta · 84 · ' + ads + ' notices set';

  var stamped = false;
  masthead.addEventListener('click', function () {
    if (stamped) return;
    stamped = true;
    var mark = document.createElement('span');
    mark.textContent = 'PRESS OPEN · 9:00';
    mark.setAttribute('aria-hidden', 'true');
    mark.className = 'press-mark';
    mark.style.cssText =
      'position:absolute;right:2.2rem;top:3.6rem;z-index:2;' +
      'border:2px solid #8c3b2e;color:#8c3b2e;padding:0.2rem 0.6rem;' +
      'font-size:0.7rem;letter-spacing:0.2em;transform:rotate(-6deg);' +
      'background:rgba(251,249,242,0.85);mix-blend-mode:multiply;';
    masthead.appendChild(mark);
  });
})();
