/* A quiet GPS readout for the logbook, per the forage rule:
   time, latitude, longitude, satellite count, and HDOP. */
(function () {
  var el = document.querySelector(".forage-rule");
  if (!el) return;

  var base = { lat: 51.9417, lon: 4.0319 }; // south quay, Botlek
  var drift = 0;

  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  function readout() {
    drift += 0.000013;
    var d = new Date();
    var t = pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
    var lat = (base.lat + Math.sin(drift) * 0.0004).toFixed(4);
    var lon = (base.lon + Math.cos(drift * 0.7) * 0.0004).toFixed(4);
    var sats = 9 + (d.getSeconds() % 5);
    var hdop = (0.6 + Math.abs(Math.sin(drift * 3)) * 0.9).toFixed(1);
    var line = "T+" + t + "  " + lat + " N  " + lon + " E  sats " + sats + "  HDOP " + hdop;
    el.dataset.readout = line;
    el.setAttribute("title", line);
  }

  readout();
  setInterval(readout, 1000);
})();
