/* FM-21 · Ch. 4 — a slow pulse on the open E, for the shelf. */
(function () {
  "use strict";

  function beep() {
    try {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      var ctx = new Ctx();
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = 41.2; // open E, the lowest string
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.4);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.5);
    } catch (e) {
      /* the register holds anyway */
    }
  }

  document.addEventListener("click", function (ev) {
    if (ev.target && ev.target.closest && ev.target.closest('a[href^="http"]')) return;
    if (!ev.target.closest(".b-studio")) return;
    beep();
  }, { passive: true });
})();
