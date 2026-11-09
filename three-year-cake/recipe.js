/* The Three-Year Cake — scale the sheet to the table */
(function () {
  var slider = document.getElementById("party-size");
  var out = document.getElementById("party-out");
  if (!slider || !out) return;

  var rows = document.querySelectorAll(".amount");

  function fmt(n, unit) {
    if (unit === "whole" || unit === "spoon") {
      var v = Math.round(n * 10) / 10;
      return (v === Math.floor(v) ? v.toFixed(0) : v.toFixed(1)) + " " + unit;
    }
    // grams: round to a sensible nearest five
    var v = Math.max(5, Math.round(n / 5) * 5);
    return v + " " + unit;
  }

  function render() {
    var n = parseInt(slider.value, 10);
    var factor = n / 8;
    out.textContent = n;
    rows.forEach(function (cell) {
      var basis = parseFloat(cell.getAttribute("data-basis"));
      var unit = cell.getAttribute("data-unit");
      cell.textContent = fmt(basis * factor, unit);
    });
  }

  slider.addEventListener("input", render);
  render();
})();
