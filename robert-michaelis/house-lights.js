/* House lights: the curtain glow follows the reader down the bill. */
(function () {
  var glow = document.querySelector(".billboard");
  if (!glow || !window.addEventListener) return;
  window.addEventListener("scroll", function () {
    var y = window.scrollY || window.pageYOffset || 0;
    var dim = Math.max(0, 1 - y / 900);
    glow.style.opacity = String(0.25 + 0.75 * dim);
  }, { passive: true });
})();
