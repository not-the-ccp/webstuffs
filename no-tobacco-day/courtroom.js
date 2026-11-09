/* Courtroom 3 — visitor counter and the standing-order blink */

(function () {
  // Visitor counter: starts at the year the observance was created.
  var counterEl = document.getElementById("counter");
  if (counterEl) {
    var count = 1987 + (new Date().getDate() * 13 + new Date().getMonth() * 7) % 913;
    counterEl.textContent = "You are visitor No. " +
      String(count).padStart(6, "0");
  }

  // Blinking standing order in the footer.
  var blinker = document.getElementById("blinker");
  if (blinker) {
    var on = true;
    setInterval(function () {
      on = !on;
      blinker.classList.toggle("on", on);
    }, 900);
  }
})();
