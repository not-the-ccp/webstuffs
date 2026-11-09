document.addEventListener("DOMContentLoaded", function () {
  var filter = document.getElementById("filter");
  var rows = document.querySelectorAll("#register tbody tr");
  if (!filter || !rows.length) return;

  filter.addEventListener("click", function (e) {
    var btn = e.target.closest("button[data-era]");
    if (!btn) return;
    filter.querySelectorAll("button").forEach(function (b) {
      b.classList.toggle("active", b === btn);
    });
    var era = btn.getAttribute("data-era");
    rows.forEach(function (row) {
      row.classList.toggle("hidden", era !== "all" && row.getAttribute("data-era") !== era);
    });
  });
});
