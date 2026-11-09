// The Coopers' Lane Noticeboard, Entry 23B — a candle at the spring.
(function () {
  var button = document.getElementById("candle");
  var count = document.getElementById("count");
  if (!button || !count) return;
  var n = 0;
  button.addEventListener("click", function () {
    n += 1;
    button.classList.add("lit");
    count.textContent =
      n === 1
        ? "One candle at the spring."
        : n + " candles at the spring; the water is still warm.";
  });
})();
