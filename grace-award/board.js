/* The Grace Line, Service G — departure board filters.
   The timetable reads in full without this script; this only hides rows. */
(function () {
  var table = document.getElementById("departure-board");
  var rows = Array.prototype.slice.call(document.querySelectorAll("#board-rows tr"));
  var input = document.getElementById("board-filter");
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".year-btn"));
  var count = document.getElementById("board-count");
  var empty = document.getElementById("board-empty");
  var reset = document.getElementById("board-reset");
  var total = rows.length;
  var yearSpan = null; // null means all

  function inSpan(row) {
    if (!yearSpan) return true;
    var y = parseInt(row.getAttribute("data-year"), 10);
    var a = parseInt(yearSpan[0], 10);
    var b = parseInt(yearSpan[1], 10);
    return y >= a && y <= b;
  }

  function apply() {
    var q = input.value.trim().toLowerCase();
    var shown = 0;
    rows.forEach(function (row) {
      var text = row.textContent.toLowerCase();
      var ok = inSpan(row) && (!q || text.indexOf(q) !== -1);
      row.classList.toggle("hidden-row", !ok);
      if (ok) shown++;
    });
    count.textContent = shown + " service" + (shown === 1 ? "" : "s") + " shown of " + total + " on the line.";
    empty.hidden = shown !== 0;
  }

  input.addEventListener("input", apply);
  reset.addEventListener("click", function () {
    input.value = "";
    yearSpan = null;
    buttons.forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-years") === "all" ? "true" : "false"); });
    apply();
  });
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var v = btn.getAttribute("data-years");
      yearSpan = v === "all" ? null : v.split("-");
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
      apply();
    });
  });

  // Start with the full line pressed.
  buttons.forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-years") === "all" ? "true" : "false"); });
  apply();
})();
