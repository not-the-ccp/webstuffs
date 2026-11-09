/* SDS-CT-01 — Seven settings, seven cities. The page reads fine without this. */
(function () {
  var seatsInput = document.getElementById('seats');
  var readout = document.getElementById('seats-readout');
  var plural = document.getElementById('seats-plural');
  var dots = Array.prototype.slice.call(document.querySelectorAll('.seat-dot'));
  var outs = Array.prototype.slice.call(document.querySelectorAll('.scale-table .out'));
  var cities = Array.prototype.slice.call(document.querySelectorAll('#city-list li'));

  var items = [
    function (n) { return n + ' bird' + (n === 1 ? '' : 's'); },
    function (n) { var v = n / 7; return (Math.abs(v - 1) < 1e-9 ? '1 bottle' : v.toFixed(2) + ' bottles'); },
    function (n) { var v = n * 4 / 7; var whole = Math.round(v); return (Math.abs(v - whole) < 1e-9 ? whole : v.toFixed(1)) + ' onion' + (whole === 1 ? '' : 's'); },
    function (n) { var whole = Math.round(n * 2); return whole + ' shallot' + (whole === 1 ? '' : 's'); },
    function (n) { var v = n / 7; return (Math.abs(v - 1) < 1e-9 ? '1 bouquet' : v.toFixed(2) + ' bouquets'); },
    function (n) { var v = n * 2 / 7; var whole = Math.round(v); return (Math.abs(v - whole) < 1e-9 ? whole : v.toFixed(2)) + ' knuckle' + (whole === 1 ? '' : 's'); },
    function (n) { var v = n * 6 / 7; return (Math.abs(v - Math.round(v)) < 1e-9 ? Math.round(v) : v.toFixed(1)) + ' tbsp'; },
    function (n) { var v = n * 3 / 7; var whole = Math.round(v); return (Math.abs(v - whole) < 1e-9 ? whole : v.toFixed(2)) + ' oz'; },
    function (n) { var v = n * 3 / 7; var whole = Math.round(v); return (Math.abs(v - whole) < 1e-9 ? whole : v.toFixed(2)) + ' shot' + (whole === 1 ? '' : 's'); },
    function (n) { return n + ' sprig' + (n === 1 ? '' : 's'); }
  ];

  function render() {
    var n = +seatsInput.value;
    readout.textContent = n;
    plural.textContent = n === 1 ? '' : 's';

    dots.forEach(function (dot, i) {
      dot.classList.toggle('set', i < n);
    });

    outs.forEach(function (out) {
      out.textContent = items[+out.getAttribute('data-i')](n);
    });

    cities.forEach(function (city, i) {
      city.classList.toggle('in-range', i < n);
    });
  }

  seatsInput.addEventListener('input', render);
  seatsInput.addEventListener('change', render);
  render();
})();
