/* The Spectator Special — small touches: the warm light and the count. */

(function () {
  "use strict";

  var body = document.body;
  var candle = document.getElementById("candle");

  // The warm light: hold the paper to it and the monogram shows its veins.
  if (candle) {
    function toggle() { body.classList.toggle("lit"); }
    candle.addEventListener("click", toggle);
    candle.addEventListener("mouseenter", function () { body.classList.add("lit"); });
    candle.addEventListener("mouseleave", function () { body.classList.remove("lit"); });
  }

  // The circulation count, tallied the way the office tallies it.
  var count = document.getElementById("count");
  if (count) {
    var final = parseInt(count.getAttribute("data-final"), 10) || 0;
    var t0 = null;
    var DUR = 2200;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / DUR, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      count.textContent = Math.round(final * eased).toLocaleString("en-GB");
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
})();
