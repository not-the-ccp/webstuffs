/* Claim 1920-IB — small touches for the claim desk */
(function () {
  // Re-stamp the notice on click, as if the clerk pressed it again.
  var stamp = document.getElementById("claimStamp");
  if (stamp) {
    stamp.addEventListener("click", function () {
      stamp.style.animation = "none";
      void stamp.offsetWidth;
      stamp.style.animation = "stamp-in .6s ease-out both";
    });
    stamp.style.pointerEvents = "auto";
    stamp.style.cursor = "pointer";
  }

  // Underline the Tadeusi line the way a clerk would with a ruler.
  var quote = document.getElementById("tadeusi");
  if (quote) {
    quote.addEventListener("mouseenter", function () {
      quote.style.background = "#fdeecf";
    });
    quote.addEventListener("mouseleave", function () {
      quote.style.background = "#fff9e6";
    });
  }

  // A quiet day/night lamp for the basement: dim the room slightly after 18:00.
  var hour = new Date().getHours();
  if (hour >= 18 || hour < 9) {
    document.body.style.filter = "brightness(.88) sepia(.12)";
  }
})();
