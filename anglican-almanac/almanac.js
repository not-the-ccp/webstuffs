/* The Church Weather Almanac — observatory instruments */
(function () {
  "use strict";

  var reduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var clockEl = document.getElementById("clock");
  var baroEl = document.getElementById("baro");

  /* The observatory clock: keeps 06:40 — the hour of the table —
     and lets the seconds drift, as an honest clock should. */
  if (clockEl) {
    var base = { h: 6, m: 40, s: 0 };
    var last = Date.now();
    setInterval(function () {
      var now = Date.now();
      base.s += (now - last) / 1000;
      last = now;
      if (base.s >= 60) { base.s -= 60; base.m += 1; }
      if (base.m >= 60) { base.m -= 60; base.h += 1; }
      var p = function (n) { return (n < 10 ? "0" : "") + n; };
      clockEl.textContent = p(base.h) + ":" + p(base.m) + ":" + p(Math.floor(base.s));
    }, 1000);
  }

  /* The barometer: 30.12 in., falling with the schism,
     with a small honest wobble of the needle. */
  if (baroEl) {
    if (reduced) return;
    setInterval(function () {
      var drift = (Math.random() - 0.52) * 0.02;
      var v = parseFloat(baroEl.textContent) + drift;
      if (v < 29.84) v = 29.84;
      if (v > 30.2) v = 30.2;
      baroEl.textContent = v.toFixed(2);
    }, 2400);
  }

  /* The ticker: duplicate the track so the loop seam is invisible. */
  var track = document.getElementById("ticker");
  if (track && !reduced && track.scrollWidth > track.parentElement.clientWidth) {
    track.innerHTML += track.innerHTML;
  }
})();
