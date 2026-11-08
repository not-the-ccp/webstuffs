/* In re the Men's 20 km Racewalk Quota — folio touches.
   The transcript reads perfectly without this script; it only lets a reader
   mark a line in red ink, as the arbitrator did with her pencil. */
(function () {
  var lines = document.querySelectorAll(".record .line");
  lines.forEach(function (line) {
    line.style.cursor = "pointer";
    line.title = "Click to mark this line in the ink";
    line.addEventListener("click", function () {
      line.classList.toggle("inked");
    });
  });

  // A gentle fade of the whole folio, so the page arrives like paper being laid down.
  var wrap = document.querySelector(".folio-wrap");
  if (wrap && !window.matchMedia || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    wrap.style.opacity = "0";
    wrap.style.transform = "translateY(6px)";
    wrap.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        wrap.style.opacity = "1";
        wrap.style.transform = "none";
      });
    });
  }
})();
