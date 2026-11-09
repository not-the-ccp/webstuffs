/* Flanders Street Weather Almanac, Entry No. 47 — the gust counter keeps running */
(function () {
  var el = document.getElementById("gust");
  if (!el) return;
  var n = 47000;
  setInterval(function () {
    n += 1;
    el.textContent = String(n).padStart(6, "0");
  }, 4000);
})();
