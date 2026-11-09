(function () {
  var list = document.getElementById('raid-timeline');
  var now = document.getElementById('tl-now');
  if (!list || !now) return;

  var picks = list.querySelectorAll('.tl-pick');
  picks.forEach(function (pick) {
    pick.addEventListener('click', function () {
      picks.forEach(function (other) {
        other.setAttribute('aria-pressed', 'false');
        other.classList.remove('tl-active');
      });
      pick.setAttribute('aria-pressed', 'true');
      pick.classList.add('tl-active');
      now.textContent = pick.getAttribute('data-time');
      pick.focus();
    });
    pick.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        pick.click();
      }
    });
  });
})();
