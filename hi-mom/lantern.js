/* The Lantern Desk — sheet 81: falling petals + a gold spark per question. */
(function () {
  "use strict";

  var reduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Falling peach blossoms.
  if (!reduced) {
    var field = document.querySelector(".petals");
    if (field) {
      for (var i = 0; i < 14; i++) {
        var p = document.createElement("span");
        p.className = "petal";
        p.style.left = (Math.random() * 100) + "vw";
        p.style.width = p.style.height = (8 + Math.random() * 10) + "px";
        p.style.animationDuration = (9 + Math.random() * 12) + "s";
        p.style.animationDelay = (-Math.random() * 20) + "s";
        p.style.opacity = (0.35 + Math.random() * 0.45).toFixed(2);
        field.appendChild(p);
      }
    }
  }

  // A small gold spark at the corner of each question when it is visited.
  var cards = document.querySelectorAll(".qa");
  var sparked = {};
  cards.forEach(function (card, idx) {
    card.addEventListener("mouseenter", function () {
      if (reduced || sparked[idx]) return;
      sparked[idx] = true;
      for (var k = 0; k < 6; k++) {
        var b = document.createElement("span");
        b.className = "burst";
        b.style.setProperty("--dx", (20 + Math.random() * 60) + "px");
        b.style.setProperty("--dy", (10 + Math.random() * 50) + "px");
        card.appendChild(b);
        b.addEventListener("animationend", function () { b.remove(); });
      }
    });
  });
})();
