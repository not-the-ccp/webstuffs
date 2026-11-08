/* The one: a reel-counter-style tally that advances on every downbeat.
   Purely decorative; the page reads fine without it. */
(function () {
  var el = document.getElementById("reel");
  if (!el) return;
  var n = 1965;
  var beat = 800; // 75 bpm, slow on purpose
  setInterval(function () {
    n += 1;
    el.textContent = String(n).padStart(6, "0");
  }, beat);
})();
