// Error CH-1984 — plate-log terminal touches
(function () {
  var codeEl = document.getElementById("code");
  if (!codeEl) return;
  var target = codeEl.getAttribute("data-text");
  var glyphs = "0123456789ABCDEF/";
  var frame = 0;
  var total = 26;
  function step() {
    var out = "";
    for (var i = 0; i < target.length; i++) {
      if (i < (frame / total) * target.length * 1.4) {
        out += target[i];
      } else {
        out += glyphs[Math.floor(Math.random() * glyphs.length)];
      }
    }
    codeEl.textContent = out;
    frame++;
    if (frame <= total) {
      requestAnimationFrame(step);
    } else {
      codeEl.textContent = target;
    }
  }
  step();
})();
