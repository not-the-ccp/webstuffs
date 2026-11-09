/* party 4 U — the neon sign keeps its own time */
(function () {
  var sign = document.getElementById("neon");
  if (!sign) return;
  var text = sign.dataset.text || sign.textContent;
  sign.textContent = "";

  function render() {
    sign.textContent = text;
  }

  render();

  // a slow neon flicker: dims for a few hundred ms, then holds
  setInterval(function () {
    if (Math.random() < 0.35) {
      sign.style.opacity = "0.55";
      setTimeout(function () {
        sign.style.opacity = "1";
      }, 120 + Math.random() * 180);
    }
  }, 1800);
})();
