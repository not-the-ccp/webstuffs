// A light snowfall over the letter — decorative only; the text stands without it.
(function () {
  var host = document.getElementById("snow");
  if (!host) return;
  var glyphs = ["\u2744", "\u2745", "\u2022"];
  var count = 18;
  for (var i = 0; i < count; i++) {
    var f = document.createElement("span");
    f.className = "flake";
    f.textContent = glyphs[i % glyphs.length];
    f.style.left = (Math.random() * 100) + "vw";
    f.style.fontSize = (0.5 + Math.random() * 0.9) + "rem";
    f.style.opacity = (0.35 + Math.random() * 0.5).toFixed(2);
    f.style.animationDuration = (9 + Math.random() * 14) + "s";
    f.style.animationDelay = (-Math.random() * 20) + "s";
    host.appendChild(f);
  }
})();
