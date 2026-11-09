/* Shelf clock, gauge, and visitor counter for the Night Watch Kit card.
   The page reads in full without this file; these only keep the shelf alive. */

(function () {
  var counterEl = document.getElementById("counter");
  var clockEl = document.getElementById("clock");
  var gaugeEl = document.getElementById("gauge");

  if (counterEl) {
    // The count begins one past the ledger's 30,117, and never once goes back.
    var n = 30118;
    try {
      var stored = parseInt(window.localStorage.getItem("nw69-visit"), 10);
      if (stored > n) {
        n = stored + 1;
        window.localStorage.setItem("nw69-visit", String(n));
      } else {
        window.localStorage.setItem("nw69-visit", String(n));
      }
    } catch (e) {
      n = n + (new Date().getDate() % 7); // the shelf keeps its own count, unposted
    }
    counterEl.textContent = ("0000000" + n).slice(-8);
  }

  if (clockEl) {
    // The shelf clock holds the hour the recording began; it moves only by the tide.
    var t = 23 * 60 + 15;
    setInterval(function () {
      t = (t + 1) % 1440;
      var h = Math.floor(t / 60);
      var m = t % 60;
      var ampm = h >= 12 ? "p.m." : "a.m.";
      var hh = h % 12;
      if (hh === 0) hh = 12;
      clockEl.textContent = hh + ":" + (m < 10 ? "0" : "") + m + " " + ampm;
    }, 60000);
  }

  if (gaugeEl) {
    // The gauge is read twice a day; between readings it says reading.
    var now = new Date();
    var morning = now.getHours() < 12;
    gaugeEl.textContent = morning ? "5.1 f.t. at dawn" : "2.3 f.t. at dusk";
  }
})();
