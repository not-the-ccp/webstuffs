// FM-21 small touches: revision stamp flickers when the page loads,
// and the serving rule (6.4) highlights the pruned quarter line briefly.
document.addEventListener("DOMContentLoaded", function () {
  var line = document.getElementById("stamp-line");
  if (!line) return;
  var original = line.textContent;
  line.textContent = "Rev. 3 — 1904 · FEED AGAIN";
  line.classList.add("flash");
  setTimeout(function () {
    line.textContent = original;
    line.classList.remove("flash");
  }, 2400);
});
