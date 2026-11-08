/* Small interactive touch: claim-stamp the found tin box on click. */
(function () {
  var found = document.querySelector('.ad--found');
  if (!found) return;

  var stamp = document.createElement('div');
  stamp.className = 'claim-stamp';
  stamp.textContent = 'HELD — No. 114';
  found.setAttribute('tabindex', '0');
  found.setAttribute('role', 'button');
  found.setAttribute('aria-label', 'Press to stamp the lost-and-found entry No. 114');
  found.appendChild(stamp);

  function stampIt() {
    stamp.classList.remove('stamped');
    // reflow so the animation replays
    void stamp.offsetWidth;
    stamp.classList.add('stamped');
  }

  found.addEventListener('click', stampIt);
  found.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      stampIt();
    }
  });
})();
