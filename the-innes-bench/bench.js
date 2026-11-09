// The Innes Bench, No. 41 — the February quiz, kept in the green ledger
(function () {
  var score = 0;
  var answered = 0;
  var total = 5;
  var scoreLine = document.getElementById("quiz-score");

  function mark(text) {
    if (!scoreLine) return;
    if (answered < total) {
      scoreLine.textContent = "Score: " + answered + " of " + total +
        " answered · " + score + " correct";
    } else {
      scoreLine.textContent = "Score: " + score + " of " + total + " · " +
        (score === 5 ? "the cassis is on the bench, member." :
         score === 4 ? "four out of five: the chair is kept." :
         "the bench reads you the answers again at the March meeting.");
    }
  }

  var buttons = document.querySelectorAll("#quiz button[data-q]");
  Array.prototype.forEach.call(buttons, function (btn) {
    btn.addEventListener("click", function () {
      var q = btn.getAttribute("data-q");
      var group = document.querySelectorAll('#quiz button[data-q="' + q + '"]');
      Array.prototype.forEach.call(group, function (b) { b.disabled = true; });
      if (btn.getAttribute("data-a") === "b") {
        btn.classList.add("chosen-right");
        score += 1;
      } else {
        btn.classList.add("chosen-wrong");
        Array.prototype.forEach.call(group, function (b) {
          if (b.getAttribute("data-a") === "b") b.classList.add("chosen-right");
        });
      }
      answered += 1;
      mark();
    });
  });

  mark();
})();
