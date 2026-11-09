// The bar test at the King's Arms, Perth — self-marking pencil.
(function () {
  "use strict";

  var answers = [1, 0, 1, 1, 2]; // correct index per question
  var scoreEl = document.getElementById("quiz-score");
  var items = document.querySelectorAll("#quiz-list li");
  var answered = 0;
  var correct = 0;

  if (!scoreEl || !items.length) return;

  function refresh() {
    var note = "Pencil not yet touched. 0 of 5 answered.";
    if (answered > 0) {
      note = answered + " of 5 answered — " + correct + " in the gold hand.";
    }
    if (answered === 5) {
      if (correct === 5) {
        note = "5 of 5. The landlord will make out a second pour; the card keeps your name.";
      } else if (correct >= 3) {
        note = "3 or more, which is what the landlord calls &ldquo;in the frame.&rdquo; The card keeps your name anyway.";
      } else {
        note = "The painted door has a word for this: set in its view. Read the diary above and try the sheet again.";
      }
    }
    scoreEl.innerHTML = note;
  }

  items.forEach(function (li, qIndex) {
    var buttons = li.querySelectorAll(".opts button");
    buttons.forEach(function (btn, bIndex) {
      btn.addEventListener("click", function () {
        if (li.classList.contains("answered")) return;
        li.classList.add("answered");
        answered += 1;
        if (bIndex === answers[qIndex]) {
          btn.classList.add("correct");
          correct += 1;
        } else {
          btn.classList.add("wrong");
          buttons[answers[qIndex]].classList.add("correct");
        }
        refresh();
      });
    });
  });

  refresh();
})();
