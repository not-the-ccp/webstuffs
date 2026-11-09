/* The Green Line Limited — yard clock and board filter */
(function () {
  "use strict";

  // Yard clock, kept in local (UTC+2) time.
  var clock = document.getElementById("yard-clock");
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function tick() {
    if (!clock) return;
    var now = new Date();
    var utc = now.getTime() + now.getTimezoneOffset() * 60000;
    var gaza = new Date(utc + 2 * 3600000);
    clock.textContent =
      pad(gaza.getHours()) + ":" + pad(gaza.getMinutes()) + ":" + pad(gaza.getSeconds());
  }
  tick();
  setInterval(tick, 1000);

  // Filter the departure board by line.
  var buttons = document.querySelectorAll(".filter-btn");
  var rows = document.querySelectorAll("table.timetable tbody tr");
  var note = document.getElementById("filter-note");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var f = btn.getAttribute("data-filter");
      buttons.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");

      var shown = 0;
      rows.forEach(function (tr) {
        var match = f === "all" || tr.getAttribute("data-line") === f;
        tr.classList.toggle("is-hidden", !match);
        if (match) shown++;
      });

      if (note) {
        note.textContent =
          "Showing " + shown + " of " + rows.length +
          (f === "all" ? " services." : " services on the selected line.") +
          " The full board remains the board of record.";
      }
    });
  });
})();
