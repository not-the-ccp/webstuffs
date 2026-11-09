/* Station R-1147 — needle tracking & VU meters */
(function () {
  "use strict";

  var needle = document.getElementById("needle");
  var vu1 = document.getElementById("vu1");
  var vu2 = document.getElementById("vu2");

  // The needle tracks reading position across the 80–150 band.
  function updateNeedle() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    var left = 6 + p * 88; // 6% … 94%
    if (needle) needle.style.left = left.toFixed(2) + "%";
  }

  window.addEventListener("scroll", updateNeedle, { passive: true });
  window.addEventListener("resize", updateNeedle);
  updateNeedle();

  // VU meters breathe with the "broadcast".
  var t = 0;
  function tickVU() {
    t += 0.11;
    if (vu1) {
      var a = 0.35 + 0.5 * Math.abs(Math.sin(t * 1.7)) + 0.1 * Math.random();
      vu1.style.height = Math.min(95, a * 100).toFixed(1) + "%";
    }
    if (vu2) {
      var b = 0.3 + 0.5 * Math.abs(Math.cos(t * 1.3 + 1.1)) + 0.1 * Math.random();
      vu2.style.height = Math.min(95, b * 100).toFixed(1) + "%";
    }
    setTimeout(tickVU, 160);
  }
  tickVU();
})();
