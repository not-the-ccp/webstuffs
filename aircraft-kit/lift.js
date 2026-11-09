/* Lift reckoner — L = ½ × ρ × v² × S × C_L */
(function () {
  var rhoInput = document.getElementById('rho');
  var speedInput = document.getElementById('speed');
  var areaInput = document.getElementById('area');
  var clInput = document.getElementById('cl');
  var reckonBtn = document.getElementById('reckon');
  var resetBtn = document.getElementById('reckonReset');
  var out = document.getElementById('reckoningOut');

  function reckon() {
    var rho = parseFloat(rhoInput.value);
    var v = parseFloat(speedInput.value);
    var s = parseFloat(areaInput.value);
    var cl = parseFloat(clInput.value);
    if (!(rho > 0) || !(v >= 0) || !(s > 0) || !(cl >= 0)) {
      out.textContent = 'Reckon with all four figures — density, speed, area, coefficient.';
      return;
    }
    var lift = 0.5 * rho * v * v * s * cl;
    var kgf = lift / 9.81;
    out.textContent = 'Lift ≈ ' + lift.toFixed(1) + ' N — about ' + kgf.toFixed(1) + ' kgf held against gravity, at this speed and air.';
  }

  function reset() {
    rhoInput.value = '1.225';
    speedInput.value = '45';
    areaInput.value = '16';
    clInput.value = '0.45';
    out.textContent = 'Reset to sea level: 1.225 kg/m³, 45 m/s, 16 m², C_L 0.45.';
  }

  reckonBtn.addEventListener('click', reckon);
  resetBtn.addEventListener('click', reset);
})();
