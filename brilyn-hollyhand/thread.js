// The Gazette Ledger, Thread No. 214 — decade table filters
(function () {
  var buttons = document.querySelectorAll(".filter-btn");
  var rows = document.querySelectorAll("#decade-table tbody tr");
  var count = document.getElementById("row-count");

  function apply(filter) {
    var shown = 0;
    rows.forEach(function (row) {
      var ok =
        filter === "all" ||
        (filter === "gazette" && row.dataset.cat === "gazette") ||
        (filter === "council" && row.dataset.cat === "council") ||
        (filter === "recent" && row.dataset.recent === "yes");
      row.classList.toggle("hidden", !ok);
      if (ok) shown++;
    });
    if (count) {
      count.textContent = "Showing " + shown + " of " + rows.length + " entries.";
    }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      apply(btn.dataset.filter);
    });
  });
})();
