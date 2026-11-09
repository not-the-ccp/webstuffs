/* One Hundred and Two — CAB-9/102
   The moon dial walks the synodic month; the footer counts the 37.
   Without the current in the wire, the dial stands at first quarter and the
   count stands at 37, which is where they belong. */

(function () {
  "use strict";

  var SHADOW = document.getElementById("moon-shadow");
  var LABEL = document.getElementById("moon-label");
  var COUNT = document.getElementById("early-count");

  var PHASES = [
    { name: "new moon", rx: 44 },
    { name: "waxing crescent", rx: 30 },
    { name: "first quarter", rx: 0 },
    { name: "waxing gibbous", rx: -30 },
    { name: "full moon", rx: -44 },
    { name: "waning gibbous", rx: -30 },
    { name: "last quarter", rx: 0 },
    { name: "waning crescent", rx: 30 }
  ];

  /* 29.53-day synodic month; the record's own month */
  function currentPhase() {
    var now = Date.now();
    var knownNew = Date.UTC(2000, 0, 6, 18, 14); /* a known new moon */
    var synodic = 29.530588853;
    var days = (now - knownNew) / 86400000;
    var frac = ((days % synodic) + synodic) % synodic / synodic;
    var idx = Math.round(frac * PHASES.length) % PHASES.length;
    return PHASES[idx];
  }

  function paintPhase(phase) {
    if (SHADOW) {
      /* the shadow ellipse's inner radius sweeps the disc */
      var rx = phase.rx;
      var side = rx >= 0 ? 1 : -1;
      var a = Math.abs(rx);
      SHADOW.setAttribute("d",
        "M60 16 A44 44 0 0 " + (side === 1 ? 1 : 0) + " 60 104 " +
        "A" + a + " 44 0 0 " + ((side === 1) === (a >= 44) ? 0 : 1) + " 60 16 Z");
    }
    if (LABEL) LABEL.textContent = phase.name;
  }

  var phase = currentPhase();
  paintPhase(phase);
  setInterval(function () {
    phase = currentPhase();
    paintPhase(phase);
  }, 60 * 60 * 1000);

  /* the 37, ticking: it leaves the pan early, so it counts down to the hour
     and then resets, the way the stew does, 37 seconds early */
  if (COUNT) {
    var t = 37;
    var sec = new Date().getSeconds();
    if (sec < 37) t = 37 - sec; /* mid-tick */
    COUNT.textContent = t;
    setInterval(function () {
      t -= 1;
      if (t < 0) {
        t = 37;
        COUNT.classList.remove("tick");
        void COUNT.offsetWidth;
        COUNT.classList.add("tick");
      }
      COUNT.textContent = t;
    }, 1000);
  }
})();
