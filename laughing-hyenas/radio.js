/* Laughing Hyenas — a little studio light. Text is fully readable without this. */
(function () {
  // Randomise the waveform a touch so no two visits of the session match.
  var bars = document.querySelectorAll(".wave i");
  bars.forEach(function (bar) {
    var base = Math.random() * 0.6 + 0.25;
    bar.style.transform = "scaleY(" + base.toFixed(2) + ")";
    bar.style.animationDuration = (1.1 + Math.random() * 0.9).toFixed(2) + "s";
  });

  // When the page is not visible, the reels stop — the tape waits in the dark.
  document.addEventListener("visibilitychange", function () {
    var reels = document.querySelectorAll(".reel");
    reels.forEach(function (reel) {
      reel.style.animationPlayState = document.hidden ? "paused" : "running";
    });
  });
})();
