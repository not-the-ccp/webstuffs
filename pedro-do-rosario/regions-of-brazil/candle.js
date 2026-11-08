// One candle for each region — five in all, one per page load.
(function () {
  var candle = document.getElementById("candle");
  var button = document.getElementById("lightCandle");
  if (!candle || !button) return;

  // On each page load, one of the five regions' candles is already lit:
  // decided by the day, so the whole family burns in turn over five days.
  var litCount = 1 + ((Math.floor(Date.now() / 86400000)) % 5);
  if (litCount >= 2) candle.classList.add("lit");

  button.addEventListener("click", function () {
    candle.classList.toggle("lit");
    button.textContent = candle.classList.contains("lit")
      ? "Let it burn down"
      : "Light the memorial candle";
  });
})();
