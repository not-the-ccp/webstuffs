/* Catalogue B, Lot 143 — hammer count and the gavel's SOLD stamp */
(function () {
  var hammer = document.getElementById('hammer');
  var sold = document.getElementById('sold');
  if (!hammer || !sold) return;

  var target = 31750;
  var start = 18000;
  var dur = 1100;
  var t0 = null;

  function fmt(n) {
    return '$' + n.toLocaleString('en-US');
  }

  function tick(ts) {
    if (t0 === null) t0 = ts;
    var p = Math.min((ts - t0) / dur, 1);
    var eased = 1 - Math.pow(1 - p, 3);
    hammer.textContent = fmt(Math.round(start + (target - start) * eased));
    if (p < 1) {
      requestAnimationFrame(tick);
    } else {
      sold.classList.add('fallen');
    }
  }

  hammer.textContent = fmt(start);
  requestAnimationFrame(tick);
})();
