/* Spore drift for Entry No. 31 — decorative only; the text holds without it. */
(function () {
  "use strict";
  var host = document.getElementById("spores");
  if (!host) return;

  var COUNT = 26;
  for (var i = 0; i < COUNT; i++) {
    var s = document.createElement("span");
    var size = 2 + Math.random() * 4;
    s.style.left = (Math.random() * 100).toFixed(2) + "vw";
    s.style.width = size.toFixed(1) + "px";
    s.style.height = size.toFixed(1) + "px";
    s.style.animationDuration = (9 + Math.random() * 14).toFixed(1) + "s";
    s.style.animationDelay = (-Math.random() * 20).toFixed(1) + "s";
    if (Math.random() < 0.25) {
      s.style.background = "#a33f22"; /* a rust fleck among the spores */
    }
    host.appendChild(s);
  }
})();
