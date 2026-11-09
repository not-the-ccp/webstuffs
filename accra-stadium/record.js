/* The Crowding at Ohene Djan Stadium — read the record, one page at a time */
(function () {
  "use strict";
  var lines = Array.prototype.slice.call(document.querySelectorAll(".transcript .line"));
  if (!lines.length) return;

  // Text stays fully readable without JS: this only sets an initial
  // state before the first frame and then removes it immediately.
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  lines.forEach(function (line, i) {
    line.style.opacity = "0";
    line.style.transition = "opacity .5s ease " + Math.min(i * 90, 900) + "ms";
  });

  function reveal() {
    lines.forEach(function (line) { line.style.opacity = "1"; });
  }

  requestAnimationFrame(function () { requestAnimationFrame(reveal); });
})();
