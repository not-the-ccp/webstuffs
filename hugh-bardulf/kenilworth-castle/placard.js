/* Kenilworth annex — a small visitor counter, kept the way the castle
   keeps its ledger: the number only moves upward, and never by more
   than the number of doors in the gatehouse. */
(function () {
  var el = document.getElementById("visitorCount");
  if (!el) return;

  // The annex opened at 1067 visitors (placard number, kept as a base),
  // and gains one for each month of the six-month siege since, plus a
  // day's worth of quiet footfall through the gatehouse.
  var base = 1067;
  var siegeMonths = 6;
  var d = new Date();
  var dayOfMonth = d.getDate();

  var total = base + siegeMonths * 111 + dayOfMonth;
  var digits = String(total);
  while (digits.length < 6) digits = "0" + digits;

  el.textContent = digits;
})();
