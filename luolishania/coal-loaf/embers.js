// Drifting embers for the Coal Loaf card. Pure decoration; the
// recipe reads fine with this off.
(function () {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var W = window;
  function spawn() {
    var e = document.createElement("span");
    e.className = "ember-particle";
    var size = 2 + Math.random() * 4;
    e.style.left = Math.random() * 100 + "vw";
    e.style.width = size + "px";
    e.style.height = size + "px";
    e.style.setProperty("--drift", (Math.random() * 120 - 60) + "px");
    var dur = 9 + Math.random() * 10;
    e.style.animationDuration = dur + "s";
    document.body.appendChild(e);
    setTimeout(function () { e.remove(); }, dur * 1000);
  }
  setInterval(spawn, 900);
  for (var i = 0; i < 5; i++) setTimeout(spawn, i * 400);
})();
