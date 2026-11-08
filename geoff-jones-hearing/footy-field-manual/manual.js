/* FM-9/54 Chapter 9 — ground clock.
   Counts a quarter of play up to 20:00, then the next quarter, through
   four quarters, then stands at the final siren until clicked. */
(function () {
  var el = document.getElementById("clock");
  if (!el) return;
  var q = 1, s = 0, timer = null;

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function render() {
    el.textContent = "Q" + q + " · " + pad(Math.floor(s / 60)) + ":" + pad(s % 60);
  }

  function tick() {
    s += 1;
    if (s >= 1200) {           // quarter full
      if (q < 4) { q += 1; s = 0; }
      else { render(); stop(); return; }
    }
    render();
  }

  function start() {
    if (timer) return;
    timer = setInterval(tick, 40);
  }

  function stop() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  render();
  el.title = "Ground clock — click for the final siren";
  el.style.cursor = "pointer";
  el.addEventListener("click", function () {
    if (q === 4 && s >= 1200) { q = 1; s = 0; render(); }
    if (timer) stop(); else start();
  });
  start();
})();
