/* The terrace clocks: the hour, in each zone, ticking along. */
(function () {
  var rows = document.querySelectorAll(".clocks li[data-zone]");
  if (!rows.length) return;
  var fmt = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
  function tick() {
    var now = new Date();
    rows.forEach(function (row) {
      var t = row.querySelector(".time");
      if (!t) return;
      try {
        t.textContent = fmt.format(now, undefined);
      } catch (e) {
        t.textContent = "—";
      }
    });
  }
  // apply the zone per row by reformatting with its timeZone
  var formatters = {};
  rows.forEach(function (row) {
    formatters[row.dataset.zone] = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: row.dataset.zone
    });
  });
  function tickZoned() {
    var now = new Date();
    rows.forEach(function (row) {
      var t = row.querySelector(".time");
      if (!t) return;
      try {
        t.textContent = formatters[row.dataset.zone].format(now);
      } catch (e) {
        t.textContent = "—";
      }
    });
  }
  tickZoned();
  setInterval(tickZoned, 1000);
})();
