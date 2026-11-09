(function () {
  var STORAGE_KEY = 'lf221-visitor-count';
  var startCount = 4721;
  var count = localStorage.getItem(STORAGE_KEY);
  if (count === null) {
    count = startCount;
    localStorage.setItem(STORAGE_KEY, count);
  } else {
    count = parseInt(count, 10) + 1;
    localStorage.setItem(STORAGE_KEY, count);
  }
  var el = document.getElementById('odometer');
  if (el) {
    el.textContent = String(count).padStart(6, '0');
  }

  var form = document.getElementById('shelf-sign');
  var list = document.getElementById('guestbook-entries');
  if (form && list) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var name = form.elements['visitor-name'].value.trim();
      var note = form.elements['shelf-note'].value.trim();
      if (!name || !note) {
        return;
      }
      var entry = document.createElement('div');
      entry.className = 'entry';
      entry.textContent = name + ': ' + note;
      list.insertBefore(entry, list.firstChild);
      form.reset();
    });
  }
})();
