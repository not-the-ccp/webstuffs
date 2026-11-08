// Field-notes touches: log time, entry reveals, animated heading underlines.
(function () {
  "use strict";

  var clock = document.getElementById("field-time");
  if (clock) {
    function two(n) { return String(n).padStart(2, "0"); }
    function tick() {
      var d = new Date();
      clock.textContent = "Field time " +
        d.getFullYear() + "-" + two(d.getMonth() + 1) + "-" + two(d.getDate()) +
        " · " + two(d.getHours()) + ":" + two(d.getMinutes()) + ":" + two(d.getSeconds());
    }
    tick();
    setInterval(tick, 1000);
  }

  // Reveal entries and draw the heading ink-line when they scroll into view.
  if ("IntersectionObserver" in window) {
    var entries = document.querySelectorAll(".entry");
    var io = new IntersectionObserver(function (batch) {
      batch.forEach(function (hit) {
        if (hit.isIntersecting) {
          hit.target.classList.add("in-view");
          io.unobserve(hit.target);
        }
      });
    }, { threshold: 0.15 });
    entries.forEach(function (e) { io.observe(e); });
  }
})();
