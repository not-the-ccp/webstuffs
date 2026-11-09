// Bench No. 4 — resin cure meter and log highlighting
(function () {
  var fill = document.getElementById("dryingFill");
  var label = document.getElementById("dryingLabel");
  if (fill && label) {
    var pct = 0;
    var timer = setInterval(function () {
      pct += 2;
      if (pct >= 100) {
        pct = 100;
        clearInterval(timer);
        label.textContent = "cure 100% · sound";
      }
      fill.style.width = pct + "%";
      label.textContent = "cure " + pct + "%";
    }, 60);
  }

  // Highlight the entry under the pointer, like a finger along the groove.
  var entries = document.querySelectorAll(".entry");
  entries.forEach(function (e) {
    e.addEventListener("mouseenter", function () { e.style.borderLeftColor = "#a8842f"; });
    e.addEventListener("mouseleave", function () { e.style.borderLeftColor = ""; });
  });
})();
