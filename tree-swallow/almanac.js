// Field almanac: count the figures up once the almanac scrolls into view.
// The final values are already in the markup, so the page reads fine without this.
(function () {
  var items = document.querySelectorAll("#almanac [data-count]");
  if (!items.length || !("IntersectionObserver" in window)) return;
  var done = false;
  function run() {
    if (done) return;
    done = true;
    items.forEach(function (el) {
      var target = parseInt(el.getAttribute("data-count"), 10);
      var t0 = null, dur = 900;
      function step(ts) {
        if (t0 === null) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString("en-US");
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }
  new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { run(); obs.disconnect(); }
    });
  }, { threshold: 0.4 }).observe(document.getElementById("almanac"));
})();
