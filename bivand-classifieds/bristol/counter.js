(function () {
  var countEl = document.getElementById('visitor-count');
  var form = document.getElementById('gb-form');
  var entries = document.getElementById('gb-entries');
  var key = 'bristol-gazetteer-visitors';
  var n = 1;
  try {
    n = (parseInt(localStorage.getItem(key), 10) || 0) + 1;
    localStorage.setItem(key, String(n));
  } catch (e) {}
  if (countEl) countEl.textContent = String(n).padStart(6, '0');

  if (form && entries) {
    form.addEventListener('click', function (e) {
      if (e.target && e.target.id === 'gb-btn') {
        var ta = document.getElementById('gb-text');
        var words = ta && ta.value.replace(/\s+/g, ' ').trim();
        if (!words) return;
        var p = document.createElement('p');
        p.className = 'gb-entry';
        p.textContent = words;
        entries.appendChild(p);
        ta.value = '';
      }
    });
  }
})();
