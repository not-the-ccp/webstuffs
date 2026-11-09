document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  var lamp = document.querySelector('.lamp');
  if (!lamp) {
    return;
  }
  var lit = false;
  lamp.addEventListener('click', function () {
    lit = !lit;
    lamp.classList.toggle('lit', lit);
    lamp.title = lit ? 'Harbour lamp — lit.' : 'Harbour lamp — dark.';
  });
});
