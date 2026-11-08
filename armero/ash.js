/* Ash falls across the plate. Purely decorative; the manual reads fine without it. */
(function () {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var plate = document.querySelector(".plate");
  if (!plate) return;
  var count = 26;
  for (var i = 0; i < count; i++) {
    var flake = document.createElement("span");
    flake.className = "ash-flake";
    var size = 2 + Math.random() * 4;
    flake.style.width = size + "px";
    flake.style.height = size + "px";
    flake.style.left = Math.random() * 100 + "%";
    flake.style.animationDuration = (9 + Math.random() * 14) + "s";
    flake.style.animationDelay = (-Math.random() * 20) + "s";
    flake.style.opacity = (0.15 + Math.random() * 0.3).toFixed(2);
    plate.appendChild(flake);
  }
  var style = document.createElement("style");
  style.textContent =
    ".ash-flake{position:absolute;top:-10px;border-radius:50%;background:#5a544b;pointer-events:none;z-index:0;" +
    "animation-name:ashfall;animation-timing-function:linear;animation-iteration-count:infinite;}" +
    "@keyframes ashfall{0%{transform:translateY(0) translateX(0)}50%{transform:translateY(55vh) translateX(24px)}" +
    "100%{transform:translateY(110vh) translateX(-12px)}}";
  document.head.appendChild(style);
})();
