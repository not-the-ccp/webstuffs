/* Candle flicker: occasionally gutter the flame, like a real wick. */
(function () {
  var flame = document.querySelector(".flame");
  if (!flame || !flame.animate) return;
  setInterval(function () {
    if (Math.random() < 0.35) {
      flame.animate(
        [
          { opacity: 0.95, transform: "scale(1) rotate(0deg)" },
          { opacity: 0.4, transform: "scale(0.9, 0.8) rotate(4deg)" },
          { opacity: 0.25, transform: "scale(0.85, 0.7) rotate(-3deg)" },
          { opacity: 0.95, transform: "scale(1) rotate(0deg)" }
        ],
        { duration: 900, easing: "ease-in-out" }
      );
    }
  }, 4000);
})();
