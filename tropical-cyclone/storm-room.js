/* Storm Room — Season Sheet No. 21
   Drifts the station pressure and the storm on the wire.
   The page reads fine without this script. */
(function () {
  var mb = document.getElementById('mb');
  var nameNow = document.getElementById('nameNow');
  var spiral = document.getElementById('spiral');
  if (!mb) return;

  var p = 982.0;
  var drift = 0;
  setInterval(function () {
    drift = Math.sin(Date.now() / 9000) * 3.4;
    mb.textContent = (p + drift).toFixed(1);
  }, 700);

  var names = ['Kettle', 'Cinder', 'Marisol', 'Ondo', 'Bramble', 'Tamsin'];
  var i = 0;
  setInterval(function () {
    i = (i + 1) % names.length;
    if (nameNow) nameNow.textContent = names[i];
  }, 11000);

  if (spiral && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var n = 0;
    setInterval(function () {
      n = (n + 1) % 360;
      spiral.style.transform = 'rotate(' + n + 'deg)';
    }, 100);
  }
})();
