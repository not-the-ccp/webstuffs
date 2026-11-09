/* Entry 48 — the register of reported dreams, filtered by motif. */
(function () {
  "use strict";

  var filters = document.querySelectorAll("#filters .filter");
  var rows = document.querySelectorAll("#register tbody tr");
  var foot = document.getElementById("reportsFoot");
  if (!filters.length || !rows.length) return;

  var names = {
    all: "all twelve reports, uncounted, as filed",
    door: "the reports of the green door",
    cask: "the reports of the cask",
    count: "the reports of the count",
    line: "the reports of the line in the margin"
  };

  function show(motif) {
    var visible = 0;
    rows.forEach(function (row) {
      var match = motif === "all" || row.getAttribute("data-motif") === motif;
      row.classList.toggle("is-hidden", !match);
      if (match) visible++;
    });
    filters.forEach(function (btn) {
      btn.classList.toggle("is-on", btn.getAttribute("data-motif") === motif);
    });
    if (foot) {
      foot.textContent = motif === "all"
        ? "Showing " + names.all + "."
        : "Showing " + visible + " of twelve — " + names[motif] + ".";
    }
  }

  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      show(btn.getAttribute("data-motif"));
    });
  });

  show("all");
})();
