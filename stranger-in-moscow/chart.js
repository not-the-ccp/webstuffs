// Stranger in Moscow — chart table filter (Entry SM-1995/05)
(function () {
  var input = document.getElementById("chartfilter");
  var table = document.getElementById("charttable");
  var count = document.getElementById("chartcount");
  if (!input || !table || !count) return;

  var rows = Array.prototype.slice.call(table.tBodies[0].rows);
  var total = rows.length;

  function apply() {
    var q = input.value.trim().toLowerCase();
    var shown = 0;
    rows.forEach(function (row) {
      var hay = (row.cells[0].textContent + " " + row.cells[1].textContent + " " + row.dataset.countries).toLowerCase();
      var hit = q === "" || hay.indexOf(q) !== -1;
      row.style.display = hit ? "" : "none";
      if (hit) shown++;
    });
    count.textContent = q === ""
      ? "Showing all " + total + " rows of the chart table."
      : "Showing " + shown + " of " + total + " rows matching \u201C" + input.value.trim() + "\u201D.";
  }

  input.addEventListener("input", apply);
  apply();
})();
