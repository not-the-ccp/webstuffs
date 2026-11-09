(function () {
  "use strict";
  var el = document.getElementById("tide-ticker");
  if (!el) return;
  var ports = ["Prince Rupert", "Port Hardy", "Steveston", "Victoria", "Vancouver"];
  var i = 0;
  function tick() {
    var port = ports[i % ports.length];
    var hour = Math.floor(Math.random() * 12) + 1;
    var minute = Math.floor(Math.random() * 6) * 10;
    var minuteText = minute < 10 ? "0" + minute : minute;
    el.textContent = port + " — high tide " + hour + ":" + minuteText;
    i += 1;
  }
  tick();
  setInterval(tick, 6000);
})();
