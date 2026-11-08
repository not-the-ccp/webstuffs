/* Chapter XIV — the ink bar traces the reader's progress through the chapter */
(function () {
  var bar = document.getElementById("inkbar");
  var page = document.getElementById("page");
  if (!bar || !page) return;
  function trace() {
    var rect = page.getBoundingClientRect();
    var total = rect.height - window.innerHeight;
    var passed = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
    bar.style.width = (total > 0 ? (passed / total) * 100 : 100) + "%";
  }
  window.addEventListener("scroll", trace, { passive: true });
  window.addEventListener("resize", trace);
  trace();
})();
