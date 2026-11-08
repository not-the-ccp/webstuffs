/* The Eighth Avenue Line — next-service marker */
(function () {
  "use strict";

  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();

  /* Next departure from 59th Street: hourly at :41, 05:41 through 23:41. */
  var depH = h;
  var depMin = 41;
  if (m > 41) depH = h + 1;
  if (depH > 23) depH = 5; /* service resumes at 05:41 */
  if (depH < 5) depH = 5;

  var pad = function (n) { return (n < 10 ? "0" : "") + n; };
  var svcNo = depH - 5 + 1;

  var nextLine = document.getElementById("next-svc");
  if (nextLine) {
    nextLine.textContent =
      "Next service (No. " + svcNo + ") departs 59th Street at " +
      pad(depH) + ":" + pad(depMin) + ". Slip check at 42nd Street.";
  }

  var rows = document.querySelectorAll("table.times tr.svc");
  for (var i = 0; i < rows.length; i++) {
    var cell = rows[i].cells[0];
    if (cell && parseInt(cell.textContent, 10) === svcNo) {
      rows[i].classList.add("next");
      break;
    }
  }

  var ft = document.getElementById("field-time");
  if (ft) {
    ft.textContent =
      "Field time recorded: " +
      pad(now.getHours()) + ":" + pad(now.getMinutes()) +
      " · service running on schedule";
  }
})();
