// Entry MF-1958 — stagger the equalizer bars so they read as a groove,
// and keep one gold "chart spike" bar on the fourth beat.
(function () {
  var bars = document.querySelectorAll(".equalizer i");
  bars.forEach(function (bar, i) {
    bar.style.animationDelay = (i * 0.07) + "s";
    bar.style.animationDuration = (0.9 + (i % 5) * 0.12) + "s";
    if (i % 7 === 3) bar.style.background = "var(--gold)";
  });
})();
