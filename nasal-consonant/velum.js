/* SDS-NC-01 — velum indicator: a breathing cycle, lowered / raised */
(function () {
  var el = document.getElementById("velum-state");
  if (!el) return;
  var t = 0;
  function tick() {
    t += 1;
    // one full breath every ~8 seconds
    var lowered = Math.sin((t / 48) * Math.PI * 2) > -0.15;
    el.textContent = lowered ? "Velum: lowered — air free through the nose" : "Velum: raised — air held";
    el.classList.toggle("down", lowered);
    setTimeout(tick, 500);
  }
  tick();
})();
