/* The Kalahari Express — line B/12. The train is never late; the page just checks. */
(function () {
  "use strict";

  var rows = Array.prototype.slice.call(document.querySelectorAll(".row"));
  var table = document.querySelector(".timetable");
  var marker = document.getElementById("marker");
  var label = document.getElementById("marklabel");
  var board = document.getElementById("board");
  if (!rows.length || !table || !marker) return;

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  // Build the full clock run 04:12 -> 19:47 across the rows.
  var totalStart = 4 * 60 + 12;
  var totalEnd = 19 * 60 + 47;

  function place(i) {
    var row = rows[i];
    var t = (row.dataset.time || "").split(":");
    var time = t[0] + ":" + t[1];
    var station = row.querySelector(".s").textContent;

    var top = row.offsetTop + 14;
    marker.style.top = top + "px";
    label.textContent = time + " · " + station;
    row.classList.add("current");

    if (board) {
      var mins = (parseInt(t[0], 10) * 60 + parseInt(t[1], 10) - totalStart);
      var clockMin = totalStart + Math.round((mins / (totalEnd - totalStart)) * 24 * 60);
      var h = Math.floor(clockMin / 60) % 24;
      var m = clockMin % 60;
      board.textContent = "NOW DEPARTING · " + pad(h) + ":" + pad(m) + " · " + station.toUpperCase();
      if (!reduce) {
        board.classList.remove("flash");
        void board.offsetWidth;
        board.classList.add("flash");
      }
    }
  }

  if (reduce) {
    place(0);
    return;
  }

  var i = 0;
  var step = function () {
    rows.forEach(function (r) { r.classList.remove("current"); });
    place(i);
    i = (i + 1) % rows.length;
  };
  step();
  setInterval(step, 2600);

  // Re-seat the marker if the page reflows.
  window.addEventListener("resize", function () {
    var cur = (i - 1 + rows.length) % rows.length;
    marker.style.top = (rows[cur].offsetTop + 14) + "px";
  });
})();
