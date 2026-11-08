// The Bay Weather Almanac — barometer that never agrees with anyone
(function () {
  var value = document.getElementById("baro-value");
  var state = document.getElementById("baro-state");
  if (!value || !state) return;

  var reading = 29.92;
  var states = ["steady", "steady", "rising slowly", "falling slowly", "unsettled, do not cross"];

  function drift() {
    reading += (Math.random() - 0.5) * 0.04;
    if (reading < 29.6) reading = 29.6;
    if (reading > 30.2) reading = 30.2;
    value.textContent = reading.toFixed(2);
    state.textContent = states[Math.floor(Math.random() * states.length)];
  }

  drift();
  setInterval(drift, 4000);
})();
