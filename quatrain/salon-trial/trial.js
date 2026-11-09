/* Consular Court transcript: lines entered in the clerk's hand, one at a time. */
(function () {
  var lines = document.querySelectorAll('#record .line');
  var seal = document.getElementById('seal');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduce && 'IntersectionObserver' in window) {
    var seen = new WeakSet();
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !seen.has(entry.target)) {
          seen.add(entry.target);
          entry.target.classList.add('shown');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    lines.forEach(function (line) { io.observe(line); });
  } else {
    lines.forEach(function (line) { line.classList.add('shown'); });
  }

  if (seal) {
    seal.addEventListener('click', function () {
      seal.classList.remove('stamped');
      void seal.offsetWidth;
      seal.classList.add('stamped');
    });
  }
})();
