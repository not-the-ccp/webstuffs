// Timetable No. 9/35 — board time
(function () {
  var el = document.getElementById("now");
  if (!el) return;
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function tick() {
    var d = new Date();
    el.textContent = pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
  }
  tick();
  setInterval(tick, 1000);
})();
