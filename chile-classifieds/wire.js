/* El Mensajero Pacífico — the wire, kept in motion */
(function () {
  "use strict";
  var track = document.getElementById("wire-track");
  if (!track || !window.matchMedia ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  // Keep the drift alive: pause the ticker briefly over the headline the
  // reader is nearest, as a pressroom switchboard used to.
  var viewport = track.parentElement;
  var paused = false;
  viewport.addEventListener("mouseenter", function () {
    track.style.animationPlayState = paused ? "running" : "paused";
    paused = !paused;
  });
})();
