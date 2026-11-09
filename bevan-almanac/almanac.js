// The fronts of the record: filter the log by front.
(function () {
  var table = document.getElementById("log");
  var count = document.getElementById("barCount");
  var buttons = document.querySelectorAll(".bar-btn");
  if (!table || !count) return;

  var rows = Array.prototype.slice.call(table.tBodies[0].rows);
  var all = rows.length;

  function words(n) {
    switch (n) {
      case 11: return "eleven";
      case 12: return "Twelve";
      default:
        return String(n);
    }
  }

  function apply(front) {
    var shown = 0;
    rows.forEach(function (row) {
      var match = front === "all" || row.getAttribute("data-front") === front;
      row.classList.toggle("is-hidden", !match);
      if (match) shown += 1;
    });
    buttons.forEach(function (b) {
      b.classList.toggle("bar-btn--on", b.getAttribute("data-front") === front);
    });
    if (front === "all") {
      count.textContent = words(all) + " readings in the record.";
    } else {
      count.textContent = shown + " of " + all + " readings, picked from the bar.";
    }
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      apply(b.getAttribute("data-front"));
    });
  });
})();
