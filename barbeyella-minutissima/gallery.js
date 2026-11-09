/* Case 9 gallery touches — the text is all readable without this. */

(function () {
  var counterEl = document.getElementById('counter');
  if (counterEl) {
    var target = 12037 + new Date().getDate();
    var n = 0;
    var step = Math.max(1, Math.floor(target / 60));
    var timer = setInterval(function () {
      n += step;
      if (n >= target) { n = target; clearInterval(timer); }
      counterEl.textContent = String(n).padStart(7, '0');
    }, 30);
  }

  var form = document.getElementById('sign-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = document.getElementById('sign-name');
      var name = (input.value || '').trim();
      if (!name) { return; }
      var list = document.getElementById('signatures');
      var li = document.createElement('li');
      var span = document.createElement('span');
      span.className = 'who';
      span.textContent = name;
      li.appendChild(span);
      li.appendChild(document.createTextNode(' signs at the loupe window. The lobes are open tonight.'));
      list.appendChild(li);
      list.scrollTop = list.scrollHeight;
      input.value = '';
    });
  }
})();
