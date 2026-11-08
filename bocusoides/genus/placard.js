/* Placard No. G-214 — the case light follows the visitor's eye. */
(function () {
  var hall = document.querySelector(".hall");
  if (!hall) return;

  function place(x, y) {
    hall.style.setProperty("--mx", (x * 100).toFixed(2) + "%");
    hall.style.setProperty("--my", (y * 100).toFixed(2) + "%");
  }

  var idle = true;
  var raf = null;

  function onMove(e) {
    if (e.touches) e = e.touches[0];
    place(e.clientX / window.innerWidth, e.clientY / window.innerHeight);
    if (idle) {
      idle = false;
      window.clearTimeout(place.t);
    }
    window.clearTimeout(place.t);
    place.t = window.setTimeout(function () {
      idle = true;
      // let the CSS drift take the light back
    }, 3000);
  }

  window.addEventListener("mousemove", onMove, { passive: true });
  window.addEventListener("touchmove", onMove, { passive: true });
})();
