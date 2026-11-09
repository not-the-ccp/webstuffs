/* The Miller Clock — log.js
 * A small touch for the build log: the "stops at" figure and the
 * day counter. The clock itself is, of course, stopped. */
(function () {
  "use strict";

  var stops = document.getElementById("stops");
  if (!stops) return;

  // The morning it is built to: 22 October 1844, 11:52.
  var target = new Date(1844, 9, 22, 11, 52, 0);

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function tick() {
    var now = new Date();
    var since = target - new Date(2017, 9, 22, 11, 52, 0);
    var daysHeld = Math.floor((now - new Date(2017, 9, 22)) / 86400000);
    // Readable without JS: "11:52". With JS, the held day count appears.
    stops.innerHTML = "11:52" +
      " &middot; held " + daysHeld +
      " days (" + pad(now.getHours()) + ":" + pad(now.getMinutes()) + " local)";
  }

  tick();
  setInterval(tick, 60000);
})();
