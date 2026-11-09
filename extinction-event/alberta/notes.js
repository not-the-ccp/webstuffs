/* Ledger Folio 12-A — the Chinook gauge.
   The thermometer fills when it scrolls into view, and swings
   again when tapped, the way the wind did on 14 April 1979.
   The notes read the same with or without it. */
(function () {
  "use strict";

  var gauge = document.querySelector(".gauge");
  if (!gauge) return;

  var seen = false;

  function wake() {
    gauge.classList.add("awake");
  }

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !seen) {
          seen = true;
          wake();
        }
      });
    }, { threshold: 0.4 });
    io.observe(gauge);
  } else {
    wake();
  }

  gauge.addEventListener("click", wake);
  gauge.style.cursor = "pointer";
  gauge.title = "Tap to swing the glass again.";
})();
