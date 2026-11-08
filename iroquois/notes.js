/* Field book clock: the log time, kept in the colophon. */
(function () {
  var el = document.getElementById("logtime");
  if (!el) return;
  function pad(n) { return n < 10 ? "0" + n : String(n); }
  function tick() {
    var d = new Date();
    el.textContent =
      pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds()) +
      " local, held at the porch";
  }
  tick();
  setInterval(tick, 1000);
})();
