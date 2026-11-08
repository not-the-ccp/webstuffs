/* Teardrops — dining column, review no. 207
   A few quiet, wet touches. The review reads fine with this disabled;
   this only adds rain, one slow chord, and the count of seconds. */

(function () {
  "use strict";

  /* ---------- falling teardrops on canvas ---------- */

  var canvas = document.getElementById("tears");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var drops = [];
  var W = 0, H = 0;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  function makeDrop(anywhere) {
    return {
      x: Math.random() * W,
      y: anywhere ? Math.random() * H : -20,
      r: 2 + Math.random() * 3.4,
      v: 0.5 + Math.random() * 1.1,
      sway: Math.random() * Math.PI * 2,
      alpha: 0.10 + Math.random() * 0.28
    };
  }

  var COUNT = Math.min(46, Math.floor(W / 26));
  for (var i = 0; i < COUNT; i++) drops.push(makeDrop(true));

  function drawDrop(d) {
    ctx.save();
    ctx.globalAlpha = d.alpha;
    ctx.fillStyle = "#9fd3ea";
    ctx.beginPath();
    /* teardrop: round bottom, pointed top */
    ctx.moveTo(d.x, d.y - d.r * 2.6);
    ctx.bezierCurveTo(d.x + d.r * 1.4, d.y - d.r * 0.4,
                      d.x + d.r * 1.15, d.y + d.r,
                      d.x, d.y + d.r);
    ctx.bezierCurveTo(d.x - d.r * 1.15, d.y + d.r,
                      d.x - d.r * 1.4, d.y - d.r * 0.4,
                      d.x, d.y - d.r * 2.6);
    ctx.fill();
    ctx.restore();
  }

  var reduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function tick() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < drops.length; i++) {
      var d = drops[i];
      d.sway += 0.02;
      d.x += Math.sin(d.sway) * 0.18;
      d.y += d.v;
      if (d.y > H + 20) drops[i] = d = makeDrop(false);
      drawDrop(d);
    }
    if (!reduced) requestAnimationFrame(tick);
  }
  tick();

  /* ---------- the count of seconds, in a corner ---------- */

  var badge = document.createElement("div");
  badge.textContent = "storm: 5 s → 1 mi";
  badge.setAttribute("aria-hidden", "true");
  badge.style.cssText =
    "position:fixed;right:14px;bottom:12px;z-index:3;" +
    "font:600 10px/1.4 'Avenir Next','Gill Sans',sans-serif;" +
    "letter-spacing:0.18em;text-transform:uppercase;" +
    "color:rgba(159,211,234,0.55);";
  document.body.appendChild(badge);

  var n = 5;
  if (!reduced) {
    setInterval(function () {
      n = n === 1 ? 5 : n - 1;
      badge.textContent = "count: " + n + " … " + (n - 1) + " … (÷5 = " + 0 + " mi left)";
    }, 1600);
  }

  /* ---------- one gentle chord on first tap of the rosette ---------- */

  function pluck() {
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      var ac = new AC();
      /* Am: A2, E3, A3, C4 — the ballad's key, kept very small */
      [110, 164.81, 220, 261.63].forEach(function (f, i) {
        var o = ac.createOscillator();
        var g = ac.createGain();
        o.type = "triangle";
        o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, ac.currentTime + i * 0.06);
        g.gain.exponentialRampToValueAtTime(0.05, ac.currentTime + i * 0.06 + 0.03);
        g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + i * 0.06 + 2.6);
        o.connect(g); g.connect(ac.destination);
        o.start(ac.currentTime + i * 0.06);
        o.stop(ac.currentTime + i * 0.06 + 2.8);
      });
      setTimeout(function () { ac.close(); }, 4200);
    } catch (e) { /* the room stays quiet */ }
  }

  var rosette = document.querySelector(".rosette");
  if (rosette) {
    rosette.style.cursor = "pointer";
    rosette.addEventListener("click", pluck);
  }
})();
