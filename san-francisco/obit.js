/* Small touches for the San Francisco obituary.
   The page reads fully without this file. */
(function () {
  // A single ember, kept burning in the corner.
  var ember = document.createElement("div");
  ember.className = "ember";
  ember.setAttribute("aria-hidden", "true");
  document.body.appendChild(ember);

  // Gentle parallax on the fog banks, only where pointer events exist.
  var fogA = document.querySelector(".fog-a");
  var fogB = document.querySelector(".fog-b");
  if (!fogA || !fogB || !window.matchMedia("(pointer: fine)").matches) return;

  var tx = 0, ty = 0, cx = 0, cy = 0;
  window.addEventListener("mousemove", function (e) {
    tx = (e.clientX / window.innerWidth - 0.5) * 2;
    ty = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  (function tick() {
    cx += (tx - cx) * 0.04;
    cy += (ty - cy) * 0.04;
    fogA.style.marginLeft = (cx * 18) + "px";
    fogA.style.marginTop = (cy * 8) + "px";
    fogB.style.marginLeft = (-cx * 26) + "px";
    fogB.style.marginTop = (-cy * 10) + "px";
    requestAnimationFrame(tick);
  })();
})();
