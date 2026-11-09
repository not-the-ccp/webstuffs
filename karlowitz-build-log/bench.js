/* Bench 2 — candle flicker for the Karlowitz room build log.
   Purely decorative; the log reads fine with scripts off. */
(function () {
  var stamp = document.querySelector(".stamp");
  if (!stamp) return;
  var base = 0.9;
  var phase = 0;
  function tick() {
    phase += 0.07;
    // slow, uneven flicker: the room was lit by eleven candles
    var w = Math.sin(phase) * 0.5 + Math.sin(phase * 2.7) * 0.3 + Math.sin(phase * 0.31) * 0.2;
    stamp.style.opacity = (base + w * 0.06).toFixed(3);
    requestAnimationFrame(tick);
  }
  if (window.matchMedia && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    requestAnimationFrame(tick);
  }
})();
