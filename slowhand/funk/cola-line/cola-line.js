/* The Coca-Cola Line — the boarding board by the door.
   Counts the line's boardings at the rate of the world:
   about 1.8 billion servings a day, or one every 0.5 seconds. */
(function () {
  var el = document.getElementById("boardings");
  if (!el) return;
  var base = Math.floor(performance.now() / 1000 * 2); // 2 boardings per second, world rate
  function pad(n) {
    var s = String(n);
    while (s.length < 6) s = "0" + s;
    return s;
  }
  function tick() {
    el.textContent = pad(Math.floor(performance.now() / 1000 * 2) - base);
  }
  tick();
  setInterval(tick, 500);
})();
