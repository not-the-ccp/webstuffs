/* TMB-1 — departure board lights. The page reads fine without this; it only makes the board behave like a board. */
(function () {
  "use strict";

  // Now-boarding cycler: walks the eleven stops in order.
  var stops = Array.prototype.map.call(
    document.querySelectorAll(".stop"),
    function (row) {
      return row.querySelector("strong");
    }
  ).filter(Boolean).map(function (strong) {
    return strong.textContent;
  });

  var out = document.getElementById("nb-stop");
  var idx = stops.indexOf("Ginuwine Halt");
  if (idx < 0) idx = 0;

  function advance() {
    idx = (idx + 1) % stops.length;
    if (out) out.textContent = stops[idx];
    // light the matching row briefly
    var row = document.querySelector('.stop[data-stop="' + (idx + 1) + '"]');
    if (row) {
      document.querySelectorAll(".stop.lit").forEach(function (r) { r.classList.remove("lit"); });
      row.classList.add("lit");
      setTimeout(function () { row.classList.remove("lit"); }, 4200);
    }
  }
  if (stops.length && out) setInterval(advance, 4500);

  // Clicking a stop re-calls it on the now-boarding board.
  document.querySelectorAll(".stop").forEach(function (row, i) {
    row.addEventListener("click", function () {
      idx = i;
      if (out) out.textContent = stops[i];
    });
  });
})();
