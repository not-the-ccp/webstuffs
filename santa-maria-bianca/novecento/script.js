/* The Mirenolese Table — small touches for the Novecento review */
(function () {
  var bells = document.getElementById("bells");
  if (!bells) return;

  // Ring the bells again when pressed, one at a time.
  bells.addEventListener("click", function () {
    var spans = bells.querySelectorAll(".bell");
    spans.forEach(function (b, i) {
      b.classList.remove("ringing");
      b.style.animation = "none";
      // force reflow, then re-run the ring animation with a delay
      void b.offsetWidth;
      b.style.animation = "ring 0.5s ease " + (i * 0.15) + "s";
    });
  });

  // The reel above the pass: one slow turn per service.
  var reel = document.querySelector(".plate .reel");
  if (reel) {
    reel.addEventListener("click", function () {
      reel.style.animationDuration = "2.5s";
      setTimeout(function () { reel.style.animationDuration = "9s"; }, 3000);
    });
  }
})();
