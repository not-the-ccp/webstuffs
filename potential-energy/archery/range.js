/* The Gate 3 Drop Sheet — launch speed, flight time, drop at the face */
(function () {
  "use strict";
  var g = 9.81;
  var form = document.getElementById("drop-form");
  if (!form) return;

  var lbIn = document.getElementById("ds-lb");
  var cmIn = document.getElementById("ds-cm");
  var grIn = document.getElementById("ds-gr");
  var dIn = document.getElementById("ds-d");
  var aIn = document.getElementById("ds-a");
  var bowSel = document.getElementById("ds-bow");
  var vOut = document.getElementById("ds-v");
  var tOut = document.getElementById("ds-t");
  var yOut = document.getElementById("ds-y");
  var aimOut = document.getElementById("ds-aim");
  var svg = document.getElementById("range-svg");

  var W = 440, H = 200, L = 34, R = 34, ground = 172, top = 18;

  function yAt(x, v, th) {
    var c = Math.cos(th);
    return x * Math.tan(th) - (g * x * x) / (2 * v * v * c * c);
  }

  function levelHitAngle(v, D) {
    // solve D*tan(a) = g D^2 / (2 v^2 cos^2 a)
    var lo = 0, hi = Math.PI / 4;
    for (var i = 0; i < 60; i++) {
      var mid = (lo + hi) / 2;
      if (yAt(D, v, mid) > 0) hi = mid; else lo = mid;
    }
    return (lo + hi) / 2;
  }

  function el(tag, attrs) {
    var n = document.createElementNS("http://www.w3.org/2000/svg", tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }

  function compute() {
    var lb = parseFloat(lbIn.value);
    var cm = parseFloat(cmIn.value);
    var gr = parseFloat(grIn.value);
    var D = parseFloat(dIn.value);
    var deg = parseFloat(aIn.value);
    if (!(lb > 0 && cm > 0 && gr > 0 && D > 0)) return;
    var eff = bowSel.value === "recurve" ? 0.75 : 0.85;
    var forceN = lb * 4.44822;
    var energy = eff * forceN * (cm / 100);
    var mass = (gr * 0.0647989) / 1000; // kg
    var v = Math.sqrt((2 * energy) / mass);
    var th = deg * Math.PI / 180;
    var t = D / (v * Math.cos(th));
    var y = yAt(D, v, th);
    var aim = levelHitAngle(v, D);

    vOut.textContent = v.toFixed(1) + " m/s (" + Math.round(v * 3.6) + " km/h)";
    tOut.textContent = t.toFixed(2) + " s";
    yOut.textContent = Math.abs(y * 100).toFixed(1) + " cm " + (y >= 0 ? "high" : "low");
    aimOut.textContent = (aim * 180 / Math.PI).toFixed(1) + " \u00b0";

    draw(v, th, D, y);
  }

  function draw(v, th, D, yFace) {
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    // where the arrow hits the ground, if before the face
    var xLand = D;
    if (th > 0) {
      var xz = (v * v * Math.sin(2 * th)) / g;
      if (xz < D) xLand = xz;
    }

    var samples = 40, maxX = 0, maxY = 0, pts = [];
    for (var i = 0; i <= samples; i++) {
      var x = (xLand * i) / samples;
      var y = yAt(x, v, th);
      pts.push([x, Math.max(y, 0)]);
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
    // level-shot comparison, to the face
    var pts0 = [];
    for (var j = 0; j <= samples; j++) {
      var x0 = (D * j) / samples;
      pts0.push([x0, Math.min(0, yAt(x0, v, 0))]);
    }
    var minLow = 0;
    pts0.forEach(function (p) { if (p[1] < minLow) minLow = p[1]; });

    var spanY = Math.max(maxY, -minLow, 0.5) * 1.2;
    var px = function (x) { return L + (x / D) * (W - L - R); };
    var py = function (y) {
      var lo = minLow * 1.1, hi = spanY;
      var h = hi - lo;
      return ground + ((y - lo) / h) * (ground - top);
    };

    // ground
    svg.appendChild(el("line", { x1: L - 16, y1: ground, x2: W - R + 16, y2: ground, stroke: "#2b2118", "stroke-width": 2 }));
    // level shot (dashed)
    var d0 = pts0.map(function (p, i) { return (i ? "L" : "M") + px(p[0]).toFixed(1) + " " + py(p[1]).toFixed(1); }).join(" ");
    svg.appendChild(el("path", { d: d0, fill: "none", stroke: "#8a3324", "stroke-width": 1.5, "stroke-dasharray": "5 4", opacity: 0.7 }));
    // flight
    var d1 = pts.map(function (p, i) { return (i ? "L" : "M") + px(p[0]).toFixed(1) + " " + py(p[1]).toFixed(1); }).join(" ");
    svg.appendChild(el("path", { d: d1, fill: "none", stroke: "#2b2118", "stroke-width": 2.5 }));

    // target: five-ring face at the end of the line
    var cx = px(D), cy = py(0);
    svg.appendChild(el("circle", { cx: cx, cy: cy, r: 13, fill: "#fbf6e8", stroke: "#2b2118", "stroke-width": 2 }));
    svg.appendChild(el("circle", { cx: cx, cy: cy, r: 9, fill: "none", stroke: "#2b2118", "stroke-width": 1 }));
    svg.appendChild(el("circle", { cx: cx, cy: cy, r: 5, fill: "none", stroke: "#2b2118", "stroke-width": 1 }));
    svg.appendChild(el("circle", { cx: cx, cy: cy, r: 1.6, fill: "#8a3324" }));

    // impact mark on the face
    var iy = yFace;
    if (iy > 0.13 || iy < -0.13) {
      var ix = px(D), iyp = py(Math.max(-0.13, Math.min(0.13, iy)));
      svg.appendChild(el("circle", { cx: ix, cy: iyp, r: 2.6, fill: "#8a3324" }));
    } else {
      svg.appendChild(el("circle", { cx: cx, cy: cy, r: 2.6, fill: "#8a3324" }));
    }

    // labels
    function label(x, y, txt) {
      var t = el("text", { x: x, y: y, "font-size": 11, "font-family": "Courier New, monospace", fill: "#4a3a28" });
      t.textContent = txt;
      svg.appendChild(t);
    }
    label(L - 28, ground + 14, "string");
    label(cx - 12, ground + 14, D + " m");
    label(L - 26, top + 4, "drop sheet");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    compute();
  });
  [lbIn, cmIn, grIn, dIn, aIn].forEach(function (inp) {
    inp.addEventListener("change", compute);
  });
  bowSel.addEventListener("change", compute);
  compute();
})();
