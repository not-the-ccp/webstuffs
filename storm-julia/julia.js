/* U.S. Patent 9,412,883 — wind gauge and storm clock */
(function () {
  "use strict";

  var windsEl = document.getElementById("winds");
  var windskEl = document.getElementById("windsk");
  var timeEl = document.getElementById("stormtime");
  if (!windsEl || !windskEl || !timeEl) return;

  /* Oscillate the sustained-wind reading a hair below the claimed maximum,
     the way a pressure tendency does in the record: never over 50, never bored. */
  var t0 = Date.now();
  setInterval(function () {
    var t = (Date.now() - t0) / 1000;
    var mph = 49.2 + 0.8 * Math.abs(Math.sin(t / 3.4));
    var kmh = mph * 1.60934;
    windsEl.textContent = Math.round(mph) === 50 ? "50" : mph.toFixed(1);
    windskEl.textContent = Math.round(kmh);
  }, 700);

  /* Storm clock: the service hour of the apparatus, 13 Sep 21:40 → 14 Sep,
     ticking forward and looping, as the cyclonic loop does. */
  var START = Date.UTC(2016, 8, 13, 21, 40);
  var END = Date.UTC(2016, 8, 14, 18, 0);
  var hours = 0;
  var hms = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function stamp(d) {
    var h = d.getUTCHours();
    var m = d.getUTCMinutes();
    var hh = (h < 10 ? "0" : "") + h;
    var mm = (m < 10 ? "0" : "") + m;
    return hms[d.getUTCDay()] + " " + d.getUTCDate() + " " + mon[d.getUTCMonth()] +
      " " + d.getUTCFullYear() + ", " + hh + ":" + mm + " UTC";
  }

  function tick() {
    hours += 0.5;
    if (hours > 20.3) hours = 0; /* the loop recovers the cyclone */
    var d = new Date(START + hours * 3600 * 1000);
    var tag = hours > 20 ? " · recycled" : "";
    timeEl.textContent = stamp(d) + tag;
  }
  tick();
  setInterval(tick, 1400);
})();
