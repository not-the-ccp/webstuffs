/* Session clock for the transcript header: the hearing resumed at 10:15
   and adjourned at 12:03; the counter walks the room through that span,
   looping, purely as a record-keeping ornament. The text stands without it. */
(function () {
  var el = document.getElementById("recTime");
  if (!el) return;
  var start = 10 * 3600 + 15 * 60; // 10:15, seconds
  var end = 12 * 3600 + 3 * 60;    // 12:03
  var span = end - start;
  var t = 0;

  function fmt(s) {
    var h = Math.floor(s / 3600);
    var m = Math.floor((s % 3600) / 60);
    var ss = s % 60;
    var pad = function (n) { return (n < 10 ? "0" : "") + n; };
    return "DAY 3 · " + pad(h) + ":" + pad(m) + ":" + pad(ss);
  }

  setInterval(function () {
    t = (t + 1) % (span + 1);
    el.textContent = fmt(start + t);
  }, 1000);
})();
