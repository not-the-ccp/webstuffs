/* The White Stone, No. 41 — the desk keeps the count. */
(function () {
  var table = document.getElementById("vote");
  var desk = document.getElementById("desk");
  if (!table || !desk) return;

  function tally() {
    var counts = [];
    var any = false;
    for (var i = 0; i < table.rows.length; i++) {
      var row = table.rows[i];
      if (row.cells.length < 3) continue;
      var held = parseInt(row.getAttribute("data-held") || "0", 10);
      var box = row.cells[0].querySelector("input[type=checkbox]");
      var n = held + (box && box.checked ? 1 : 0);
      if (box && box.checked) any = true;
      counts.push(n);
      row.cells[2].textContent = n + (n === 1 ? " correspondent" : " correspondents");
    }
    if (any) {
      var total = counts.reduce(function (a, b) { return a + b; }, 0);
      desk.textContent = "Ticked — the count now stands at " +
        counts.join(", ") + ", which " +
        (total === 19 ? "adds up to nineteen, and the drawer has not seen that since 1993."
                      : "does not add up to nineteen, and has not, in thirty years.");
    } else {
      desk.textContent = "Nothing ticked yet — the door is open and the count stands at 7, 9, 3, which does not add up to nineteen, and has not, in thirty years.";
    }
  }

  table.addEventListener("change", tally);
})();
