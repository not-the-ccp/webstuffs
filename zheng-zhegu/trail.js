/* The Zheng Zhegu Trail — third studio edition, gatehouse script. */
(function () {
  "use strict";

  var btn = document.getElementById("pressBtn");
  var stamp = document.getElementById("stamp");
  var presses = 0;

  if (btn && stamp) {
    btn.addEventListener("click", function () {
      presses += 1;
      stamp.classList.remove("stamped");
      /* force a reflow so the animation restarts on repeated presses */
      void stamp.offsetWidth;
      stamp.classList.add("stamped");
      btn.textContent = presses === 1
        ? "The gate is yours. Press again — the studio keeps count."
        : "Pressed " + presses + " times. The brass floorboard approves.";
    });
  }

  /* Lanterns dim on scroll, like the 23:00 screening winding down. */
  var lanterns = document.querySelectorAll(".lantern");
  var ticking = false;
  function dimLanterns() {
    ticking = false;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var f = max > 0 ? Math.min(window.scrollY / (max * 0.6), 1) : 0;
    var opacity = (1 - f * 0.7).toFixed(3);
    for (var i = 0; i < lanterns.length; i += 1) {
      lanterns[i].style.opacity = opacity;
    }
  }
  window.addEventListener("scroll", function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(dimLanterns);
    }
  }, { passive: true });
  dimLanterns();
})();
