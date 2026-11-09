/* Candling counter — the incubation clock at the foot of the record. */
(function () {
  var readout = document.getElementById("candle-readout");
  var candle = document.getElementById("candle");
  if (!readout || !candle) return;

  // Day of incubation, counted from the filing date of 30 March 2016,
  // cycling every 21 days, like the vessel itself.
  var filed = new Date(2016, 2, 30);
  var DAY_MS = 86400000;

  function tick() {
    var days = Math.floor((Date.now() - filed.getTime()) / DAY_MS);
    var day = ((days % 21) + 21) % 21;
    readout.textContent = "INCUBATION DAY " + day + " / 21 — HOLD THE VESSEL TO THE LIGHT";
  }

  tick();
  setInterval(tick, 60000);

  // Hovering the candle "lights" the record: a brief glow on the page.
  candle.addEventListener("mouseenter", function () {
    readout.classList.add("lit");
    document.body.style.transition = "background 400ms";
    document.body.style.filter = "brightness(1.04)";
  });
  candle.addEventListener("mouseleave", function () {
    readout.classList.remove("lit");
    document.body.style.filter = "";
  });
})();
