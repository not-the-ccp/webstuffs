// Term report: click the mark to turn over the correction stamp.
document.addEventListener("DOMContentLoaded", function () {
  var mark = document.getElementById("mark");
  var corr = document.getElementById("corr");
  if (!mark || !corr) return;
  mark.addEventListener("click", function () {
    corr.classList.toggle("show");
    mark.style.transform = corr.classList.contains("show") ? "rotate(-4deg)" : "";
  });
});
