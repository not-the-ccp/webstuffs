document.getElementById('night-watch').addEventListener('click', function () {
  document.body.classList.toggle('night-watch');
  this.textContent = document.body.classList.contains('night-watch') ? 'Day watch' : 'Night watch';
});
