/* tide.js — the entry's little water engine.
   Without this script the page is fully readable; this only
   animates the deepest sounding as a tide gauge and eases
   the folio in on arrival. */
(function () {
  "use strict";

  // Count the Calypso Deep sounding up from the average depth.
  var el = document.getElementById("deepest");
  if (el) {
    var target = 5267;
    var start = null;
    var dur = 2400;
    function step(ts) {
      if (!start) start = ts;
      var t = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(1500 + (target - 1500) * eased) + " m";
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // A slow bob for the folio, once, on load.
  var folio = document.querySelector(".foglio");
  if (folio) {
    folio.style.transition = "transform 1.2s ease, box-shadow 1.2s ease";
    folio.style.transform = "translateY(14px)";
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        folio.style.transform = "translateY(0)";
      });
    });
  }
})();
