// Leaflet No. 401 — the odometer on the route summary counts up to the
// trail's total mileage when the leaflet is opened.
(function () {
  var el = document.getElementById("odo");
  if (!el) return;
  var target = 5214;
  var t0 = null;
  var DURATION = 1600;

  function frame(ts) {
    if (t0 === null) t0 = ts;
    var p = Math.min((ts - t0) / DURATION, 1);
    var eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased).toLocaleString("en-US");
    if (p < 1) requestAnimationFrame(frame);
  }

  if (requestAnimationFrame) {
    requestAnimationFrame(frame);
  } else {
    el.textContent = target.toLocaleString("en-US");
  }
})();
