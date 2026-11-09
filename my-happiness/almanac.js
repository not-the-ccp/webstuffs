// Station No. 5 — a small barometer that falls all month and peaks on the last day.
(function () {
  "use strict";
  var almanac = document.querySelector(".almanac");
  if (!almanac) return;

  var baro = document.createElement("p");
  baro.className = "baro";
  baro.setAttribute("aria-hidden", "true");
  baro.style.cssText =
    "margin:.4rem 0 0;text-align:center;font-size:.72rem;letter-spacing:.14em;" +
    "text-transform:uppercase;color:#8a9a94;";

  var label = document.createElement("span");
  var meter = document.createElement("span");
  label.textContent = "barometer ";
  almanac.appendChild(baro);
  baro.appendChild(label);
  baro.appendChild(meter);

  var days = 31;
  var tick = 0;
  var t0 = null;

  function frame(ts) {
    if (t0 === null) t0 = ts;
    var p = Math.min(1, (ts - t0) / 22000); // a full month of pressure in one slow sweep
    tick = Math.round(p * days);
    // falls through the month, then climbs to the No. 1 at the last day
    var pressure;
    if (p < 0.85) {
      pressure = 1030 - p * 30; // the loneliness, falling
    } else {
      pressure = 1004.5 + ((p - 0.85) / 0.15) * 12; // the single climbs to the top
    }
    meter.textContent =
      pressure.toFixed(1) + " hPa · " + tick + " Aug" +
      (tick >= days ? " · No. 1" : " · falling");
    requestAnimationFrame(frame);
  }

  if (window.requestAnimationFrame) requestAnimationFrame(frame);
  else meter.textContent = "1016.0 hPa · 16 Aug · falling";
})();
