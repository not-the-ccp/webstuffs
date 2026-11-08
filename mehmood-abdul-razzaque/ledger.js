/* The Sukkur Ledger — a small river gauge for the header */
(function () {
  "use strict";
  var head = document.querySelector(".head-rule");
  if (!head) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // The river's level, reckoned in inches of headwater at Sukkur,
  // drifting gently between 6.5 and 9.0 all day.
  var level = 7.4;
  function drift() {
    level += (Math.random() - 0.5) * 0.35;
    if (level < 6.5) level = 6.5;
    if (level > 9.0) level = 9.0;
    head.title = "Indus at the barrage, " + level.toFixed(1) + " inches of headwater";
    head.style.filter = "none";
    head.setAttribute("aria-label", head.title);
  }
  drift();
  setInterval(drift, 4000);
})();
