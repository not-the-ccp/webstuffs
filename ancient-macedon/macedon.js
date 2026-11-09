// The Count at Emathia Cross — the book tallied 109 riders in winter 1811.
// The desk keeps the count unlocked: it climbs from the first winter's
// first rider to the keeper's final number, then rests.

(function () {
  "use strict";

  var el = document.getElementById("count");
  if (!el) return;

  var TARGET = 109;
  var value = 0;
  var done = false;

  function finish() {
    done = true;
    value = TARGET;
    paint();
  }

  function paint() {
    el.textContent = String(value);
    el.classList.remove("bump");
    // retrigger the little scale pop
    void el.offsetWidth;
    el.classList.add("bump");
  }

  function step() {
    if (done) return;
    value += 1;
    if (value >= TARGET) { finish(); return; }
    paint();
    // irregular pauses, like a rider arriving mid-argument with the postmaster
    var pause = 90 + Math.random() * 240;
    if (value % 7 === 0) pause += 420;
    window.setTimeout(step, pause);
  }

  if ("IntersectionObserver" in window) {
    var seen = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !seen) {
          seen = true;
          window.setTimeout(step, 400);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
  } else {
    window.setTimeout(step, 600);
  }
})();
