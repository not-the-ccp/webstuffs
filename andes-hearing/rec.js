// Court transcript excerpt — recorder light and exhibit stamp.
// The record reads in full without this script; these are garnish only.

(function () {
  "use strict";

  var dot = document.getElementById("rec-dot");
  if (dot) {
    dot.classList.add("lit");
  }

  var stamp = document.getElementById("stamp");
  if (stamp) {
    // re-trigger the stamp-in animation on each visit to the page
    stamp.style.animation = "none";
    void stamp.offsetWidth;
    stamp.style.animation = "";
  }
})();
