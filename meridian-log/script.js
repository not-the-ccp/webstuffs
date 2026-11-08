(function () {
  var form = document.getElementById('fixer-form');
  var out = document.getElementById('fix-out');
  if (!form || !out) return;

  form.addEventListener('click', function (e) {
    if (e.target.tagName !== 'BUTTON') return;
    var f = e.target.form;

    function dec(deg, min, sign) {
      return (Number(deg || 0) + Number(min || 0) / 60) * Number(sign);
    }

    var lat = dec(f.latd.value, f.latm.value, f.latns.value);
    var lon = dec(f.lond.value, f.lonm.value, f.lonwe.value);
    var latH = lat < 0 ? 'S' : 'N';
    var lonH = lon < 0 ? 'W' : 'E';

    out.textContent =
      'Decimal fix: ' + Math.abs(lat).toFixed(4) + '&deg;' + latH + ', ' +
      Math.abs(lon).toFixed(4) + '&deg;' + lonH +
      ' &middot; roughly one kilometre per 0.009&deg; at this latitude.';
  });
})();
