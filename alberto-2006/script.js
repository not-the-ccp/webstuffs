/* Notice Nº 106 — the barometric slip, ticking down to 908 mb.
   Decorative only; the notice reads fine with the script disabled. */
(function () {
  var pressureEl = document.getElementById('pressure');
  var needle = document.getElementById('needle');
  if (!pressureEl) return;

  var start = 1013;
  var end = 908;
  var duration = 2200;
  var t0 = null;

  // The needle sweeps from rest (vertical) toward the low end of the arc.
  if (needle) {
    requestAnimationFrame(function () {
      needle.style.transform = 'rotate(-52deg)';
    });
  }

  function step(ts) {
    if (t0 === null) t0 = ts;
    var p = Math.min((ts - t0) / duration, 1);
    var eased = 1 - Math.pow(1 - p, 3);
    pressureEl.textContent = Math.round(start + (end - start) * eased);
    if (p < 1) {
      requestAnimationFrame(step);
    } else {
      // It keeps breathing: 908, then a hair higher, then back.
      setInterval(function () {
        pressureEl.textContent = '909';
        setTimeout(function () { pressureEl.textContent = '908'; }, 1400);
      }, 6000);
    }
  }
  requestAnimationFrame(step);
})();
