/* FAQ No. 9 — the bench keeps its five minutes; the active question holds its number */
(function () {
  "use strict";

  // Bench countdown, 5:00, no deductions.
  var btn = document.getElementById("benchBtn");
  var clock = document.getElementById("benchClock");
  var timer = null;

  function fmt(s) {
    var m = Math.floor(s / 60);
    var r = s % 60;
    return m + ":" + (r < 10 ? "0" : "") + r;
  }

  function stop() {
    if (timer) { clearInterval(timer); timer = null; }
    clock.textContent = "--:--";
    btn.textContent = "Start the bench (5:00)";
  }

  if (btn && clock) {
    btn.addEventListener("click", function () {
      if (timer) { stop(); return; }
      var left = 300;
      clock.textContent = fmt(left);
      timer = setInterval(function () {
        left -= 1;
        if (left <= 0) {
          stop();
          clock.textContent = "5:00";
        } else {
          clock.textContent = fmt(left);
        }
      }, 1000);
    });
  }

  // Highlight the question the reader is currently beside.
  var items = Array.prototype.slice.call(document.querySelectorAll(".qa"));
  if (items.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          items.forEach(function (it) { it.classList.remove("active"); });
          e.target.classList.add("active");
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    items.forEach(function (it) { io.observe(it); });
  }
})();
