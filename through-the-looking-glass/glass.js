/* Through the Looking Glass — travel desk touches.
   Purely decorative; the page reads fine without it. */

(function () {
  "use strict";

  // Visitor counter: nudge the last digit at low water (page load).
  var digit = document.getElementById("live-digit");
  if (digit) {
    var n = 2;
    setInterval(function () {
      n = (n + 1) % 10;
      digit.textContent = n;
    }, 7000);
  }

  // The masthead title glows like the counter lamp, one flicker at a time.
  var title = document.querySelector("h1");
  if (title) {
    var flicker = ["#ffffff", "#c0c0c0", "#ffffff", "#e0e0e0", "#ffffff"];
    var i = 0;
    setInterval(function () {
      title.style.color = flicker[i % flicker.length];
      i++;
    }, 1400);
  }
})();
