/* DR-090 sleeve sheet — the kiosk counter and the needle */
(function () {
  "use strict";

  var el = document.getElementById("counter");
  if (el) {
    var base = 147;
    // a visitor arrives: the counter ticks once per honest session
    base += Math.floor(Math.random() * 3);
    var n = String(base);
    while (n.length < 6) { n = "0" + n; }
    el.textContent = n;
  }
})();
