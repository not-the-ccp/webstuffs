/* Vulcan Foundry build log — walk the works ledger.
   Text stands on its own without this script; the whole table is simply left open. */
(function () {
  var table = document.getElementById("ledger");
  var filter = document.getElementById("ledger-filter");
  var buttons = document.querySelectorAll(".era");
  var counter = document.getElementById("ledger-shown");
  if (!table || !filter) return;

  var rows = Array.prototype.slice.call(table.tBodies[0].rows);
  var era = { from: 0, to: 9999 };

  function apply() {
    var needle = filter.value.trim().toLowerCase();
    var shown = 0;
    rows.forEach(function (row) {
      var year = parseInt(row.getAttribute("data-year"), 10);
      var text = row.textContent.toLowerCase();
      var ok =
        year >= era.from && year <= era.to &&
        (needle === "" || text.indexOf(needle) !== -1);
      row.setAttribute("data-hidden", ok ? "false" : "true");
      if (ok) shown += 1;
    });
    if (counter) counter.textContent = shown;
  }

  filter.addEventListener("input", apply);

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      era = {
        from: parseInt(btn.getAttribute("data-from"), 10),
        to: parseInt(btn.getAttribute("data-to"), 10)
      };
      buttons.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      apply();
    });
  });
})();
