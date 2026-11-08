// Count the forks up, one at a time, like the bill settling.
(function () {
  var forks = document.getElementById("forks");
  var grade = document.getElementById("grade");
  if (!forks) return;
  var count = parseInt(forks.getAttribute("data-count"), 10) || 0;
  var max = 5;
  var shown = 0;
  var timer = setInterval(function () {
    shown += 1;
    forks.textContent =
      "▲".repeat(shown) + "▽".repeat(max - shown);
    if (shown >= max) {
      clearInterval(timer);
      if (grade) {
        grade.textContent = "marked by the house, not the paper";
      }
    }
  }, 260);
})();
