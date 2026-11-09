/* CY-112 Records — small machinery for the liner notes.
   The page reads fine without this; this only adds the
   counter, the blink, and the guestbook note. */

(function () {
  "use strict";

  // visitor counter: a modest number, ticking up once per visit-ish
  var odo = document.getElementById("odometer");
  if (odo) {
    var n = 11827;
    try {
      var stored = window.localStorage && window.localStorage.getItem("cy112-count");
      if (stored) n = (parseInt(stored, 10) || 11827) + 1;
      window.localStorage && window.localStorage.setItem("cy112-count", String(n));
    } catch (e) { /* the counter keeps its own counsel */ }
    odo.textContent = ("000000" + n).slice(-6);
    setInterval(function () {
      n += 1;
      odo.textContent = ("000000" + n).slice(-6);
    }, 17000);
  }

  // the blink line blinks at a respectful 1 Hz
  var blink = document.getElementById("blink-line");
  if (blink) {
    var on = true;
    setInterval(function () {
      on = !on;
      blink.className = "blink " + (on ? "blinker-on" : "blinker-off");
    }, 800);
  }
})();
