/* Sheet 9 — bearing readout for the field manual */
(function () {
  "use strict";
  var names = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
               "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  function toName(deg) {
    return names[Math.round(deg / 22.5) % 16];
  }
  document.querySelectorAll(".table td:first-child").forEach(function (cell) {
    var deg = parseInt(cell.textContent, 10);
    if (Number.isNaN(deg)) return;
    cell.classList.add("bearing");
    cell.title = toName(deg);
  });
})();
