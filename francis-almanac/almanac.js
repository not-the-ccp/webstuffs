// The Umbrian Almanac of Weathers — gauge fill on sight
(function () {
  "use strict";
  var max = 71; // the greatest reading of the record: La Verna, 1224
  function fill(row) {
    var g = row.querySelector(".gauge");
    if (!g || g.dataset.filled) return;
    var mm = parseInt(g.getAttribute("data-mm"), 10) || 0;
    var pct = Math.max(2, Math.round((mm / max) * 100));
    g.firstElementChild.style.width = pct + "%";
    g.dataset.filled = "1";
    g.title = mm + " mm";
  }
  function start() {
    var rows = document.querySelectorAll("table.readings tbody tr");
    if (!("IntersectionObserver" in window)) {
      rows.forEach(fill);
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          fill(e.target);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    rows.forEach(function (r) { obs.observe(r); });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
