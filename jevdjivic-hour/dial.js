/* The studio needle drifts between 104.3 and the wind, but never leaves the hour. */
(function () {
  var needle = document.getElementById("needle");
  if (!needle) return;
  var target = 66; // 104.3, where the log book says it was left
  setInterval(function () {
    if (Math.random() < 0.7) {
      target = 66; // settle back on the station
    } else {
      target = 66 + (Math.random() * 8 - 4); // the wind of Ravno Polje
    }
    needle.style.left = target + "%";
  }, 4000);
})();
