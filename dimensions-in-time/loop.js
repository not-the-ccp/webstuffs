// The VHS counter on the cover: it runs the loop.
// 5:15 is when the Rani's loop closes, so the counter stops there,
// hesitates, and begins again — the 26th and the 27th, forever.
(function () {
  var clock = document.getElementById("clock");
  var rec = document.getElementById("rec");
  if (!clock) return;
  rec.classList.add("blinking");

  var start = 17 * 3600 + 14 * 60; // 17:14:00, a minute out
  var stop = 17 * 3600 + 15 * 60;  // 17:15:00 — the loop's hour
  var t = start;
  clock.textContent = fmt(t);

  function fmt(n) {
    var h = Math.floor(n / 3600), m = Math.floor((n % 3600) / 60), s = n % 60;
    return String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }

  function tick() {
    t++;
    if (t >= stop) {
      // the loop closes: hold the hour, then rewind to the start
      t = stop;
      setTimeout(function () {
        t = start - 1;
        clock.style.color = "#b3402e";
        setTimeout(function () { clock.style.color = ""; }, 600);
      }, 1200);
    }
    clock.textContent = fmt(t);
    setTimeout(tick, 1000);
  }
  setTimeout(tick, 1000);
})();
