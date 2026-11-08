/* The Tufton Wire — Thread No. 312
   The vestry clock, and the eleven chairs.
   Purely decorative: the thread reads fine without it. */
(function () {
  "use strict";

  var WEDDING = new Date(2011, 3, 29, 11, 0, 0); // Friday 29 April 2011, 11:00
  var clock = document.getElementById("wedding-clock");
  var bell = document.getElementById("bell");
  var count = document.getElementById("bell-count");
  var status = document.getElementById("thread-status");

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function ticks() {
    var diff = WEDDING.getTime() - Date.now();
    if (diff > 0) {
      var d = Math.floor(diff / 86400000);
      var h = Math.floor(diff / 3600000) % 24;
      var m = Math.floor(diff / 60000) % 60;
      var s = Math.floor(diff / 1000) % 60;
      clock.textContent =
        "THE BELL WAITS · " + d + " DAYS " + pad(h) + "H " + pad(m) + "M " + pad(s) + "S";
      setTimeout(ticks, 1000);
      return;
    }
    clock.textContent = "HELD · FRIDAY 29 APRIL 2011 · 11 O'CLOCK · WESTMINSTER ABBEY";
    if (status) { status.textContent = "HELD · 29 APRIL 2011"; }
    strike();
  }

  function strike() {
    if (!bell || !count) { return; }
    var strikes = 0;
    var chairs = 11; // eleven chairs, and a spare
    (function next() {
      bell.classList.remove("bell--striking");
      // force reflow so the animation can replay
      void bell.offsetWidth;
      bell.classList.add("bell--striking");
      strikes += 1;
      count.textContent = strikes + " / " + chairs;
      if (strikes < chairs) {
        setTimeout(next, 1150);
      } else {
        setTimeout(function () { count.textContent = "11 / 11 · the spare held"; }, 1400);
      }
    })();
  }

  ticks();
})();
