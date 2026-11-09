/* Entry A-317 — star field and the nine-o'clock bell */
(function () {
  "use strict";

  var field = document.getElementById("stars");
  if (!field) return;

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var count = reduce ? 40 : 90;

  for (var i = 0; i < count; i++) {
    var s = document.createElement("span");
    var size = Math.random() * 1.8 + 1;
    s.style.width = size + "px";
    s.style.height = size + "px";
    s.style.left = (Math.random() * 100).toFixed(2) + "%";
    s.style.top = (Math.random() * 100).toFixed(2) + "%";
    s.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
    s.style.animationDuration = (3 + Math.random() * 4).toFixed(2) + "s";
    field.appendChild(s);
  }

  // A faint line across the sky where the two minarets stood:
  // it appears once, at the top of the page, and stays.
  var seam = document.createElement("div");
  seam.setAttribute("aria-hidden", "true");
  seam.style.cssText =
    "position:fixed;left:0;right:0;top:38%;height:1px;z-index:0;pointer-events:none;" +
    "background:linear-gradient(90deg,transparent,rgba(216,169,60,0.35),transparent);" +
    "opacity:0;transition:opacity 3s ease;";
  document.body.appendChild(seam);
  requestAnimationFrame(function () {
    setTimeout(function () { seam.style.opacity = "1"; }, 800);
  });

  // The nine o'clock mark: the clock in the browser tab title chimes once.
  if (reduce) return;
  var original = document.title;
  setTimeout(function () {
    document.title = "\u23F0 9:00 — " + original;
    setTimeout(function () { document.title = original; }, 2400);
  }, 3500);
})();
