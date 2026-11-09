// Session No. XV — small ceremonial effects, none required for reading.
(function () {
  "use strict";

  // Stamp the date and roll call into the running head once the page settles.
  var minutes = document.getElementById("minutes");
  if (minutes && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    minutes.classList.add("settled");
  }

  // The chainmail border pauses while the reader is over the page,
  // as if the water itself stopped to look.
  var chain = document.querySelector(".chain svg");
  if (chain && minutes) {
    minutes.addEventListener("mouseenter", function () {
      chain.style.animationPlayState = "paused";
    });
    minutes.addEventListener("mouseleave", function () {
      chain.style.animationPlayState = "running";
    });
  }

  // A quiet count: the fifteen collections, one ring at a time.
  var seal = document.querySelector(".seal svg circle");
  if (seal && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var n = 0;
    var ring = setInterval(function () {
      n = (n % 15) + 1;
      seal.setAttribute("stroke-dasharray", (n / 15 * 100) + " 200");
      if (n === 15) {
        clearInterval(ring);
        seal.removeAttribute("stroke-dasharray");
      }
    }, 380);
  }
})();
