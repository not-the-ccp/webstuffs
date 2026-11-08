// FM-7 Chapter 9 — count clock: a small animated touch, text stays readable without it.
(function () {
  var start = 19 * 60 + 42; // count begins 19:42
  var end = 26 * 60 + 15;   // ends 02:15 the next morning
  var out = document.querySelector(".count-table caption");
  if (!out) return;

  var t = start;
  var timer = setInterval(function () {
    t += 37; // one ward every 37 "compressed" seconds of real time
    if (t > end) {
      t = end;
      clearInterval(timer);
    }
    var h = Math.floor(t / 60) % 24;
    var m = t % 60;
    out.textContent = "The struck return, 6 May 1994 — count clock " +
      String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0");
  }, 900);
})();
