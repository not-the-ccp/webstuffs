/* Cheshire — Build Log No. 18: the workshop lamp and the surface tally */

(function () {
  "use strict";

  // Workshop lamp: a warm light over the bench. Text stays readable either way.
  var lamp = document.getElementById("lamp");
  if (lamp) {
    lamp.addEventListener("change", function () {
      document.body.classList.toggle("lamp-on", lamp.checked);
    });
  }

  // The county surface on the bench, counted up in cm²: 2,344, holding at scale.
  var tally = document.getElementById("tally");
  if (tally) {
    var target = 2344;
    var start = null;
    var duration = 2400;

    var reduced = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      tally.textContent = target.toLocaleString("en-GB");
      return;
    }

    function step(ts) {
      if (start === null) start = ts;
      var t = Math.min(1, (ts - start) / duration);
      var eased = 1 - Math.pow(1 - t, 3);
      tally.textContent = Math.round(target * eased).toLocaleString("en-GB");
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
})();
