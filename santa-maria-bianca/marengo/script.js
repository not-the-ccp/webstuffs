// Italy — Visitor's Brochure: gentle interaction. The text is fully readable without it.
document.addEventListener('DOMContentLoaded', function () {
  var seal = document.querySelector('.seal');
  if (seal) {
    seal.title = 'Click to cancel the seal';
    seal.addEventListener('click', function () {
      seal.classList.toggle('cancelled');
    });
  }
  var issued = document.getElementById('issued-date');
  if (issued) {
    issued.textContent = new Date().toLocaleDateString('en-GB', {
      weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
    });
  }
});
