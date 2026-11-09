// The Kew Loop — timecode and lap board
(function () {
  var tc = document.getElementById("tc");
  var lb = document.getElementById("lb");
  if (!tc || !lb) return;

  // Timecode runs from the gun: 11:02:00
  var t = 11 * 3600 + 2 * 60;
  function fmt(s) {
    var h = Math.floor(s / 3600) % 24;
    var m = Math.floor((s % 3600) / 60);
    var x = s % 60;
    function p(n) { return (n < 10 ? "0" : "") + n; }
    return p(h) + ":" + p(m) + ":" + p(x);
  }
  setInterval(function () {
    t += 1;
    tc.textContent = fmt(t);
  }, 1000);

  // The lap board turns its numbers, one lap at a time, 1 through 8,
  // and stops at 6 — where, in the record, it was last seen.
  var lap = 1;
  setInterval(function () {
    if (lap < 6) lap += 1;
    lb.textContent = lap;
  }, 4000);
})();
