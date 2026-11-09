document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.filter button');
  var rows = document.querySelectorAll('.inventory tbody tr');

  function setFilter(category) {
    buttons.forEach(function (button) {
      if (button.getAttribute('data-cat') === category) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
    rows.forEach(function (row) {
      if (category === 'all' || row.getAttribute('data-cat') === category) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      setFilter(button.getAttribute('data-cat'));
    });
  });
});
