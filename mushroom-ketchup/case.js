/* Case 12 — a quiet touch: the bottle lifts its shadow on hover, and the
   accession line settles in once the case has loaded. Nothing moves that the
   printed page cannot live without. */
(function () {
  var caseEl = document.querySelector('.case');
  var bottle = document.querySelector('.bottle');
  if (caseEl) {
    caseEl.classList.add('settled');
  }
  if (bottle) {
    var wrap = bottle.parentElement;
    wrap.style.transition = 'transform 240ms ease';
    bottle.addEventListener('mouseenter', function () {
      wrap.style.transform = 'translateY(-4px)';
    });
    bottle.addEventListener('mouseleave', function () {
      wrap.style.transform = 'translateY(0)';
    });
  }
})();
