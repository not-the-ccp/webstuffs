// Small touches for the report page: date the entry header and ease
// the ruling in. The full report reads fine with scripting off.
(function () {
  "use strict";

  var paper = document.getElementById("paper");
  if (!paper) return;

  // Type the entry date in, one character at a time, like a typist's.
  var typed = [
    "Subject: Music History, Period 4",
    "Pupil: Dale R. Whitmore, Desk 17",
    "Teacher: Miss Harriet K. Boone",
    "Date of entry: 14 April 1957"
  ];
  var metas = document.querySelectorAll(".meta span");
  if (metas.length === typed.length) {
    metas.forEach(function (el, i) {
      var full = typed[i];
      el.textContent = "";
      var n = 0;
      var t = setInterval(function () {
        n += 1 + Math.floor(Math.random() * 2);
        if (n >= full.length) {
          el.textContent = full;
          clearInterval(t);
        } else {
          el.textContent = full.slice(0, n);
        }
      }, 14 + i * 3);
    });
  }

  // A faint pencil wobble on hover, kept so light it reads as paper grain.
  paper.addEventListener("mousemove", function (e) {
    var r = paper.getBoundingClientRect();
    var x = (e.clientX - r.left) / r.width - 0.5;
    paper.style.setProperty("--wobble", x.toFixed(3));
  });
})();
