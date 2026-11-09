/* St. Panteleimon Press — a candle for the scriptorium. */
(function () {
  "use strict";
  // Gently flicker the wax seal so the sheet reads by candlelight.
  var seal = document.querySelector(".sds-foot .seal");
  if (!seal) return;
  var tick = 0;
  setInterval(function () {
    tick += 1;
    var glow = 3 + Math.sin(tick / 5) * 1.5 + Math.random() * 1.5;
    seal.style.boxShadow =
      "0 " + (3 + glow / 2) + "px " + (8 + glow) + "px rgba(168, 121, 43, 0.55)," +
      " inset 0 0 0 3px rgba(244, 226, 196, 0.25)";
  }, 420);
  // Smooth scrolling for the section index.
  var toc = document.querySelector(".toc");
  if (toc) {
    toc.addEventListener("click", function (event) {
      var target = event.target.closest("a[href^='#']");
      if (!target) return;
      var section = document.querySelector(target.getAttribute("href"));
      if (section) {
        event.preventDefault();
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }
})();
