/* The Caspian Circuit — sector clock, tachometer, and the drip */
(function () {
  "use strict";

  var clockEl = document.getElementById("sector-clock");
  var reelEl = document.getElementById("reel");

  var start = Date.now();
  // The reel counter must run. It does not explain itself.
  var reel = 47212 + Math.floor(Math.random() * 900);

  function pad(n, w) {
    var s = String(n);
    while (s.length < w) s = "0" + s;
    return s;
  }

  function tickClock() {
    if (!clockEl) return;
    var elapsed = Math.floor((Date.now() - start) / 1000);
    var lap = 1 + Math.floor(elapsed / 60); // a lap a minute, the slow way
    clockEl.textContent =
      "LAP " + lap + " · " +
      pad(Math.floor(elapsed / 3600), 2) + ":" +
      pad(Math.floor(elapsed / 60) % 60, 2) + ":" +
      pad(elapsed % 60, 2);
  }

  function tickReel() {
    if (!reelEl) return;
    reel += 1 + Math.floor(Math.random() * 3);
    reelEl.textContent = pad(reel % 1000000, 6);
  }

  tickClock();
  tickReel();
  setInterval(tickClock, 1000);
  // The drip keeps its four seconds; the tachometer answers at its own rate.
  setInterval(tickReel, 4000);

  // Sector rows announce themselves in the steward's margin when hovered.
  var rows = document.querySelectorAll(".sectortable tbody tr");
  rows.forEach(function (row) {
    row.addEventListener("mouseenter", function () {
      var name = row.cells[1] ? row.cells[1].textContent : "";
      if (document.title && name) {
        document.title = name + " — The Caspian Circuit, Plate AZ-24";
      }
    });
  });
  var table = document.querySelector(".sectortable");
  if (table) {
    table.addEventListener("mouseleave", function () {
      document.title = "The Caspian Circuit — Field & Race Manual, Plate AZ-24";
    });
  }

  // The hush: pressing and holding the flag band does nothing, as it should.
  var bands = document.querySelectorAll(".flag-band");
  bands.forEach(function (band) {
    band.addEventListener("click", function () {
      if (reelEl) {
        // one revolution, unexplained, for the hush
        reel += 1;
        reelEl.textContent = pad(reel % 1000000, 6);
      }
    });
  });
})();
