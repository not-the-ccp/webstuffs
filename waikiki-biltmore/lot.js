// Lot 41 — the bell. Rings once before the hammer and once after.
(function () {
  var plate = document.querySelector(".lotplate");
  if (!plate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var stamp = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  stamp.setAttribute("viewBox", "0 0 120 60");
  stamp.setAttribute("class", "bell-stamp");
  stamp.setAttribute("aria-hidden", "true");
  stamp.innerHTML =
    '<g fill="none" stroke="#1d3a2f" stroke-width="2" opacity="0.75">' +
    '<circle cx="60" cy="30" r="26"/>' +
    '<path d="M60 30 L60 16"/>' +
    '<path d="M60 30 L72 36"/>' +
    '</g>' +
    '<text x="60" y="58" text-anchor="middle" font-size="9" ' +
    'font-family="Georgia, serif" letter-spacing="3" fill="#1d3a2f" opacity="0.8">RINGING TRUE</text>';

  var rings = 0;
  var maxRings = 2;
  var timer = setInterval(function () {
    var arm = stamp.querySelectorAll("path")[0];
    if (arm) {
      var swing = rings % 2 === 0 ? "rotate(14 60 30)" : "rotate(-14 60 30)";
      arm.setAttribute("transform", swing);
    }
    rings += 1;
    if (rings >= maxRings + 2) {
      clearInterval(timer);
      plate.appendChild(stamp);
    }
  }, 420);
})();
