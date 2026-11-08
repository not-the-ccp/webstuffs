// Bench complement: nine chairs, robes light in order of appointment,
// most recently appointed last. The permission counter ticks within the 40–75 band.
(function () {
  var wrap = document.getElementById("chairs");
  if (!wrap) return;
  for (var i = 0; i < 9; i++) {
    var c = document.createElement("span");
    c.className = "chair";
    c.style.animationDelay = (i * 0.35) + "s";
    wrap.appendChild(c);
  }

  var el = document.getElementById("perm-count");
  if (!el) return;
  var n = 40;
  setInterval(function () {
    if (Math.random() < 0.6) n = Math.min(75, n + 1);
    else n = Math.max(40, n - 2);
    el.textContent = n;
  }, 1800);
})();
