// Bureau of Submerged Holdings — the depth gauge in the footer
// The standing length of water settles at 30 ft; the gauge breathes
// with the pool while the page is being read.
(function () {
  var el = document.getElementById("depth");
  if (!el) return;
  var target = 30;
  var phase = 0;
  function tick() {
    phase += 0.035;
    var wobble = Math.sin(phase) * 0.35;
    var shown = Math.max(0, Math.round(target + wobble * 10) / 10);
    // show whole feet most of the time, a tenth when the water moves
    el.textContent = (Math.abs(wobble) < 0.05 ? String(target) : shown.toFixed(1));
    window.setTimeout(tick, 240);
  }
  tick();
})();
