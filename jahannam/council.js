/* The Council of the Lantern — ledger key for the seven levels */
(function () {
  "use strict";

  var search = document.getElementById("level-search");
  var chips = Array.prototype.slice.call(document.querySelectorAll(".chip"));
  var rows = Array.prototype.slice.call(document.querySelectorAll("#level-table tbody tr"));
  var count = document.getElementById("level-count");

  var currentFilter = "all";

  function matchRow(row) {
    var text = row.textContent.toLowerCase();
    var term = search.value.trim().toLowerCase();
    var passesTerm = term === "" || text.indexOf(term) !== -1;
    var passesFilter =
      currentFilter === "all" ||
      (" " + row.getAttribute("data-attr") + " ").indexOf(" " + currentFilter + " ") !== -1;
    return passesTerm && passesFilter;
  }

  function apply() {
    var shown = 0;
    rows.forEach(function (row) {
      var visible = matchRow(row);
      row.style.display = visible ? "" : "none";
      if (visible) shown += 1;
    });
    if (shown === rows.length) {
      count.textContent = "Showing all seven levels of the register, uppermost first.";
    } else if (shown === 0) {
      count.textContent = "No level of the register answers the key; the table stands empty, as the Secretary would enter it.";
    } else {
      count.textContent = "Showing " + shown + " of the seven levels, as the key of the ledger directs.";
    }
  }

  search.addEventListener("input", apply);

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("is-active"); });
      chip.classList.add("is-active");
      currentFilter = chip.getAttribute("data-filter");
      apply();
    });
  });

  apply();
})();
