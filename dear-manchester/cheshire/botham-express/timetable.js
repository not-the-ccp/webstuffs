/* Botham Express — route filter for Timetable No. 24 */
(function () {
  var buttons = document.querySelectorAll("#filter-buttons button");
  var rows = Array.prototype.slice.call(document.querySelectorAll("#timetable tbody tr"));
  var visible = document.getElementById("visible");
  var heldEl = document.getElementById("held");

  function apply(filter) {
    var shown = 0;
    var held = 0;
    rows.forEach(function (row) {
      var cls = row.getAttribute("data-class");
      var show = filter === "all" || cls === filter;
      row.classList.toggle("hidden", !show);
      if (show) {
        shown += 1;
        if (row.classList.contains("held")) held += 1;
      }
    });
    if (visible) visible.textContent = String(shown);
    if (heldEl) heldEl.textContent = String(held);
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("on"); });
      btn.classList.add("on");
      apply(btn.getAttribute("data-filter"));
    });
  });

  apply("all");
})();
