/* Minutes No. 47 — the candle roll, counting on since the meeting closed */
(function () {
  var el = document.getElementById("candle-count");
  if (!el) return;
  var base = 4117, start = null;
  function tick(ts) {
    if (start === null) start = ts;
    var extra = Math.floor((ts - start) / 90000); // one candle a minute and a half
    var n = base + extra;
    el.textContent = n.toLocaleString() + " (the roll is running)";
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
