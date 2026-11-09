/* The Trunkline Walk — marks each stage in hand as the reader passes it,
   and advances the thin route line at the top with the reading. */
(function () {
  var stages = Array.prototype.slice.call(document.querySelectorAll(".stage"));
  var progress = document.getElementById("route-progress");

  if (progress) {
    function advance() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      var done = max > 0 ? (window.scrollY / max) : 0;
      progress.style.width = (Math.min(done, 1) * 100).toFixed(1) + "%";
    }
    window.addEventListener("scroll", advance, { passive: true });
    window.addEventListener("resize", advance);
    advance();
  }

  if (stages.length && "IntersectionObserver" in window) {
    var seen = 0;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-hand");
          seen = Math.max(seen, stages.indexOf(entry.target) + 1);
        }
      });
    }, { threshold: 0.35 });
    stages.forEach(function (s) { io.observe(s); });
  } else {
    stages.forEach(function (s) { s.classList.add("in-hand"); });
  }
})();
