// Noctuary, Entry No. 88 — a small clockwork for the doubloon.
// The page is fully readable without this script.
(function () {
  "use strict";
  var coin = document.getElementById("doubloon");
  if (!coin) return;

  var reduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  // Pause the slow spin while the coin is near the viewport centre,
  // so the date on it can be read; resume once it drifts away.
  function check() {
    var r = coin.getBoundingClientRect();
    var mid = r.top + r.height / 2;
    var still = mid > window.innerHeight * 0.2 &&
                mid < window.innerHeight * 0.8;
    coin.style.animationPlayState = still ? "paused" : "running";
  }
  window.addEventListener("scroll", check, { passive: true });
  window.addEventListener("resize", check);
  check();
})();
