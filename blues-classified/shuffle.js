/* The Blue Column — a twelve-bar shuffle for the meter under the masthead. */
(function () {
  var bars = document.querySelectorAll("#barMeter .bar");
  var btn = document.getElementById("shuffleBtn");
  if (!bars.length || !btn) return;

  // The common order: 1-4-5-1-6-12, drawn out as one bar per step.
  var order = [0, 3, 4, 0, 5, 11];
  var step = 0;
  var timer = null;

  function paint(n) {
    bars.forEach(function (b, i) {
      b.classList.toggle("on", i <= n);
    });
  }

  function tick() {
    var target = order[step % order.length];
    // walk by one bar at a time toward the target, round the ring
    var current = step === 0 ? -1 : order[(step - 1 + order.length) % order.length];
    var next = current + 1;
    if (next > 11) next = 0;
    paint(next);
    step += 1;
    if (next === 11) {
      // hold the turnaround a beat longer
      timer = setTimeout(tick, 620);
    } else {
      timer = setTimeout(tick, 340);
    }
  }

  btn.addEventListener("click", function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      btn.textContent = "play the shuffle";
      paint(3);
      return;
    }
    step = 0;
    paint(-1);
    btn.textContent = "stop it";
    timer = setTimeout(tick, 200);
  });
})();
