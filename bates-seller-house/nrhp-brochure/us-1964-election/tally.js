(function () {
  var table = document.getElementById('certified-return');
  if (!table) return;
  document.documentElement.classList.add('js');

  var rows = table.querySelectorAll('tbody tr');
  var totJ = document.getElementById('tot-j');
  var totG = document.getElementById('tot-g');
  var totU = document.getElementById('tot-u');
  var order = ['j', 'g', 'u'];
  var label = { j: 'Johnson', g: 'Goldwater', u: '\u2014' };

  function render() {
    var j = 0, g = 0, u = 0;
    rows.forEach(function (row) {
      var cell = row.querySelector('td:last-child');
      var ev = parseInt(row.getAttribute('data-ev'), 10) || 0;
      var key = row.dataset.pick || row.getAttribute('data-winner');
      var buttons = cell.querySelectorAll('button');
      buttons.forEach(function (b) {
        var active = b.dataset.key === key;
        b.classList.toggle('active', active);
        b.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      row.querySelector('.certified').style.display = 'none';
      if (key === 'j') j += ev; else if (key === 'g') g += ev; else u += ev;
    });
    totJ.textContent = j;
    totG.textContent = g;
    totU.textContent = u;
  }

  rows.forEach(function (row) {
    var cell = row.querySelector('td:last-child');
    row.dataset.pick = row.getAttribute('data-winner');
    order.forEach(function (key) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'pick';
      b.dataset.key = key;
      b.textContent = label[key];
      b.addEventListener('click', function () {
        var cur = row.dataset.pick;
        var next = order[(order.indexOf(cur) + 1) % 3];
        row.dataset.pick = next;
        render();
      });
      cell.appendChild(b);
    });
  });

  var reset = document.getElementById('tally-reset');
  if (reset) {
    reset.addEventListener('click', function () {
      rows.forEach(function (row) {
        row.dataset.pick = row.getAttribute('data-winner');
      });
      render();
    });
  }

  render();
})();
