/* Sheet 442 — the red light keeps its watch; the page resolves slowly. */
(function () {
  "use strict";

  var rec = document.getElementById("rec");
  if (rec) {
    rec.style.animation = "recPulse 2.4s ease-in-out infinite";
    var style = document.createElement("style");
    style.textContent =
      "@keyframes recPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.25; } }";
    document.head.appendChild(style);
  }

  /* The sheet fades up from the dark, as the first frame does. */
  var sheet = document.querySelector(".field-sheet");
  if (sheet && !window.matchMedia || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    sheet.style.opacity = "0";
    sheet.style.transition = "opacity 1.6s ease";
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        sheet.style.opacity = "1";
      });
    });
  }

  /* A faint flicker on the title, like a projector finding its gate. */
  var h1 = document.querySelector("h1");
  if (h1) {
    setInterval(function () {
      h1.style.textShadow = "0 0 22px rgba(224, 65, 63, 0.28)";
      setTimeout(function () {
        h1.style.textShadow = "0 0 34px rgba(224, 65, 63, 0.5)";
      }, 90);
      setTimeout(function () {
        h1.style.textShadow = "0 0 22px rgba(224, 65, 63, 0.28)";
      }, 260);
    }, 7000);
  }
})();
