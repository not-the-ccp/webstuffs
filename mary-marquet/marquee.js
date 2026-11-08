// The gas-lamp flicker: the hammer price glows once, as the mallet was clubbed — light, once.
document.addEventListener("DOMContentLoaded", function () {
  var hammer = document.getElementById("hammer");
  var sold = document.getElementById("sold");
  if (!hammer) return;
  var lit = false;
  function flicker() {
    lit = !lit;
    hammer.classList.toggle("lit", lit);
    if (sold) sold.style.opacity = lit ? "1" : "0.75";
  }
  flicker();
  setInterval(flicker, 3000);
});
