/* Lot 63 — visitor odometer and the occasional hammer flash.
   The page is fully readable without this script. */
(function () {
  var box = document.getElementById('odometer');
  if (!box) return;

  var digits = box.querySelectorAll('.digit');
  var count = 421;

  function paint(n) {
    var s = String(n);
    while (s.length < 5) s = '0' + s;
    for (var i = 0; i < digits.length; i++) {
      digits[i].textContent = s.charAt(i);
    }
  }

  paint(count);

  // tick the register up by one, the old way: once, on arrival
  setTimeout(function () { paint(count + 1); }, 900);

  // the hammer: a brief flash of the ribbon when a lot goes
  var ribbon = document.getElementById('ribbon');
  if (ribbon) {
    setInterval(function () {
      ribbon.style.backgroundColor = '#990000';
      setTimeout(function () { ribbon.style.backgroundColor = '#000080'; }, 240);
    }, 9000);
  }
})();
