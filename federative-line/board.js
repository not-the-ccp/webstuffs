/* The Federative Line — departures board.
   Highlights, one at a time in order, the stations the line is "due, soon" for.
   The timetable reads fine without it; the board merely keeps the railway in
   motion, as the railway does everything. */
(function () {
  "use strict";
  var times = document.querySelectorAll("table.tt td:first-child");
  if (!times.length) return;
  var i = -1;
  function next() {
    if (i >= 0) times[i].classList.remove("now-departing");
    i = (i + 1) % times.length;
    if (!times[i].textContent.trim() || times[i].textContent.trim() === "—") {
      setTimeout(next, 900);
      return;
    }
    times[i].classList.add("now-departing");
    setTimeout(next, 2200);
  }
  if (document.visibilityState === "visible") setTimeout(next, 800);
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") setTimeout(next, 400);
  });
})();
