// Small touches for the US 11W route-journal FAQ.
// The page reads fully without this script.
(function () {
  "use strict";

  // A little odometer in the masthead: counts the route's miles as the
  // page loads, one digit at a time, then rests at 158.
  var tagline = document.querySelector(".masthead-tagline");
  if (!tagline) return;

  var MILES = 158;
  var span = document.createElement("span");
  span.className = "odometer";
  span.setAttribute("aria-hidden", "true");
  var counter = 0;
  var timer = window.setInterval(function () {
    counter += 4;
    if (counter >= MILES) {
      counter = MILES;
      window.clearInterval(timer);
      span.style.opacity = "0.85";
    }
    span.textContent = "· post " + counter;
  }, 55);
  span.style.opacity = "0";
  span.style.transition = "opacity 0.6s ease";
  tagline.appendChild(document.createTextNode(" "));
  tagline.appendChild(span);

  // Clicking the shield returns to the top, the way a milepost points home.
  var shield = document.querySelector(".shield");
  if (shield) {
    shield.style.cursor = "pointer";
    shield.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
