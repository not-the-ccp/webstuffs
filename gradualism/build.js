/* The Gradual — build log. Click an entry heading to mark it the current sitting. */

(function () {
  var entries = document.querySelectorAll('article.entry');
  var current = null;

  entries.forEach(function (entry) {
    var heading = entry.querySelector('h2');
    heading.style.cursor = 'pointer';
    heading.addEventListener('click', function () {
      if (current === entry) {
        entry.classList.toggle('current');
        current = entry.classList.contains('current') ? entry : null;
        return;
      }
      if (current) {
        current.classList.remove('current');
      }
      entry.classList.add('current');
      current = entry;
    });
  });
})();
