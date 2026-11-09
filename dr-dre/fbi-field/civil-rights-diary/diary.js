/* The Night Diary — ledger filter. The ledger reads in order without this. */
(function () {
  var ledger = document.getElementById("ledger");
  if (!ledger) return;

  var buttons = ledger.querySelectorAll(".filter-btn");
  var rows = ledger.querySelectorAll("#ledger-body tr");
  var count = document.getElementById("ledger-count");

  function applyFilter(kind) {
    var shown = 0;
    rows.forEach(function (row) {
      var match = kind === "all" || row.getAttribute("data-kind") === kind;
      row.classList.toggle("is-hidden", !match);
      if (match) shown += 1;
    });
    if (count) {
      count.textContent = shown + " of " + rows.length + " lines on the wall";
    }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) {
        b.classList.remove("is-active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-pressed", "true");
      applyFilter(btn.getAttribute("data-filter"));
    });
  });

  applyFilter("all");
})();
