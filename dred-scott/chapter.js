/* Chapter XXIII — a lamp by the sitting table. */
(function () {
  "use strict";
  var line = document.getElementById("ledgerline");
  if (!line) return;

  var lit = false;
  function paint() {
    if (lit) return;
    var r = line.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.78 && r.bottom > 0) {
      lit = true;
      line.classList.add("lit");
    }
  }

  window.addEventListener("scroll", paint, { passive: true });
  window.addEventListener("resize", paint, { passive: true });
  paint();
})();
