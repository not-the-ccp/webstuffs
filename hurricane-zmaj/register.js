// Exhibit 8 — working register of Hurricane Mk I airframes, VVKJ.
// Filters the certified table; the printed text stands without it.
(function () {
  "use strict";

  var table = document.getElementById("airframe-table");
  var buttons = document.querySelectorAll("#registry-controls .ctl");
  var search = document.getElementById("registry-search");
  var tally = document.getElementById("registry-tally");
  if (!table || !tally) return;

  var rows = Array.prototype.slice.call(table.tBodies[0].rows);
  var origin = "all";
  var term = "";

  function apply() {
    var shown = 0, shownImports = 0, shownZmaj = 0, inService = 0;
    rows.forEach(function (row) {
      var isZmaj = row.getAttribute("data-origin") === "zmaj";
      var text = row.textContent.toLowerCase();
      var okOrigin = origin === "all" || (origin === "zmaj") === isZmaj;
      var okTerm = term === "" || text.indexOf(term) !== -1;
      var visible = okOrigin && okTerm;
      row.style.display = visible ? "" : "none";
      if (visible) {
        shown++;
        if (isZmaj) shownZmaj++; else shownImports++;
        if (row.cells[5].textContent.indexOf("In service") === 0) inService++;
      }
    });
    var parts = ["Showing " + shown + " of " + rows.length + " airframes",
                 shownImports + " imports",
                 shownZmaj + " Zmaj licence-built"];
    if (inService > 0) parts.push(inService + " in service as fighters");
    tally.textContent = parts.join(" \u2014 ") + ".";
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      origin = btn.getAttribute("data-origin");
      buttons.forEach(function (b) { b.classList.toggle("is-active", b === btn); });
      apply();
    });
  });

  search.addEventListener("input", function () {
    term = search.value.trim().toLowerCase();
    apply();
  });

  apply();
})();
