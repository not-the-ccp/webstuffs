document.addEventListener('DOMContentLoaded', function () {
  var seal = document.querySelector('.seal');
  if (seal) {
    seal.addEventListener('click', function () {
      seal.classList.toggle('melted');
    });
    seal.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        seal.classList.toggle('melted');
      }
    });
  }
});
