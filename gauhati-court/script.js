/* The Gauhati High Court — service bell. Pure garnish; the review reads fine without it. */
(function () {
  var bell = document.getElementById("bell");
  var count = document.getElementById("bell-count");
  if (!bell || !count) return;

  var rings = 0;
  var phrases = [
    "Ring once: the fish morel is on its way.",
    "Ring twice: the Mizoram Room is asking about your banana leaf.",
    "Ring thrice: the cake comes out at the 4th of Sha\u2019ban, no earlier.",
    "The family will not say what happens on the fourth ring. Try it."
  ];

  bell.addEventListener("click", function () {
    rings += 1;
    bell.classList.remove("ringing");
    /* restart the animation */
    void bell.offsetWidth;
    bell.classList.add("ringing");

    if (rings <= phrases.length) {
      count.textContent = phrases[rings - 1];
    } else {
      count.textContent = "Rings counted: " + rings + ". The counter is now on the house's time, not yours.";
    }
  });
})();
