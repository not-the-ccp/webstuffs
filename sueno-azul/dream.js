/* Small touches for the Sueño Azul entry. The page reads fine without it. */
(function () {
  "use strict";

  // Stagger the sections as they rise out of the blue.
  var sections = document.querySelectorAll(".entry section, .further");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.animationDelay = (i * 0.12) + "s";
  }

  // A handful of extra, individually twinkling stars.
  var night = document.querySelector(".night");
  if (night) {
    for (var s = 0; s < 14; s++) {
      var star = document.createElement("span");
      star.className = "twinkle";
      star.style.left = Math.random() * 100 + "vw";
      star.style.top = Math.random() * 70 + "vh";
      star.style.animationDelay = (Math.random() * 6) + "s";
      night.appendChild(star);
    }
    var style = document.createElement("style");
    style.textContent =
      ".twinkle{position:absolute;width:2px;height:2px;border-radius:50%;" +
      "background:#fff;opacity:.2;animation:tw 5s ease-in-out infinite;}" +
      "@keyframes tw{0%,100%{opacity:.15}50%{opacity:.9}}";
    document.head.appendChild(style);
  }
})();
