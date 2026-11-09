/* In Memoriam — The Office of the Archbishop of Canterbury
   The Church Weather Almanac, Year XLVIII · Parish Observatory, Lambeth Hill
   The page is fully readable without this script; it only keeps the vigil. */

(function () {
  "use strict";

  // Light the full row: twenty-six candles, one for each Lord Spiritual.
  var row = document.querySelector(".candles");
  if (row) {
    row.textContent = "";
    for (var i = 0; i < 26; i++) {
      var c = document.createElement("span");
      c.className = "candle";
      c.appendChild(document.createElement("i"));
      row.appendChild(c);
    }
  }

  // Duplicate the ticker track so the drift has no visible seam.
  var track = document.querySelector(".ticker-track");
  if (track) { track.innerHTML += track.innerHTML; }

  // The barometer falls with the vacancy, one line at a time.
  var baro = document.getElementById("baro");
  if (baro) {
    var pressure = 29.91;
    setInterval(function () {
      pressure = Math.max(29.0, pressure - 0.01);
      baro.textContent = pressure.toFixed(2);
    }, 9000);
  }

  // The station clock: 6:40, the hour the ledger keeps.
  var clock = document.getElementById("clock");
  if (clock) {
    setInterval(function () {
      var d = new Date();
      var h = d.getHours() % 12 || 12;
      var m = d.getMinutes();
      clock.textContent = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m);
    }, 30000);
  }

  // The candles lean a little as the page is read.
  if (row && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var candles = row.querySelectorAll(".candle");
    setInterval(function () {
      var n = (Math.random() * candles.length) | 0;
      var c = candles[n];
      if (!c) return;
      c.style.transform = "rotate(" + (Math.random() * 4 - 2).toFixed(1) + "deg)";
      setTimeout(function () { c.style.transform = ""; }, 1400);
    }, 2600);
  }
})();
