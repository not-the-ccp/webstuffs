// Notice 47B — the office claim test
(function () {
  var btn = document.getElementById("checkBtn");
  var scoreEl = document.getElementById("score");
  if (!btn || !scoreEl) return;

  var verdicts = {
    6: "Six of six. The claim is carried in full. The book is produced; sign in ink, not pencil.",
    5: "Five of six. The claim is carried. One mark off is allowed to a person who has been in the mud; the book is produced.",
    4: "Four of six. The office will hold a conversation before the book is produced. Bring ear as evidence.",
    low: "The claim is not carried at this sitting. The office recommends the geography report, the obituary, and a cuppa, in that order or otherwise."
  };

  btn.addEventListener("click", function () {
    var score = 0;
    var answered = 0;
    var total = 0;
    var buttons = document.querySelectorAll(".answers button");
    buttons.forEach(function (b) {
      b.classList.remove("correct", "wrong");
    });
    document.querySelectorAll(".questions li").forEach(function (li) {
      var correct = li.querySelector('button[data-correct="yes"]');
      if (correct) {
        total++;
        var clicked = li.querySelector("button[data-clicked]");
        if (clicked) {
          answered++;
          if (clicked === correct) score++;
          clicked.classList.add("wrong");
          correct.classList.add("correct");
        }
      }
    });
    if (answered === 0) {
      scoreEl.textContent = "Answer a question or six first, please. The book waits.";
      return;
    }
    if (answered < total) {
      scoreEl.textContent = "You have answered " + answered + " of " + total + ". A claim requires all six; the office is patient but the shelf is full.";
      return;
    }
    scoreEl.textContent = (score >= 4 ? verdicts[Math.min(score, 6)] : verdicts.low) + " — score " + score + " of 6.";
  });

  document.querySelectorAll(".answers button").forEach(function (b) {
    b.addEventListener("click", function () {
      var li = b.closest("li");
      li.querySelectorAll("button").forEach(function (x) { x.removeAttribute("data-clicked"); });
      b.setAttribute("data-clicked", "1");
      scoreEl.textContent = "";
    });
  });
})();
