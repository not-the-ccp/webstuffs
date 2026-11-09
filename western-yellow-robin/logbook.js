// The 06:40 line: the department's rule is that it is kept, not explained.
// A click marks it the way the pencil marks a page. The page is fully
// readable without this script; the mark is only for the candidate.
(function () {
  var line = document.getElementById("oddline");
  if (!line) return;
  var marked = false;
  line.style.cursor = "pointer";
  line.title = "The 06:40 line, from Miss Anstead's logbook";
  line.addEventListener("click", function () {
    marked = !marked;
    line.classList.toggle("marked", marked);
  });
})();
