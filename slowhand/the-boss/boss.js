/* FM-21, Chapter 9 — the tape meter.
   SIDE A is 23:56 long. The rule is do not flip.
   This meter advances one second of tape per second of watching.
   It will not finish in your lifetime, which is the point. */

(function () {
  "use strict";

  var SIDE_A_SECONDS = 23 * 60 + 56;
  var elapsed = 0;

  var bar = document.createElement("div");
  bar.className = "tape-meter";
  bar.setAttribute("role", "status");
  bar.innerHTML =
    '<button type="button" aria-label="Start the tape">Drop the needle</button>' +
    '<div class="meter-track"><div class="meter-fill"></div></div>' +
    '<span class="meter-label">SIDE A · 00:00 · DO NOT FLIP</span>';
  document.body.appendChild(bar);

  var btn = bar.querySelector("button");
  var fill = bar.querySelector(".meter-fill");
  var label = bar.querySelector(".meter-label");
  var timer = null;

  function fmt(n) {
    var m = Math.floor(n / 60);
    var s = n % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }

  function paint() {
    var pct = Math.min(100, (elapsed / SIDE_A_SECONDS) * 100);
    fill.style.width = pct + "%";
    label.textContent = "SIDE A · " + fmt(elapsed) +
      (pct >= 100 ? " · THE HUSH — DO NOT FLIP" : " · DO NOT FLIP");
    if (pct >= 100) {
      label.textContent = "THE HUSH — THE WHOLE POINT · DO NOT FLIP";
      stop();
    }
  }

  function start() {
    if (timer) return;
    btn.textContent = "Tape running";
    timer = setInterval(function () {
      elapsed += 1;
      paint();
    }, 1000);
  }

  function stop() {
    clearInterval(timer);
    timer = null;
    btn.textContent = "Drop the needle";
  }

  btn.addEventListener("click", function () {
    if (timer) { stop(); } else { start(); }
  });

  paint();
})();
