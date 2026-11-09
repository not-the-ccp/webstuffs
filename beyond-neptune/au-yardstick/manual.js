/* Station Manual FM-04, Chapter 07 — instrument scripts.
   The page reads fine without this file; everything here is an extra lamp. */
(function () {
  "use strict";

  var btn = document.getElementById("lightBtn");
  var readout = document.getElementById("lightSec");
  if (btn && readout) {
    var running = null;
    var TOTAL = 499;          // light-seconds, the chapter's figure
    var DURATION = 8190;      // a little under 8 minutes 19 seconds, compressed

    function pad(n) {
      var s = String(Math.round(n));
      while (s.length < 3) s = "0" + s;
      return s;
    }

    btn.addEventListener("click", function () {
      if (running) { return; }
      var start = null;
      btn.disabled = true;
      running = function tick(ts) {
        if (start === null) { start = ts; }
        var t = Math.min((ts - start) / DURATION, 1);
        readout.textContent = pad(t * TOTAL);
        if (t < 1) {
          requestAnimationFrame(running);
        } else {
          running = null;
          btn.disabled = false;
          flash();
        }
      };
      requestAnimationFrame(running);
    });

    function flash() {
      // one field-lamp blink at the end of the count
      document.body.classList.add("lamp-flash");
      setTimeout(function () {
        document.body.classList.remove("lamp-flash");
      }, 420);
    }
  }

  var mark = document.getElementById("rulerMark");
  var track = document.getElementById("ruler");
  if (mark && track && window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    // settle the marker at Neptune's 30 units and leave it there
    mark.style.animation = "none";
    mark.style.left = "60%";
  }
})();
