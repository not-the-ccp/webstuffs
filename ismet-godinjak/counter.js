/* Chapter IX visitor counter: a small number, kept on the mat. */
(function () {
  var el = document.getElementById("odometer");
  if (!el) return;

  var base = 92417; // seated guests counted since Sydney 2000
  var dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  var seats = base + dayOfYear * 3 + 7; // seven seats a day, one for each Games

  el.textContent = String(seats).replace(/\D/g, "0").padStart(6, "0").slice(-6);

  // and a gentle blink on the first seat, for old-time effect
  el.classList.add("blink");
  setTimeout(function () { el.classList.remove("blink"); }, 3000);
})();
