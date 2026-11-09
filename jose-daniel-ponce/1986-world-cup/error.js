/* Error record 1986-WC-24 — terminal tail for the system notice archive. */
(function () {
  "use strict";

  var lines = [
    "resume(1986) … 52 calls, 0 exceptions",
    "host = mexico (count: 2) — accepted",
    "champion = argentina (title: 2) — accepted",
    "audit final: argentina 3 — england 2, 29 June 1986",
    "line 1 of 1 unamended. record closed."
  ];

  var typed = document.getElementById("typed");
  var odd = document.getElementById("oddline");
  if (!typed) return;

  var reduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var li = 0, ci = 0;
  function tick() {
    if (li >= lines.length) { setTimeout(tick, 4000); li = 0; ci = 0; }
    var line = lines[li] || "";
    if (ci <= line.length) {
      typed.textContent = line.slice(0, ci);
      ci++;
      setTimeout(tick, 26);
    } else {
      ci = 0; li++;
      setTimeout(tick, 900);
    }
  }

  if (reduced) {
    typed.textContent = lines[lines.length - 1];
    return;
  }

  /* the unamendable line glitches when read, exactly twice per visit */
  if (odd) {
    var original = odd.textContent;
    var pool = "▪▓#%&*§";
    var hits = 0;
    function glitch() {
      if (hits >= 2) return;
      hits++;
      var out = original.split("");
      for (var i = 0; i < out.length; i++) {
        if (Math.random() < 0.28 && out[i] !== " ") {
          out[i] = pool[Math.floor(Math.random() * pool.length)];
        }
      }
      odd.textContent = out.join("");
      setTimeout(function () { odd.textContent = original; }, 420);
      setTimeout(function () {
        if (hits < 2) glitch();
      }, 2600 + Math.random() * 2000);
    }
    setTimeout(glitch, 2500);
  }

  setTimeout(tick, 700);
})();
