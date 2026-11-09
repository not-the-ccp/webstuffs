// W-BNCH 88.7 — the studio lamp. The VU needle wanders on its own
// four-second breathing, the way the counter on the bench keeps its tick.
(function () {
  "use strict";
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var needle = document.querySelector(".dial .needle");
  if (!needle || !needle.animate) return;
  // swing: rest at -22deg, flutter to +18deg, four seconds to the breath
  needle.animate(
    [
      { transform: "rotate(-22deg)" },
      { transform: "rotate(14deg)", offset: 0.35 },
      { transform: "rotate(2deg)", offset: 0.55 },
      { transform: "rotate(18deg)", offset: 0.8 },
      { transform: "rotate(-22deg)" }
    ],
    { duration: 4000, iterations: Infinity, easing: "ease-in-out" }
  );
})();
