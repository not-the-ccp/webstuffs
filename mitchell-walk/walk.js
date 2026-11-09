// Draws the lemniscate of Bernoulli (a closed curve with a singularity
// at the centre) and lets the little dot go round it once, quietly.
(function () {
  var path = document.getElementById("curve-path");
  var dot = document.getElementById("curve-dot");
  if (!path || !dot) return;

  var a = 130, cx = 280, cy = 45, N = 240, pts = [];
  for (var i = 0; i <= N; i++) {
    var t = 2 * Math.PI * i / N;
    var s = Math.cos(t);
    var den = 1 + s * s;
    pts.push([cx + (a * s * Math.cos(t)) / den, cy - (a * s * Math.sin(t)) / den]);
  }
  path.setAttribute("d", "M " + pts.map(function (p) {
    return p[0].toFixed(1) + " " + p[1].toFixed(1);
  }).join(" L "));

  var len = path.getTotalLength();
  var start = null, DUR = 9000;
  function tick(ts) {
    if (start === null) start = ts;
    var u = ((ts - start) / DUR) % 1;
    var p = path.getPointAtLength(u * len);
    dot.setAttribute("cx", p.x);
    dot.setAttribute("cy", p.y);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
