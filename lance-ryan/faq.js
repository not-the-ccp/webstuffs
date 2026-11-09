// The Prompt Book: the desk's six questions, kept as a running total.
(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll(".questions li"));
  var scoreEl = document.getElementById("score");
  var noteEl = document.getElementById("ledger-note");
  var answered = 0;
  var score = 0;

  items.forEach(function (li) {
    var answer = li.getAttribute("data-answer");
    var buttons = Array.prototype.slice.call(li.querySelectorAll("button"));

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (li.classList.contains("done")) return;
        li.classList.add("done");

        if (btn.textContent.trim() === answer) {
          btn.classList.add("correct");
          score += 1;
        } else {
          btn.classList.add("wrong");
          buttons.forEach(function (b) {
            if (b.textContent.trim() === answer) b.classList.add("correct");
          });
        }
        buttons.forEach(function (b) { b.disabled = true; });

        answered += 1;
        scoreEl.textContent = String(score);

        if (answered === items.length) {
          noteEl.hidden = false;
          if (score === items.length) {
            noteEl.textContent = "Six of six. The desk thanks you, and the ledger stands where it stands: 131, and unknown. No one can count the line again, please.";
          } else {
            noteEl.textContent = "The book keeps your total and says nothing about it. The ledger, meanwhile, stands where it stands: 131, and unknown. No one can count the line again, please.";
          }
        }
      });
    });
  });
})();
