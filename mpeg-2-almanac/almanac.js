/* The Shed Almanac — a light touch on the barometer.
   The page is fully readable without this script. */
(function () {
  "use strict";

  var value = document.getElementById("baro-value");
  var needle = document.getElementById("needle");
  if (!value || !needle) return;

  // The recorded month ran from 2.3 to 6.2 Mbit/s; the desk settles it
  // at 6.0, STEADY. Nudge the printed reading and the needle a touch
  // so the gauge feels alive without contradicting the ledger.
  var readings = [
    [6.0, "STEADY", -14],
    [6.1, "STEADY", -12],
    [6.0, "STEADY", -15],
    [5.9, "STEADY, RISING", -11],
    [6.0, "STEADY", -13]
  ];
  var i = 0;

  setInterval(function () {
    i = (i + 1) % readings.length;
    var r = readings[i];
    value.textContent = r[0].toFixed(1) + " Mbit/s \u00b7 " + r[1];
    needle.style.transform = "rotate(" + r[2] + "deg)";
  }, 4000);
})();
