/* The Steward's Check — a small working check for Annex B.
   The page reads fully without this; it only offers the flip and a score line. */
(function () {
  var list = document.getElementById("quizlist");
  var answers = document.getElementById("answers");
  var line = document.getElementById("scoreline");
  if (!list || !line) return;

  var btn = document.createElement("button");
  btn.id = "stewardcheck";
  btn.type = "button";
  btn.textContent = "Run the Steward's Check";
  list.style.listStyle = "none";
  list.style.paddingLeft = "0.2rem";
  list.appendChild(btn);

  var shown = false;
  btn.addEventListener("click", function () {
    shown = !shown;
    if (answers) answers.hidden = !shown;
    if (shown) {
      btn.textContent = "Hide the Answers";
      line.textContent = "Answers showing. The steward does not mark the chalk line.";
    } else {
      btn.textContent = "Run the Steward's Check";
      line.textContent = "";
    }
  });
})();
