/* Platform 3 — the 150-watt lamp over the PA keeps its glow on a slow cycle. */
(function () {
  var lamp = document.getElementById("lamp");
  if (!lamp) return;

  var lit = false;
  setInterval(function () {
    lit = !lit;
    lamp.classList.toggle("lit", lit);
  }, 2400);

  // Start with the lamp lit, as the plate shows it.
  lamp.classList.add("lit");
})();
