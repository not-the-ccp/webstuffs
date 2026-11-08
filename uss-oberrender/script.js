// Oberrender — the plate desk: totals the ticked courses and the course clock.
(function () {
  var table = document.getElementById('menu');
  var desk = document.getElementById('desk');
  if (!table || !desk) return;

  var FULL_MENU = 78;

  function update() {
    var total = 0;
    var minutes = 0;
    var count = 0;
    var rows = table.querySelectorAll('tbody tr');

    for (var i = 0; i < rows.length; i++) {
      var box = rows[i].querySelector('input[type="checkbox"]');
      if (box && box.checked) {
        total += parseInt(rows[i].getAttribute('data-price'), 10);
        minutes += parseInt(rows[i].getAttribute('data-minutes'), 10);
        count++;
        rows[i].classList.add('selected');
      } else {
        rows[i].classList.remove('selected');
      }
    }

    if (count === 0) {
      desk.textContent = 'Nothing ticked yet — the desk is open and the chowder clock is running. Full manifest, $78, served as one seating.';
      desk.className = 'desk';
      return;
    }

    var diff = FULL_MENU - total;
    var line = count + ' course' + (count > 1 ? 's' : '') + ', $' + total + ' at the desk, ' + minutes + ' minutes on the course clock.';
    if (diff > 0) {
      line += ' The full manifest at $78 still has room for $' + diff + ' more, and the tower is patient.';
    } else if (diff === 0) {
      line += ' That is the whole manifest — the bells will ring it.';
    } else {
      line += ' You are $' + (-diff) + ' over the flat manifest; the room will not stop you, but Pell would.';
    }
    desk.textContent = line;
    desk.className = 'desk total';
  }

  table.addEventListener('change', update);
  update();
})();
