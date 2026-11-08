// Thread 214 — a line of ink that fills as the reader descends the thread.
(function () {
  var line = document.getElementById("inkline");
  if (!line) return;
  function paint() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    line.style.width = pct.toFixed(1) + "%";
  }
  window.addEventListener("scroll", paint, { passive: true });
  window.addEventListener("resize", paint);
  paint();
})();
