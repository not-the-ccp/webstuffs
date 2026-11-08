/* The Mediterranean v. Octavianus — reveal the record line by line */
(function () {
  var root = document.documentElement;
  root.classList.add('js');

  var turns = Array.prototype.slice.call(document.querySelectorAll('.turn'));

  // staggered reveal as the reader scrolls
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          el.classList.add('shown');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.15 });
    turns.forEach(function (t) { io.observe(t); });
  } else {
    turns.forEach(function (t) { t.classList.add('shown'); });
  }
})();
