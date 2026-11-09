/* Interstate 90 — Field Notes: hand-kept odometer, updated as the reader descends the route. */
(function () {
  "use strict";

  var TOTAL = 3099.7;
  var STATES = 13;
  var AUX = 15;

  var odometer = document.getElementById("odometer");
  var states = document.getElementById("states");
  var aux = document.getElementById("aux");
  var entries = document.querySelectorAll(".entry");
  if (!odometer || !entries.length) return;

  function fmt(n) {
    return n.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function update() {
    var doc = document.documentElement;
    var scrollTop = doc.scrollTop || document.body.scrollTop;
    var height = doc.scrollHeight - doc.clientHeight;
    var frac = height > 0 ? Math.min(1, Math.max(0, scrollTop / height)) : 0;

    odometer.textContent = fmt(frac * TOTAL);
    states.textContent = String(1 + Math.round(frac * (STATES - 1)));
    aux.textContent = String(Math.round(frac * AUX));
  }

  var ticking = false;
  function onScroll() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(function () {
        update();
        ticking = false;
      });
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
})();
