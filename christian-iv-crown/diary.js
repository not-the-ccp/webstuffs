/* Rosenborg Treasury — Diary: a small touch for the wax seal.
   Without this script the page is fully readable; the seal simply does not tilt. */
(function () {
  "use strict";
  var seal = document.querySelector(".seal");
  if (!seal || !window.matchMedia || !window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    return;
  }
  seal.classList.add("live");
  seal.style.animationPlayState = "paused";
  var base = 9;
  var target = 9;
  var angle = 9;
  window.addEventListener("mousemove", function (e) {
    var x = e.clientX / window.innerWidth - 0.5;
    target = base + x * 6;
  }, { passive: true });
  (function step() {
    angle += (target - angle) * 0.04;
    seal.style.transform = "rotate(" + angle.toFixed(2) + "deg)";
    window.requestAnimationFrame(step);
  })();
})();
