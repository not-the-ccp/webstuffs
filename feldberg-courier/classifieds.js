// The Feldberg Courier — sifting the column by head and word
(function () {
  var rows = Array.prototype.slice.call(document.querySelectorAll("#ads tbody tr"));
  var head = document.getElementById("head");
  var query = document.getElementById("query");
  var count = document.getElementById("count");
  if (!rows.length || !head || !query || !count) return;

  function apply() {
    var h = head.value;
    var q = query.value.trim().toLowerCase();
    var shown = 0;
    rows.forEach(function (row) {
      var okHead = !h || row.getAttribute("data-head") === h;
      var okText = !q || row.textContent.toLowerCase().indexOf(q) !== -1;
      var show = okHead && okText;
      row.style.display = show ? "" : "none";
      if (show) shown += 1;
    });
    count.textContent = shown + " of " + rows.length + " ads in the column, as sifted.";
  }

  head.addEventListener("change", apply);
  query.addEventListener("input", apply);
  apply();
})();
