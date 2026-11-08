// Small touches for the patent summary sheet.
(function () {
  // Re-stamp the PUBLISHED stamp if the reader clicks it — like the kiosk postmark.
  var stamp = document.querySelector(".stamp-pub");
  if (stamp) {
    stamp.addEventListener("click", function () {
      stamp.style.animation = "none";
      void stamp.offsetWidth; // reflow, so the animation restarts
      stamp.style.animation = "stampIn 0.5s both";
    });
  }

  // Count the claims and confirm them in the status line, the way the office does.
  var status = document.querySelector(".line-4 .mono");
  var claims = document.querySelectorAll(".claims-list li");
  if (status && claims.length) {
    status.textContent = status.textContent.replace(
      "GRANTED IN PART",
      "GRANTED IN PART · " + claims.length + " CLAIMS CONFIRMED"
    );
  }
})();
