/* The Mustard Walk — route rail fills as the reader walks down the sheet */
(function () {
  var fill = document.getElementById("route-fill");
  if (!fill) return;
  function update() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    fill.style.height = Math.max(0, Math.min(100, pct)).toFixed(2) + "%";
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
