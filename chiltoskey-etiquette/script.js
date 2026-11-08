/* Reading progress bar, cedar to tanbark */
(function () {
  var bar = document.getElementById("progress");
  if (!bar) return;
  function update() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var y = window.scrollY || doc.scrollTop;
    var pct = max > 0 ? Math.min(100, (y / max) * 100) : 0;
    bar.style.width = pct + "%";
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
