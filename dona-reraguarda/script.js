// Rear Watch Reading Club — small touches for Newsletter No. 14
(function () {
  "use strict";
  var sheet = document.querySelector(".sheet");
  if (!sheet) return;

  // A faint tilt that settles, like a letter on a desk.
  sheet.style.transition = "transform 700ms ease, box-shadow 700ms ease";
  sheet.style.transform = "rotate(0.35deg)";
  window.addEventListener("load", function () {
    requestAnimationFrame(function () {
      sheet.style.transform = "rotate(0deg)";
    });
  });

  // The chair in the corner takes its turn: the corner dot on each h2
  // pulses softly once, in sequence.
  var heads = Array.prototype.slice.call(document.querySelectorAll("main h2"));
  heads.forEach(function (h, i) {
    setTimeout(function () {
      h.animate(
        [
          { filter: "brightness(1)" },
          { filter: "brightness(1.6)" },
          { filter: "brightness(1)" }
        ],
        { duration: 900, easing: "ease-in-out" }
      );
    }, 400 + i * 260);
  });
})();
