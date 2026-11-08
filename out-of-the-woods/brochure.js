// Out of the Woods — brochure touch: the 46 hidden speakers "pulse"
// with the loop-drum beat while a visitor reads; purely decorative.
(function () {
  var panels = document.querySelectorAll(".panel h2");
  if (!panels.length) return;
  var i = 0;
  setInterval(function () {
    panels.forEach(function (h) { h.style.textShadow = "none"; });
    var h = panels[i % panels.length];
    h.style.transition = "text-shadow 0.4s ease";
    h.style.textShadow = "0 0 14px rgba(111, 214, 195, 0.6)";
    i += 1;
  }, 1200);
})();
