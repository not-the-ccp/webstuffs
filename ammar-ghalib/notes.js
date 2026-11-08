/* Entry 12 — small touches for the notebook. Text is fully readable without this. */
(function () {
  "use strict";

  // Re-stamp the sheet each time it scrolls into view, as if the seal is pressed fresh.
  var stamp = document.getElementById("stamp");
  if (stamp && "IntersectionObserver" in window) {
    var seen = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !seen) {
          seen = true;
          stamp.style.animation = "none";
          // force reflow, then re-run the settle animation
          void stamp.offsetWidth;
          stamp.style.animation = "";
        }
      });
    }, { threshold: 0.6 });
    io.observe(stamp);
  }

  // A faint pencil line under the poster quotation, drawn once on load.
  var strongs = document.querySelectorAll(".notes p strong");
  strongs.forEach(function (el) {
    var underline = document.createElement("span");
    underline.className = "pencil-line";
    el.appendChild(underline);
  });
})();
