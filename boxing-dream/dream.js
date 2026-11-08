/* The Dreamer's Concordance — Entry No. 144 — the bell */
(function () {
  "use strict";

  // A soft ring of the bell every few minutes: every section heading's
  // bell sways, once, and a ripple of light passes down the page.
  function ringBell() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.querySelectorAll("h2").forEach(function (h, i) {
      setTimeout(function () {
        h.classList.add("rings");
        setTimeout(function () { h.classList.remove("rings"); }, 1400);
      }, i * 220);
    });
    var sheet = document.createElement("div");
    sheet.className = "bell-ripple";
    document.body.appendChild(sheet);
    setTimeout(function () { sheet.remove(); }, 1800);
  }

  // First ring a short while after the sleeper arrives.
  window.addEventListener("load", function () {
    setTimeout(ringBell, 1200);
    // Then, quietly, like the round clock: every five minutes.
    setInterval(ringBell, 300000);
  });
})();
