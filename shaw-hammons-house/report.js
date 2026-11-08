// Small interactive touch: the "grade" stamp updates when the page has
// settled, and the crest gently tilts on hover.
document.addEventListener("DOMContentLoaded", function () {
  var grade = document.getElementById("grade");
  if (grade) {
    setTimeout(function () {
      grade.textContent = "B+ — see me re: the album";
    }, 1800);
  }
  var crest = document.querySelector(".crest svg");
  if (crest) {
    crest.addEventListener("mouseenter", function () {
      crest.style.transition = "transform 0.4s ease";
      crest.style.transform = "rotate(-6deg)";
    });
    crest.addEventListener("mouseleave", function () {
      crest.style.transform = "rotate(0deg)";
    });
  }
});
