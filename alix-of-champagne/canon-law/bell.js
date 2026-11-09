/* LMB-1218 — the wax seal is the bell. One final time, on the hour, and stops. */
(function () {
  var seal = document.getElementById("bell") && document.querySelector(".seal");
  if (!seal) return;

  var ctx = null;

  function bellToll() {
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      var now = ctx.currentTime;
      // A bell: a fundamental and two inharmonic partials, slow to die.
      [1, 2.01, 2.74].forEach(function (ratio, i) {
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = 196 * ratio;
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.18 / (i + 1), now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);
        osc.connect(gain).connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 3.4);
      });
    } catch (e) { /* the room keeps its own sound */ }
  }

  seal.addEventListener("click", function () {
    seal.classList.remove("ringing");
    // restart the animation
    void seal.offsetWidth;
    seal.classList.add("ringing");
    bellToll();
  });
})();
