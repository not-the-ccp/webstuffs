// Raranga Edition No. 1 — cart counter
(function () {
  var btn = document.getElementById('cartBtn');
  var count = document.getElementById('cartCount');
  if (!btn || !count) return;
  var n = 0;
  btn.addEventListener('click', function () {
    n += 1;
    count.textContent = n;
    btn.blur();
  });
})();
