/* Hudson Studio Line — Service AV-11 · station clock and visitor counter */
(function () {
  "use strict";

  // station time on the masthead
  var clock = document.getElementById("board-time");
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function tick() {
    var d = new Date();
    if (clock) {
      clock.textContent = pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
    }
  }
  tick();
  setInterval(tick, 1000);

  // visitor counter: starts on the 1986 interior, ticks up gently
  var counter = document.getElementById("visitor-counter");
  if (counter) {
    var n = 1986;
    try { n = parseInt(localStorage.getItem("av11-visits") || "1986", 10) + 1; } catch (e) {}
    try { localStorage.setItem("av11-visits", String(n)); } catch (e) {}
    counter.textContent = ("000000" + n).slice(-7);
  }
})();
