/* Form 3B — the end-of-term paper marks itself */
(function () {
  var btn = document.getElementById("mark-btn");
  var result = document.getElementById("result");
  if (!btn || !result) return;

  btn.addEventListener("click", function () {
    var fields = document.querySelectorAll("#quiz fieldset.q");
    var score = 0;
    var allAnswered = true;

    fields.forEach(function (fs) {
      fs.classList.remove("right", "wrong");
      var chosen = fs.querySelector("input:checked");
      if (!chosen) { allAnswered = false; return; }
      if (chosen.value === fs.dataset.answer) {
        score++;
        fs.classList.add("right");
      } else {
        fs.classList.add("wrong");
      }
    });

    if (!allAnswered) {
      result.textContent = "The paper is not complete. All five questions, closed book, as set on the last day.";
      return;
    }

    var remarks = [
      "Mark 0 of 5. The form is recalled to Room 214 at the end of the holiday.",
      "Mark 1 of 5. The 198,590 will be re-set, and so will the charter.",
      "Mark 2 of 5. Tolerable in the weather column; the burgh is still at loose ends.",
      "Mark 3 of 5. Fair. The part that holds, so far, is the patience.",
      "Mark 4 of 5. Good. One slip, noted in pencil, to be read twice.",
      "Mark 5 of 5. Pass. The register line above is now yours to keep."
    ];
    result.textContent = remarks[score];
  });
})();
