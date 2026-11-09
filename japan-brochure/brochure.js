/* Japan Visitor's Brochure — prefecture table filter */
(function () {
  var bar = document.getElementById("filter-bar");
  var table = document.getElementById("prefecture-table");
  var count = document.getElementById("filter-count");
  var search = document.getElementById("prefecture-search");
  if (!bar || !table || !search) return;

  var buttons = Array.prototype.slice.call(bar.querySelectorAll(".region-btn"));
  var rows = Array.prototype.slice.call(table.querySelectorAll("tbody tr"));
  var activeRegion = "all";

  function apply() {
    var query = search.value.trim().toLowerCase();
    var shown = 0;
    rows.forEach(function (row) {
      var regionOk = activeRegion === "all" || row.dataset.region === activeRegion;
      var textOk = !query || row.textContent.toLowerCase().indexOf(query) !== -1;
      var visible = regionOk && textOk;
      row.style.display = visible ? "" : "none";
      if (visible) shown += 1;
    });
    count.textContent = "Showing " + shown + " of " + rows.length + " prefectures." +
      (activeRegion !== "all" ? " Region: " + activeRegion + "." : "");
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      activeRegion = btn.dataset.region;
      apply();
    });
  });

  search.addEventListener("input", apply);
  apply();
})();
