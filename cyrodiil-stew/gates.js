/* Card No. 41 — gate ledger filter */
(function () {
  var buttons = document.querySelectorAll(".filter-btn");
  var rows = document.querySelectorAll("#gate-table tbody tr");
  var count = document.getElementById("gate-count");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var plane = btn.dataset.plane;
      var shown = 0;
      rows.forEach(function (row) {
        var match = plane === "all" || row.dataset.plane === plane;
        row.style.display = match ? "" : "none";
        if (match) shown++;
      });
      if (count) {
        count.textContent = shown + " of 8 gates shown" +
          (plane === "all" ? " · ledger kept in the order crossed" : " · " + plane + " planes only");
      }
    });
  });
})();
