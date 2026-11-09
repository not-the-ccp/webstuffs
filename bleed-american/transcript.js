// Fades the verbatim record in line by line; a no-JS fallback shows all lines.
(function () {
  document.documentElement.classList.add('js');
  var folio = document.querySelector('.folio');
  if (!folio) return;
  // Reveal after one frame so the transition from the hidden state can run.
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      folio.classList.add('reading');
    });
  });
})();
