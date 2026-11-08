// The Errázuriz Notebook — a small, quiet touch:
// the page fades in as a notebook being opened, and the
// coffee ring deepens slowly, as if the cup is still warm.
(function () {
  "use strict";

  var notebook = document.getElementById("notebook");
  if (!notebook) return;

  // fade the notebook in, as if turning it to this page
  notebook.style.opacity = "0";
  notebook.style.transition = "opacity 1.4s ease";
  window.addEventListener("load", function () {
    requestAnimationFrame(function () {
      notebook.style.opacity = "1";
    });
  });

  // the kitchen light: on narrow screens the lamp dims gently
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduced) {
    var star = document.querySelector(".star");
    if (star) {
      star.addEventListener("mouseenter", function () {
        star.style.transform = "scale(1.25)";
        star.style.transition = "transform 0.4s ease";
      });
      star.addEventListener("mouseleave", function () {
        star.style.transform = "scale(1)";
      });
    }
  }
})();
