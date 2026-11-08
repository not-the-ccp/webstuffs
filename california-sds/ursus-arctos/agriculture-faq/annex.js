/* Field Annex No. 7 — Mammoth Whistle Stop
   Counts the day of continuous cultivation in the masthead,
   ticking forward from 11,500 years by the length of one
   growing season (365 days) every season, melt days excepted. */
(function () {
  var el = document.getElementById("sowing-day");
  if (!el) return;

  var SEASONS_PER_YEAR = 1; // one harvest, one timetable
  var days = 11500 * 365;
  var shown = Math.floor(days / 365);

  function fmt(n) {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Advance one harvest day each real day, so the masthead
  // reads as a live platform clock of the field.
  var today = new Date();
  var start = new Date(1991, 11, 21); // the year the lockbox was last counted
  var elapsed = Math.floor((today - start) / 86400000);
  if (elapsed < 0) elapsed = 0;

  el.textContent = fmt(shown + Math.floor(elapsed / 365));

  // A short wheat-gold flash each time the counter moves,
  // so passengers notice it the way they notice the livery.
  setInterval(function () {
    el.style.transition = "none";
    el.style.color = "#c9862b";
    setTimeout(function () {
      el.style.transition = "color 1.2s";
      el.style.color = "";
    }, 120);
  }, 20000);
})();
