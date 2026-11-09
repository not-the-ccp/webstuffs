// The Guizhou Road & Coin Leafet — small mechanical touches.
// Everything degrades: the page reads perfectly without this file.

(function () {
  "use strict";

  // Clicking an ad "stamps" its heading, like the money desk's mark.
  var ads = document.querySelectorAll(".ad");
  for (var i = 0; i < ads.length; i++) {
    ads[i].addEventListener("click", function () {
      this.classList.toggle("stamped");
    });
  }

  // Give the coin a little nudge when it is clicked: a faster spin burst.
  var coin = document.querySelector(".coin");
  if (coin) {
    coin.addEventListener("click", function () {
      coin.style.animationDuration = "1.2s";
      setTimeout(function () { coin.style.animationDuration = "14s"; }, 1400);
    });
  }

  // A soft "age" flicker on the paper background: the halftone breathes.
  var halftone = document.querySelector(".halftone");
  if (halftone && window.matchMedia && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    var phase = 0;
    setInterval(function () {
      phase = (phase + 1) % 100;
      halftone.style.opacity = 0.75 + 0.25 * Math.sin(phase / 9);
    }, 120);
  }
})();
