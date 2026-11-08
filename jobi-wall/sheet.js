/* Small touches for the report sheet: re-press the stamp on click, and a
   gentle "fold line" shimmer so the sheet feels like loose paper. */
(function () {
  var stamp = document.getElementById("stamp");
  if (stamp) {
    stamp.style.cursor = "pointer";
    stamp.addEventListener("click", function () {
      stamp.style.animation = "none";
      void stamp.offsetWidth; // restart the CSS animation
      stamp.style.animation = "";
    });
  }

  var fold = document.querySelector(".fold");
  if (fold) {
    var t = 0;
    setInterval(function () {
      t += 0.05;
      fold.style.opacity = 0.45 + 0.15 * Math.sin(t);
    }, 60);
  }
})();
