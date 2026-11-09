// Card No. 9 — a quiet touch for the almanac line:
// the score "2–0" is written in, stroke by stroke, when it scrolls into view.
(function () {
  "use strict";

  var line = document.querySelector("blockquote.found-line");
  if (!line) return;

  var score = document.createElement("span");
  score.className = "score-annotation";
  score.textContent = "30 May 1999 · 2–0 · the tin kept";
  score.style.display = "block";
  score.style.marginTop = "0.7rem";
  score.style.fontFamily = '"Caveat", cursive';
  score.style.fontSize = "1.15rem";
  score.style.color = "#a33a2a";
  score.style.opacity = "0";
  score.style.transition = "opacity 1.2s ease";
  line.appendChild(score);

  function reveal() {
    score.style.opacity = "1";
  }

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          reveal();
          io.disconnect();
        }
      });
    }, { threshold: 0.6 });
    io.observe(line);
  } else {
    reveal();
  }
})();
