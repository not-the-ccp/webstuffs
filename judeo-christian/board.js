/* Redlands Bulletin Board — the bench at Stop 4, five minutes at the least */
(function () {
  var btn = document.getElementById("benchBtn");
  var clock = document.getElementById("benchClock");
  var odo = document.getElementById("odo");
  if (!btn || !clock) return;

  var remaining = 300;
  var timer = null;

  function render() {
    var m = Math.floor(remaining / 60);
    var s = remaining % 60;
    clock.textContent = m + ":" + (s < 10 ? "0" : "") + s;
  }

  function stop() {
    if (timer) { clearInterval(timer); timer = null; }
    clock.classList.remove("running");
    btn.textContent = "Start the bench (5:00)";
  }

  btn.addEventListener("click", function () {
    if (timer) { stop(); return; }
    remaining = 300;
    render();
    clock.classList.add("running");
    btn.textContent = "Leave the bench";
    timer = setInterval(function () {
      remaining -= 1;
      render();
      if (remaining <= 0) {
        stop();
        odo.textContent = "five minutes, full, and deducted none \u2014 counted as oranges";
      }
    }, 1000);
  });
})();
