// The Scorchers' Ground Ledger — a slow floodlight sweep over the masthead.
// Purely decorative; the page reads fine without it.
(function () {
  var mast = document.querySelector(".masthead");
  if (!mast || !("requestAnimationFrame" in window)) return;

  var t = 0;
  function sweep() {
    t += 0.008;
    var x = 50 + 42 * Math.sin(t);
    mast.style.backgroundImage =
      "radial-gradient(60% 90% at " + x.toFixed(1) + "% -10%, rgba(74,103,65,0.10), transparent 70%)";
    requestAnimationFrame(sweep);
  }
  requestAnimationFrame(sweep);
})();
