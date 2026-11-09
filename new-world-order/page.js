(function () {
  var colophon = document.querySelector('.colophon');
  if (!colophon) return;
  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'lamp';
  button.textContent = 'Lower the lamps';
  colophon.appendChild(button);
  button.addEventListener('click', function () {
    var low = document.body.classList.toggle('lamps-low');
    button.textContent = low ? 'Raise the lamps' : 'Lower the lamps';
  });
})();
