/* Triton, Geology — Cold Storage sheet: frost drift, orbit satellite, relay ticker */
(function () {
  "use strict";

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- nitrogen frost: slowly rising, sublimating specks ---------- */
  var canvas = document.getElementById("frost");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var flakes = [];
    var W = 0, H = 0;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    function makeFlake(seed) {
      return {
        x: Math.random() * W,
        y: seed ? Math.random() * H : H + 8,
        r: 0.6 + Math.random() * 1.8,
        vy: -(0.08 + Math.random() * 0.25),      /* the frost migrates; against the grain */
        vx: (Math.random() - 0.5) * 0.12,
        a: 0.15 + Math.random() * 0.4,
        ph: Math.random() * Math.PI * 2
      };
    }
    for (var i = 0; i < 90; i++) flakes.push(makeFlake(true));

    function tick(t) {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < flakes.length; i++) {
        var f = flakes[i];
        f.y += f.vy;
        f.x += f.vx + Math.sin(t / 2400 + f.ph) * 0.12;
        if (f.y < -10) flakes[i] = f = makeFlake(false);
        var tw = 0.7 + 0.3 * Math.sin(t / 900 + f.ph);
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(216, 244, 255," + (f.a * tw).toFixed(3) + ")";
        ctx.fill();
      }
      requestAnimationFrame(tick);
    }
    if (!reduced) requestAnimationFrame(tick);
  }

  /* ---------- the satellite on the retrograde approach ---------- */
  var path = document.getElementById("orbitpath");
  var sat = document.getElementById("satellite");
  if (path && sat && path.getTotalLength) {
    var len = path.getTotalLength();
    var t0 = null;
    function place(ts) {
      if (t0 === null) t0 = ts;
      var p = ((ts - t0) % 9000) / 9000;          /* one orbit in nine seconds */
      p = 1 - p;                                  /* retrograde: it goes the wrong way */
      var pt = path.getPointAtLength(p * len);
      sat.setAttribute("cx", pt.x);
      sat.setAttribute("cy", pt.y);
      requestAnimationFrame(place);
    }
    if (!reduced) requestAnimationFrame(place);
    else {
      var pt = path.getPointAtLength(0.5 * len);
      sat.setAttribute("cx", pt.x);
      sat.setAttribute("cy", pt.y);
    }
  }

  /* ---------- bin temperature: held at the sign, by force ---------- */
  var title = document.title;
  if (!reduced && title.indexOf("−215") === -1) {
    setInterval(function () {
      var v = (215 + (Math.random() < 0.18 ? 1 : 0)) + " °C";
      document.title = "Bin reading " + v + " · " + title;
      setTimeout(function () { document.title = title; }, 2600);
    }, 11000);
  }
})();
