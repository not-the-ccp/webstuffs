// The Papeete group gauge — Thread No. 88
(function () {
  var rows = Array.prototype.slice.call(document.querySelectorAll("#groups tbody tr"));
  var needle = document.getElementById("gauge-needle");
  var groupRead = document.getElementById("gauge-group");
  var detailRead = document.getElementById("gauge-detail");
  if (!rows.length || !needle) return;

  function select(row) {
    rows.forEach(function (r) { r.classList.remove("selected"); });
    row.classList.add("selected");
    var bearing = parseFloat(row.getAttribute("data-bearing")) || 0;
    needle.style.transform = "rotate(" + bearing + "deg)";
    groupRead.textContent = row.getAttribute("data-group") || "the whole country";
    var cells = row.querySelectorAll("td");
    detailRead.innerHTML =
      (cells[1] ? cells[1].textContent : "") + " islands &middot; " +
      (cells[2] ? cells[2].textContent : "") + " people &middot; " +
      (row.getAttribute("data-detail") || "");
  }

  rows.forEach(function (row) {
    row.setAttribute("tabindex", "0");
    row.addEventListener("click", function () { select(row); });
    row.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(row); }
    });
  });
})();
