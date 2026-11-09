/* Working Table filter: province + airfield name, with running total. */
(function () {
  var region = document.getElementById("region");
  var search = document.getElementById("search");
  var total = document.getElementById("total");
  var rows = Array.prototype.slice.call(
    document.querySelectorAll("#losses tbody tr")
  );

  function apply() {
    var r = region.value;
    var q = search.value.trim().toLowerCase();
    var sum = 0;
    var shown = 0;

    rows.forEach(function (row) {
      var name = row.cells[0].textContent.toLowerCase();
      var match =
        (!r || row.getAttribute("data-region") === r) &&
        (!q || name.indexOf(q) !== -1);
      row.classList.toggle("hidden", !match);
      if (match) {
        sum += parseInt(row.cells[3].textContent, 10);
        shown += 1;
      }
    });

    total.textContent = shown + " fields · " + sum;
  }

  region.addEventListener("change", apply);
  search.addEventListener("input", apply);
  apply();
})();
