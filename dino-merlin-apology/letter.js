/* Small touches for the letter: the postmark and seal settle into place
   when the page loads. The letter reads perfectly well without this. */
(function () {
  "use strict";
  var settle = function (selector, finalTransform, delay) {
    var el = document.querySelector(selector);
    if (!el || !el.animate) return;
    el.animate(
      [
        { opacity: 0, transform: "scale(1.6) rotate(20deg)" },
        { opacity: 1, transform: finalTransform }
      ],
      { duration: 620, delay: delay, easing: "cubic-bezier(.2,.8,.3,1)", fill: "backwards" }
    );
  };
  window.addEventListener("load", function () {
    settle(".postmark", "rotate(9deg)", 150);
    settle(".seal", "rotate(-7deg)", 650);
  });
})();
