// The Leaping Loom — studio clock: counts the excerpt in air-time
(function () {
  var clock = document.getElementById("clock");
  if (!clock) return;
  var t = 0; // seconds since the excerpt began
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function render() {
    var h = Math.floor(t / 3600),
        m = Math.floor((t % 3600) / 60),
        s = t % 60;
    clock.textContent = pad(h) + ":" + pad(m) + ":" + pad(s);
  }
  render();
  setInterval(function () { t += 1; render(); }, 1000);
})();
