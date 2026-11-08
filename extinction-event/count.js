/* Count the figures of the five up from the background rate, once each,
   the way the seep turns up. Without this file the figures stand still. */
(function () {
  var spans = Array.prototype.slice.call(document.querySelectorAll(".pct"));
  if (!spans.length || !("IntersectionObserver" in window)) return;

  function animate(el) {
    var target = parseInt(el.getAttribute("data-pct"), 10);
    if (isNaN(target)) return;
    var start = null;
    var duration = 900;
    function step(ts) {
      if (start === null) start = ts;
      var t = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased);
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  var seen = new Set();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !seen.has(entry.target)) {
        seen.add(entry.target);
        animate(entry.target);
      }
    });
  }, { threshold: 0.6 });
  spans.forEach(function (s) { observer.observe(s); });
})();
