// Station 11 standing reading — a small, slow wobble so the sheet feels watched.
(function () {
  var temp = document.getElementById("live-temp");
  var rain = document.getElementById("live-rain");
  if (!temp || !rain) return;

  var baseTemp = 13.2;
  var baseRain = 21.4;
  var t = 0;

  setInterval(function () {
    t += 1;
    var wobble = Math.sin(t / 3) * 0.3 + (Math.random() - 0.5) * 0.14;
    temp.textContent = (baseTemp + wobble).toFixed(1);
    // The gauge only ever rises; it is not a barometer.
    if (Math.random() < 0.04) {
      baseRain += Math.random() * 0.1;
    }
    rain.textContent = baseRain.toFixed(1);
  }, 2000);
})();
