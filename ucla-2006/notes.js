/* Notebook No. 13 — bench arithmetic: count the season up, from last year to this one. */
(function () {
  var tallies = document.querySelectorAll(".tally[data-from][data-to]");
  tallies.forEach(function (el) {
    var from = parseInt(el.getAttribute("data-from"), 10);
    var to = parseInt(el.getAttribute("data-to"), 10);
    if (isNaN(from) || isNaN(to) || from === to) return;
    var start = null;
    var dur = 1400;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(from + (to - from) * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            requestAnimationFrame(step);
            io.disconnect();
          }
        });
      }, { threshold: 0.6 });
      io.observe(el);
    } else {
      requestAnimationFrame(step);
    }
  });
})();
