// The Gif — draw the next line number to be read.
(function () {
  var TOTAL = 3182;      // alliterative lines in the Nowell Codex
  var READ = 1411;       // the Society's count for the winter
  var button = document.getElementById("next-line");
  var result = document.getElementById("next-line-result");
  var strong = document.getElementById("lines-read");
  if (!button || !result) return;

  function fmt(n) {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  button.addEventListener("click", function () {
    // The next line is always the first unread one; the draw is
    // only for the ceremony, and the count only ever goes up.
    if (READ < TOTAL) READ = READ + 1;
    if (strong) strong.textContent = fmt(READ - 1);
    result.innerHTML = "Next line to be read at the winter&rsquo;s next meeting: <strong>" +
      fmt(READ) + "</strong>.";
  });
})();
