/* The Perplexa — tide meter: lights the six shore tiles in and out. */
(function () {
  var list = document.createElement('ul');
  list.id = 'tide-meter';
  list.setAttribute('aria-hidden', 'true');
  for (var i = 0; i < 6; i++) list.appendChild(document.createElement('li'));

  var label = document.createElement('p');
  label.id = 'tide-label';
  label.textContent = 'tideline — ebb';

  var header = document.querySelector('.cover');
  header.appendChild(list);
  header.appendChild(label);

  var tiles = list.children;
  var lit = 0;
  var ebbing = true;

  function step() {
    if (ebbing) {
      if (lit > 0) {
        tiles[--lit].classList.remove('lit');
      } else {
        ebbing = false;
        label.textContent = 'tideline — flood';
      }
    } else {
      if (lit < tiles.length) {
        tiles[lit++].classList.add('lit');
      } else {
        ebbing = true;
        label.textContent = 'tideline — ebb';
      }
    }
    setTimeout(step, 900);
  }

  tiles[0].classList.add('lit');
  setTimeout(step, 900);
})();
