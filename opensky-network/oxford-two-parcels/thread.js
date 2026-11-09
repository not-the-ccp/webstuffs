// Board time for Thread No. 212 — the thread itself stands without it.
(function () {
  var el = document.getElementById("boardtime");
  if (!el) return;
  function stamp() {
    var d = new Date();
    function p(n) { return (n < 10 ? "0" : "") + n; }
    el.textContent = p(d.getDate()) + " " +
      ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][d.getMonth()] +
      " " + d.getFullYear() + ", " + p(d.getHours()) + ":" + p(d.getMinutes());
  }
  stamp();
  setInterval(stamp, 30000);
})();
