(function () {
  var btn = document.getElementById('stampBtn');
  var stamp = document.getElementById('stamp');
  if (!btn || !stamp) return;

  var pressed = false;
  btn.addEventListener('click', function () {
    pressed = !pressed;
    stamp.classList.toggle('active', pressed);
    btn.textContent = pressed ? 'Stamp impressed' : 'Press for the official stamp';
  });

  var lanterns = document.querySelectorAll('.lantern');
  lanterns.forEach(function (lantern) {
    lantern.addEventListener('click', function () {
      this.classList.toggle('lit');
    });
  });
})();
