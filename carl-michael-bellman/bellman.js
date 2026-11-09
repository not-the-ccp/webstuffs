/* Bellman corner: a little life for the visitor counter.
   The text of the page is fully readable without this file. */
(function () {
  var el = document.getElementById("counter");
  if (!el) return;

  // Start at 3817, the number of the last numbered song.
  var n = 3817;
  var seen = 0;
  try { seen = parseInt(localStorage.getItem("bellman-seen") || "0", 10) || 0; } catch (e) {}
  n += seen;

  function paint(v) {
    el.textContent = String(v).padStart(6, "0");
  }

  paint(n);

  // A visitor is counted once per day, and the counter ticks one place
  // every few seconds so the page feels like an open door.
  var last = "never";
  try { last = localStorage.getItem("bellman-day") || "never"; } catch (e) {}
  var today = new Date().toDateString();
  if (last !== today) {
    n += 1;
    paint(n);
    try {
      localStorage.setItem("bellman-seen", String(seen + 1));
      localStorage.setItem("bellman-day", today);
    } catch (e) {}
  }

  window.setInterval(function () {
    n += 1;
    paint(n);
  }, 7000);
})();
