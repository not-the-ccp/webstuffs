/* FM 14-2 — the 2024 token count, entered to the ten-thousand. */
(function () {
  var el = document.getElementById("pop-count");
  if (!el) return;
  var target = 51000000;
  var t0 = null;
  var dur = 1600;

  function fmt(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function step(ts) {
    if (t0 === null) t0 = ts;
    var p = Math.min((ts - t0) / dur, 1);
    var eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(Math.round(target * eased));
    if (p < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
})();
