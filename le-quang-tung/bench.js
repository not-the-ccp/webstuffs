// Field Test bench — Type 14-F station barometer, Claim 9
(function () {
  var svg = document.querySelector(".gauge");
  if (!svg) return;

  var needle = document.getElementById("needle");
  var ticks = document.getElementById("ticks");
  var slider = document.getElementById("pressure");
  var outVal = document.getElementById("out-val");
  var outDrift = document.getElementById("out-drift");
  var outFlag = document.getElementById("out-flag");

  var CX = 100, CY = 120, R = 68;
  var MIN = 950, MAX = 1050;
  var PREFERRED = 1009;
  var BAND_LO = 1007, BAND_HI = 1011;

  // value -> angle in degrees (0 at top, -90 left, +90 right)
  function angleFor(v) {
    return ((v - MIN) / (MAX - MIN)) * 180 - 90;
  }

  function endpoint(deg, r) {
    var rad = (deg * Math.PI) / 180;
    return [CX + r * Math.sin(rad), CY - r * Math.cos(rad)];
  }

  // draw ticks every 5 hPa, longer every 25 hPa
  var NS = "http://www.w3.org/2000/svg";
  for (var v = MIN; v <= MAX; v += 5) {
    var a = angleFor(v);
    var major = (v % 25 === 0);
    var p1 = endpoint(a, major ? 60 : 64);
    var p2 = endpoint(a, R);
    var line = document.createElementNS(NS, "line");
    line.setAttribute("x1", p1[0].toFixed(1));
    line.setAttribute("y1", p1[1].toFixed(1));
    line.setAttribute("x2", p2[0].toFixed(1));
    line.setAttribute("y2", p2[1].toFixed(1));
    ticks.appendChild(line);
  }

  function render() {
    var v = Number(slider.value);
    var a = angleFor(v);
    var tip = endpoint(a, R - 18);
    needle.setAttribute("x2", tip[0].toFixed(1));
    needle.setAttribute("y2", tip[1].toFixed(1));

    outVal.textContent = v;
    var drift = v - PREFERRED;
    outDrift.textContent = (drift > 0 ? "+" : "") + drift + " hPa";

    if (v >= BAND_LO && v <= BAND_HI) {
      outFlag.textContent = "STEADY — in band";
      outFlag.classList.remove("flagged");
    } else {
      outFlag.textContent = "FLAGGED — outside band, inspector to visit";
      outFlag.classList.add("flagged");
    }
  }

  slider.addEventListener("input", render);
  render();
})();
