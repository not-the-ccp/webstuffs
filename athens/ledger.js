// The Attica Ledger — a slow fade for the mourners, and one line
// typed at the old projector speed of sixteen frames per second.
(function () {
  var sections = document.querySelectorAll("section, .masthead");
  sections.forEach(function (el, i) {
    el.style.opacity = "0";
    el.style.transform = "translateY(8px)";
    el.style.transition = "opacity 1.2s ease " + (0.25 * i) + "s, transform 1.2s ease " + (0.25 * i) + "s";
    requestAnimationFrame(function () {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  });

  var flame = document.querySelector(".flame");
  if (flame) {
    setInterval(function () {
      var h = 28 + Math.floor(Math.random() * 14);
      flame.style.background =
        "linear-gradient(180deg, hsl(" + h + " 82% 62%) 0%, hsl(" + (h - 12) + " 70% 48%) 55%, #8a3d1e 100%)";
    }, 625);
  }
})();
