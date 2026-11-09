// Placard No. 7 — caldera volume from the chart table.
(function () {
  "use strict";

  // Bathymetry file of the Station Museum. [name, d km, w km, h km, fixed]
  var HOLLOW = [
    ["Macauley NW — this specimen (survey of 1998)", 10.5, 7.0, 0.9, true],
    ["Crater Lake, Oregon", 9.8, 9.6, 0.5, false],
    ["Santorini, Aegean", 12.0, 10.0, 0.4, false],
    ["Katmai / Novarupta, Alaska", 10.0, 9.0, 0.6, false],
    ["Taupo, North Island", 35.0, 30.0, 0.5, false]
  ];

  // Elliptical bowl of depth h: V = (pi * d * w * h) / 8
  function volume(d, w, h) {
    return (Math.PI * d * w * h) / 8;
  }

  function fmt(n) {
    return (Math.round(n * 10) / 10).toLocaleString("en-NZ", { maximumFractionDigits: 1 });
  }

  var dEl = document.getElementById("d");
  var wEl = document.getElementById("w");
  var hEl = document.getElementById("h");
  var out = document.getElementById("result");
  var body = document.getElementById("compare-body");
  var note = document.getElementById("compare-note");

  if (!dEl || !wEl || !hEl || !out || !body) return;

  function recalc() {
    var d = parseFloat(dEl.value),
        w = parseFloat(wEl.value),
        h = parseFloat(hEl.value);
    if (!(d > 0) || !(w > 0) || !(h > 0)) return;

    var v = volume(d, w, h);
    var ref = volume(10.5, 7.0, 0.9);
    var ratio = v / ref;
    var rel;
    if (Math.abs(ratio - 1) < 0.02) {
      rel = "— the Macauley survey's own figure, as charted in 1998";
    } else if (ratio > 1) {
      rel = "— " + fmt(ratio) + " times the Macauley hollow";
    } else {
      rel = "— " + Math.round(ratio * 100) + "% of the Macauley hollow";
    }
    out.textContent = "Volume: " + fmt(v) + " km³" + rel;

    var rows = "";
    var best = -1, bestDiff = Infinity;
    for (var i = 0; i < HOLLOW.length; i++) {
      var r = HOLLOW[i];
      var rv = volume(r[1], r[2], r[3]);
      var cls = r[4] ? "fixed" : "";
      var diff = Math.abs(rv - v);
      if (!r[4] && diff < bestDiff) { bestDiff = diff; best = i; }
      if (i === best) cls += (cls ? " " : "") + "nearest";
      rows += "<tr class=\"" + cls + "\">" +
        "<td>" + r[0] + "</td>" +
        "<td>" + fmt(r[1]) + " × " + fmt(r[2]) + "</td>" +
        "<td>" + fmt(r[3]) + "</td>" +
        "<td>" + fmt(rv) + "</td></tr>";
    }
    body.innerHTML = rows;
    note.textContent = best >= 0
      ? "The row nearest your figure is lit. The Macauley row never moves."
      : "Nothing in the file is nearer than the Macauley row itself.";
  }

  dEl.addEventListener("input", recalc);
  wEl.addEventListener("input", recalc);
  hEl.addEventListener("input", recalc);
  recalc();
})();
