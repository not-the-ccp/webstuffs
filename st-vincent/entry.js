// Entry 731 — St Vincent: the compass sways with the reading.
(function () {
  "use strict";
  var compass = document.querySelector(".compass svg");
  if (!compass || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var base = 0, target = 0;
  setInterval(function () {
    target = (Math.random() - 0.5) * 8;
  }, 3200);
  function tick() {
    base += (target - base) * 0.02;
    compass.style.transform = "rotate(" + base.toFixed(2) + "deg)";
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
