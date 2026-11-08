// Rádio Maré 96.4 — a small touch for the broadcast excerpt.
// Without this script the page reads exactly as printed.
(function () {
  var lamp = document.getElementById('lamp');
  if (!lamp) return;
  var on = true;
  lamp.addEventListener('click', function () {
    on = !on;
    lamp.style.color = on ? '' : '#5b6b78';
    lamp.style.borderColor = on ? '' : '#5b6b78';
    lamp.style.boxShadow = on
      ? ''
      : 'none';
    if (!on) {
      lamp.querySelector('span').style.opacity = '0.4';
      lamp.querySelector('span').style.animation = 'none';
    } else {
      lamp.querySelector('span').style.opacity = '';
      lamp.querySelector('span').style.animation = '';
    }
  });
})();
