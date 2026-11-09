// The Dialling Compendium — a touch of dialling.
// Ticks the visitor counter by one, and gives the "000000" box a soft blink.

document.addEventListener("DOMContentLoaded", function () {
  var digits = document.querySelectorAll(".counter-digits span");
  if (digits.length) {
    setInterval(function () {
      var last = digits[digits.length - 1];
      var n = (parseInt(last.textContent, 10) + 1) % 10;
      last.textContent = n;
    }, 7000);
  }
});
