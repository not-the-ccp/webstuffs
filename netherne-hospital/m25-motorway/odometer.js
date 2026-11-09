// Small odometer touch: the "117 mi" figure on the cover counts up on load.
(function () {
  var el = document.querySelector(".lane");
  if (!el || !/117/.test(el.textContent)) return;
  var target = 117, step = 0, t0 = null;
  function tick(ts) {
    if (!t0) t0 = ts;
    var p = Math.min((ts - t0) / 1400, 1);
    step = Math.floor(target * (1 - Math.pow(1 - p, 3)));
    el.textContent = step + "\u00A0mi / 188\u00A0km";
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = "117\u00A0mi / 188\u00A0km";
  }
  if (window.requestAnimationFrame) requestAnimationFrame(tick);
})();
