/* The History Route — strip progress: marks stops as the group makes them */
(function () {
  var stops = Array.prototype.slice.call(document.querySelectorAll('main .stop'));
  var items = Array.prototype.slice.call(document.querySelectorAll('#strip ol li'));
  var countEl = document.getElementById('count');
  var barEl = document.getElementById('bar');

  function mark(index) {
    if (index < 0 || index >= items.length) return;
    items[index].classList.add('done');
    update();
  }

  function update() {
    var made = items.filter(function (li) { return li.classList.contains('done'); }).length;
    if (countEl) countEl.textContent = made;
    if (barEl) barEl.style.width = (made / items.length * 100) + '%';
  }

  // Clicking a stop on the strip makes it: smooth scroll + mark.
  items.forEach(function (li, i) {
    var a = li.querySelector('a');
    if (!a) return;
    a.addEventListener('click', function (e) {
      e.preventDefault();
      mark(i);
      var target = stops[i];
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', '#' + target.id);
    });
  });

  // A stop that reaches the top of the window counts as made.
  if ('IntersectionObserver' in window) {
    var seen = {};
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var i = stops.indexOf(entry.target);
        if (i > -1 && !seen[i]) {
          seen[i] = true;
          mark(i);
        }
      });
    }, { threshold: 0.6 });
    stops.forEach(function (s) { observer.observe(s); });
  }

  update();
})();
