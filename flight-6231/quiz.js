// Ground-school quiz, Form 9R — U.S. History, Period 4
(function () {
  var quiz = document.getElementById("quiz");
  if (!quiz) return;

  var scoreEl = document.getElementById(quiz.dataset.scoreId || "quiz-score");
  var answered = 0;

  quiz.addEventListener("click", function (ev) {
    var btn = ev.target.closest("button[data-opt]");
    if (!btn || btn.disabled) return;

    var item = btn.closest("li[data-answer]");
    var correct = item.dataset.answer === btn.dataset.opt;

    // lock this question
    item.querySelectorAll("button[data-opt]").forEach(function (b) {
      b.disabled = true;
      if (b.dataset.opt === item.dataset.answer) b.classList.add("right");
    });
    btn.classList.add(correct ? "right" : "wrong");
    if (correct) btn.classList.add("picked");

    answered += 1;
    var right = Array.prototype.filter.call(
      quiz.querySelectorAll("button.right[data-opt]"),
      function (b) { return b.classList.contains("picked") || b === btn; }
    ).length;

    if (answered === quiz.querySelectorAll("li[data-answer]").length && scoreEl) {
      var total = quiz.querySelectorAll("li[data-answer]").length;
      // recount properly: number of items whose picked option was correct
      right = Array.prototype.reduce.call(quiz.querySelectorAll("li[data-answer]"),
        function (sum, li) {
          return sum + (li.querySelector("button.picked.right") ? 1 : 0);
        }, 0);
      scoreEl.textContent = right === total
        ? "Score: " + right + " of " + total + " — the whole paper. Mr. Halvorsen has added the field day marks by estimate, which is unusual, and the term closes at nine."
        : "Score: " + right + " of " + total + ". The margin note reads: " + (right >= 3 ? "close enough to fly, re-check the heat." : "re-read paragraph two before the exam.");
      scoreEl.classList.add("done");
    }
  });
})();
