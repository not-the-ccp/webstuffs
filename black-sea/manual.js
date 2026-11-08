/* FM-13 · Ch. 4 — sounding gauge + anoxic bubbles. Pure garnish; the text stands without it. */
(function () {
  "use strict";

  var MAX_DEPTH = 2212; // metres, the sea's figure

  var read = document.getElementById("gaugeRead");
  if (read) {
    var tick = function () {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(1, Math.max(0, (window.scrollY || doc.scrollTop) / max)) : 0;
      var depth = Math.round(p * MAX_DEPTH);
      read.textContent = depth.toLocaleString("en-US") + " m";
      // the gauge darkens as you descend below the oxygen shelf
      var o = 1 - p * 0.55;
      read.style.opacity = o.toFixed(2);
    };
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick);
    tick();
  }

  var tube = document.getElementById("tube");
  if (tube && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    for (var i = 0; i < 14; i++) {
      var b = document.createElement("span");
      b.className = "bubble";
      var size = 2 + Math.random() * 4;
      b.style.width = size + "px";
      b.style.height = size + "px";
      b.style.left = (2 + Math.random() * 9) + "px";
      b.style.animationDuration = (3 + Math.random() * 5).toFixed(2) + "s";
      b.style.animationDelay = (Math.random() * 6).toFixed(2) + "s";
      tube.appendChild(b);
    }
  }
})();
