// Entry 47 — a slow moonrise behind the plate, and a counter for the roles.
(function () {
  "use strict";

  var entry = document.querySelector(".entry");
  if (!entry) return;

  // Gently pulse the gilt outline as if the entry were breathing under glass.
  var breath = 0;
  setInterval(function () {
    breath = (breath + 1) % 2;
    entry.style.outlineColor = breath ? "rgba(217, 181, 102, 0.85)" : "rgba(176, 141, 62, 1)";
  }, 4000);

  // When the "fifty films" line scrolls into view, dim then brighten it once.
  var target = null;
  Array.prototype.slice.call(document.querySelectorAll(".def p")).forEach(function (p) {
    if (p.indexOf("fifty") !== -1 && !target) target = p;
  });
  if (!target || !("IntersectionObserver" in window)) return;
  var seen = false;
  var obs = new IntersectionObserver(function (hits) {
    hits.forEach(function (hit) {
      if (hit.isIntersecting && !seen) {
        seen = true;
        target.style.transition = "opacity 1.2s ease";
        target.style.opacity = "0.55";
        setTimeout(function () { target.style.opacity = "1"; }, 900);
        obs.disconnect();
      }
    });
  }, { threshold: 0.6 });
  obs.observe(target);
})();
