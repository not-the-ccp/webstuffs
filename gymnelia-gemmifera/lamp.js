/* OCE-014 — the lamp breathes with the reader's scroll. */
(function () {
  var lamp = document.querySelector('.lamp');
  var dust = document.querySelector('.dust');
  if (!lamp) return;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    var h = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    var t = Math.min(1, y / h); // 0 at top, 1 at bottom of the record
    // The lamp is brightest at the top (A1: Lamp On) and dims toward B3 (Venezuela, at Night).
    var brightness = 1 - 0.55 * t;
    lamp.style.filter = 'brightness(' + brightness.toFixed(3) + ')';
    if (dust) dust.style.opacity = (0.4 + 0.6 * brightness).toFixed(3);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
