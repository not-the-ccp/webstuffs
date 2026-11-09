/* Standing FAQ No. 1 — the record stamps itself */
(function () {
  "use strict";

  var answers = document.querySelectorAll(".qa");
  answers.forEach(function (qa) {
    var answer = qa.querySelector(".a");
    if (!answer) return;
    answer.addEventListener("click", function () {
      qa.classList.toggle("stamped");
    });
    answer.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        qa.classList.toggle("stamped");
      }
    });
    answer.setAttribute("tabindex", "0");
  });

  // The weakened link, per the record, creaks a little at dawn.
  var weak = document.getElementById("weakened");
  if (weak) {
    weak.addEventListener("click", function () {
      weak.style.transition = "transform 0.3s";
      weak.style.transform = "rotate(18deg)";
      setTimeout(function () { weak.style.transform = ""; }, 450);
    });
  }
})();
