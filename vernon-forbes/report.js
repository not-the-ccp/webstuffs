// Red-ink mark: one press, then it stands, like a precedent.
(function () {
  var btn = document.getElementById("stampBtn");
  var grade = document.getElementById("grade");
  var specimen = document.getElementById("specimen");
  var pressed = false;

  if (btn && grade) {
    btn.addEventListener("click", function () {
      if (!pressed) {
        pressed = true;
        grade.classList.add("stamped");
        btn.textContent = "marked 21 March — stands";
        btn.disabled = true;
      }
    });
  }

  // Touching the pencil line lights it, the way the desk lights the tin.
  if (specimen) {
    specimen.addEventListener("click", function () {
      specimen.classList.toggle("lit");
    });
  }
})();
