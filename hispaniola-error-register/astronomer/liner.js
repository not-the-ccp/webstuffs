// Scatter and twinkle the stars above the sleeve front.
(function () {
  var sky = document.getElementById("sky");
  if (!sky) return;
  var glyphs = ["\u2606", "\u2726", "\u00b7", "\u2729"];
  var n = 26;
  for (var i = 0; i < n; i++) {
    var s = document.createElement("span");
    s.className = "star";
    s.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
    s.style.left = (Math.random() * 96 + 2) + "%";
    s.style.top = (Math.random() * 70 + 10) + "%";
    s.style.animationDelay = (Math.random() * 3.4).toFixed(2) + "s";
    if (s.textContent === "\u00b7") s.style.fontSize = "0.9rem";
    sky.appendChild(s);
  }
})();
