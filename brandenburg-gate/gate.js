// Small touch: give the quadriga a slow gilded glow, as if the afternoon
// light is crossing the Pariser Platz. Text remains fully readable without it.
(function () {
  var figure = document.querySelector(".quadriga");
  if (!figure) return;
  var phase = 0;
  setInterval(function () {
    phase = (phase + 1) % 360;
    var glow = 0.5 + 0.35 * Math.sin((phase / 360) * Math.PI * 2);
    figure.style.opacity = String(glow);
  }, 120);
})();
