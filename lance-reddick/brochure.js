// Westside Tourist Office — Brochure No. 9
// Keep the marquee a seamless loop and mark the day's departures as the clock passes.
(function () {
  "use strict";

  var inner = document.getElementById("marquee");
  if (inner && inner.textContent.length) {
    // Duplicate the strip once so the CSS -50% translate loops seamlessly.
    inner.innerHTML += inner.innerHTML;
  }

  var rows = document.querySelectorAll("table.times tbody tr");
  var now = new Date();
  var hhmm = (now.getHours() * 60 + now.getMinutes());
  rows.forEach(function (tr) {
    var cell = tr.cells[0];
    if (!cell) return;
    var parts = cell.textContent.trim().split(":");
    var dep = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
    if (hhmm >= dep) {
      cell.textContent += " \u2192";
      cell.title = "departed today";
    }
  });
})();
