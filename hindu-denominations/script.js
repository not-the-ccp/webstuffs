/* Field Desk 9 — interactive touches. Text stays readable without this script. */

(function () {
  var lamp = document.getElementById('lamp');
  var lit = false;

  if (lamp) {
    lamp.addEventListener('click', function () {
      lit = !lit;
      lamp.setAttribute('aria-pressed', String(lit));
      lamp.classList.toggle('lit', lit);
    });
    lamp.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        lamp.click();
      }
    });
  }

  var colours = ['#c0392b', '#e87a0c', '#f4b41a', '#b98a1c', '#7a1f1f'];
  var count = 14;

  for (var i = 0; i < count; i++) {
    var petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.background = colours[i % colours.length];
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.top = Math.random() * 100 + 'vh';
    petal.style.animationDuration = (12 + Math.random() * 24) + 's';
    petal.style.animationDelay = (Math.random() * 20) + 's';
    petal.style.transform = 'scale(' + (0.6 + Math.random() * 0.9) + ')';
    document.body.appendChild(petal);
  }
})();
