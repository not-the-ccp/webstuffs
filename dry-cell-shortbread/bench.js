/* The family rectifier, 1936 — working dial for card 3127. */
(function () {
  "use strict";

  var canvas = document.getElementById("scope");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  var W = canvas.width, H = canvas.height;
  var mid = H / 2, amp = H / 2 - 22;
  var cycles = 4;

  var notes = {
    ac: "The current runs equal both ways. The bench lamp will not commit.",
    half: "Every other crest passes; the rest is thrown away, as the family always said.",
    full: "Every crest is turned the right way. The filament warms.",
    smooth: "The capacitor is closed. Low ripple — ready to eat."
  };

  function value(mode, t) {
    var s = Math.sin(t * Math.PI * 2 * cycles);
    if (mode === "ac") return s;
    if (mode === "half") return s > 0 ? s : 0;
    if (mode === "full") return Math.abs(s);
    /* full-wave + smoothing capacitor: exponential droop between crests */
    var tau = 0.9; /* in fractions of a half-period */
    var x = t * 2 * cycles;        /* half-periods */
    var frac = x - Math.floor(x);
    return 1 - (1 - Math.exp(-frac / tau)) * 0.82;
  }

  function mean(mode) {
    var sum = 0, n = 2000;
    for (var i = 0; i < n; i++) sum += value(mode, i / n);
    return (sum / n).toFixed(2);
  }

  function draw(mode) {
    ctx.clearRect(0, 0, W, H);

    /* graticule */
    ctx.strokeStyle = "rgba(127, 217, 106, 0.18)";
    ctx.lineWidth = 1;
    for (var gx = 0; gx <= W; gx += W / 8) {
      ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, H); ctx.stroke();
    }
    for (var gy = 0; gy <= H; gy += H / 4) {
      ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
    }

    /* zero line */
    ctx.strokeStyle = "rgba(127, 217, 106, 0.45)";
    ctx.beginPath(); ctx.moveTo(0, mid); ctx.lineTo(W, mid); ctx.stroke();

    /* trace */
    ctx.strokeStyle = "#7fd96a";
    ctx.lineWidth = 2;
    ctx.shadowColor = "rgba(127, 217, 106, 0.6)";
    ctx.shadowBlur = 6;
    ctx.beginPath();
    var n = 600;
    for (var i = 0; i <= n; i++) {
      var t = i / n;
      var y = mid - value(mode, t) * amp;
      if (i === 0) ctx.moveTo(t * W, y); else ctx.lineTo(t * W, y);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  var buttons = document.querySelectorAll(".dial button");
  var out = document.getElementById("dc-output");
  var noteEl = document.getElementById("state-note");

  function select(mode) {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.toggle("on", buttons[i].getAttribute("data-mode") === mode);
    }
    draw(mode);
    if (out) out.textContent = "DC output: " + mean(mode) + " (of 1.00)";
    if (noteEl) noteEl.textContent = notes[mode] || "";
  }

  for (var i = 0; i < buttons.length; i++) {
    (function (b) {
      b.addEventListener("click", function () { select(b.getAttribute("data-mode")); });
    })(buttons[i]);
  }

  select("ac");
})();
