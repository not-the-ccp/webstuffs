/* Lot 88 — the hammer, pressed at 9:26 */
(function () {
  "use strict";

  var hammer = document.getElementById("hammer");
  if (!hammer) return;

  function sell() {
    hammer.classList.add("sold");
    hammer.setAttribute("aria-pressed", "true");
  }

  hammer.addEventListener("click", sell);
  hammer.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      sell();
    }
  });

  // the paddle is up at 9:25: if the lot is read all the way down, the hammer falls itself
  if ("IntersectionObserver" in window) {
    var kept = document.getElementById("kept-line");
    if (kept) {
      var seen = { kept: false, foot: false };
      var foot = document.querySelector(".cat-foot");
      var watch = function (el, key) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) {
              seen[key] = true;
              if (seen.kept && seen.foot && !hammer.classList.contains("sold")) {
                setTimeout(sell, 600);
              }
              io.disconnect();
            }
          });
        }, { threshold: 0.6 });
        io.observe(el);
      };
      watch(kept, "kept");
      if (foot) watch(foot, "foot");
    }
  }
})();
