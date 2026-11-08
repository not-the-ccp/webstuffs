/* The page settles into ink on load; the margin cross wets if hovered. */
(function () {
  var paper = document.getElementById("paper");
  if (!paper) return;
  requestAnimationFrame(function () {
    paper.classList.add("inked");
  });

  var stamp = document.getElementById("date-stamp");
  if (stamp) {
    stamp.addEventListener("mouseenter", function () {
      stamp.style.transform = "rotate(0deg)";
    });
    stamp.addEventListener("mouseleave", function () {
      stamp.style.transform = "rotate(-1.6deg)";
    });
  }
})();
