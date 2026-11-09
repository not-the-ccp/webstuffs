/* The Tosa Shore — ranging bell: nine for the ship, one for the sister. */
(function () {
  "use strict";
  var btn = document.getElementById("bellBtn");
  var out = document.getElementById("bellCount");
  if (!btn || !out) return;

  var AC = null;
  function audio() {
    if (!AC) {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (Ctx) AC = new Ctx();
    }
    if (AC && AC.state === "suspended") AC.resume();
    return AC;
  }

  function strike(n) {
    var ac = audio();
    if (!ac) return;
    var t = ac.currentTime;
    // a small bronze bell: fundamental + inharmonic partials, fast decay
    var partials = [
      { f: 392, g: 0.55, d: 1.4 },   // body
      { f: 587.3, g: 0.28, d: 0.9 }, // strike tone
      { f: 831, g: 0.14, d: 0.55 },
      { f: 1318, g: 0.06, d: 0.3 }
    ];
    for (var i = 0; i < partials.length; i++) {
      var p = partials[i];
      var osc = ac.createOscillator();
      var gain = ac.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(p.f * (1 + (Math.random() - 0.5) * 0.004), t);
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(p.g * 0.28, t + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + p.d);
      osc.connect(gain).connect(ac.destination);
      osc.start(t);
      osc.stop(t + p.d + 0.05);
    }
  }

  var busy = false;
  var labels = [
    "the bell is idle; the line is holding",
    "one for the ship", "two for the ship", "three for the ship",
    "four for the ship", "five for the ship", "six for the ship",
    "seven for the ship", "eight for the ship", "nine for the ship",
    "one for the sister — the line was observed twice; it would hold again",
    "the bell is idle; the line is holding"
  ];

  btn.addEventListener("click", function () {
    if (busy) return;
    busy = true;
    out.classList.add("ringing");
    var step = 1;
    (function next() {
      strike(step);
      out.textContent = labels[step];
      if (step < 10) {
        setTimeout(next, step === 9 ? 700 : 460);
        step++;
      } else {
        setTimeout(function () {
          out.textContent = labels[10];
          out.classList.remove("ringing");
          busy = false;
        }, 1500);
      }
    })();
  });
})();
