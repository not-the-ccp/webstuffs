/* Guide Entry No. 41 — a small tide on the route line. */
(function () {
  var ship = document.querySelector(".route .ship");
  if (!ship) return;

  var reduce = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    ship.style.animation = "none";
    return;
  }

  // Occasionally the ship pauses, as if taking on water, then goes again.
  var t = 0;
  setInterval(function () {
    t += 1;
    if (t % 7 === 0) {
      ship.style.animationPlayState = "paused";
      setTimeout(function () {
        ship.style.animationPlayState = "running";
      }, 2600);
    }
  }, 2000);
})();
