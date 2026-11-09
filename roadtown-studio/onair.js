// Studio 2 keeps the lamp and the clock. The page reads fine without this.
(function () {
  "use strict";

  var lamp = document.getElementById("lamp");
  var clock = document.getElementById("clock");

  // the lamp clicks on by itself at irregular intervals, for no one
  function toggleLamp() {
    if (lamp) lamp.classList.toggle("lit");
    var next = 4000 + Math.random() * 9000;
    setTimeout(toggleLamp, next);
  }
  if (lamp) setTimeout(toggleLamp, 2500);

  // the clock runs from 6:14 p.m., the minute the excerpt opens
  if (clock) {
    var start = 18 * 60 + 14;
    setInterval(function () {
      start += 1;
      var h = Math.floor(start / 60) % 12 || 12;
      var m = start % 60;
      clock.textContent = h + ":" + (m < 10 ? "0" + m : m) + " p.m. · 873.5 kHz";
    }, 60000);
  }
})();
