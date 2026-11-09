/* Field Manual FM-21, Chapter 7 — drawbar console */
(function () {
  "use strict";

  var LABELS = ["16\u2032", "8\u2032", "15", "12\u2032", "8\u2032", "4\u2032", "2\u2154", "2\u2032", "1\u2117"];

  var PRESETS = {
    "0-0-0-0-8-0-0-0-0": "P1 \u00b7 Flute 8",
    "0-0-0-0-0-0-8-0-0": "P2 \u00b7 Flute 4",
    "0-0-0-0-0-0-0-8-0": "P3 \u00b7 Flute 2",
    "0-0-0-0-0-0-8-8-0": "P5 \u00b7 Flute 4 + 2",
    "0-0-0-0-8-0-8-0-0": "P6 \u00b7 Flute 8 + 4",
    "8-0-4-0-0-0-0-0-0": "P14 \u00b7 Tone \u2014 the house tone",
    "0-0-0-0-0-0-0-8-8": "P19 \u00b7 Trumpet",
    "0-0-0-0-0-0-4-8-0": "P21 \u00b7 Clarinet",
    "0-0-0-0-8-0-8-0-8": "P47 \u00b7 Great 2"
  };

  var grid = document.getElementById("console-grid");
  if (!grid) return;

  var state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var cells = [];

  function build() {
    var frag = document.createDocumentFragment();
    for (var d = 0; d < 9; d++) {
      var col = document.createElement("div");
      col.className = "db";

      var label = document.createElement("span");
      label.className = "db-label";
      label.textContent = LABELS[d];
      col.appendChild(label);

      var colCells = [];
      for (var lvl = 8; lvl >= 0; lvl--) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "cell" + (lvl === 0 ? " zero" : "");
        btn.textContent = String(lvl);
        btn.setAttribute("aria-label", LABELS[d] + " drawbar, notch " + lvl);
        (function (dd, ll) {
          btn.addEventListener("click", function () {
            state[dd] = ll;
            paint();
          });
        })(d, lvl);
        colCells.push(btn);
        col.appendChild(btn);
      }

      var val = document.createElement("span");
      val.className = "db-value";
      val.textContent = "0";
      col.appendChild(val);

      cells[d] = { cells: colCells, val: val };
      frag.appendChild(col);
    }
    grid.appendChild(frag);
  }

  function buildPresets() {
    var row = document.getElementById("preset-row");
    if (!row) return;
    Object.keys(PRESETS).forEach(function (key) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "preset-btn";
      b.textContent = PRESETS[key];
      b.addEventListener("click", function () {
        state = key.split("-").map(Number);
        paint();
      });
      row.appendChild(b);
    });
    var clear = document.createElement("button");
    clear.type = "button";
    clear.className = "preset-btn";
    clear.textContent = "All out (0-0-0-0-0-0-0-0-0)";
    clear.addEventListener("click", function () {
      state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      paint();
    });
    row.appendChild(clear);
  }

  function paint() {
    for (var d = 0; d < 9; d++) {
      for (var i = 0; i < 9; i++) {
        var lvl = 8 - i;
        cells[d].cells[i].className =
          "cell" + (lvl === 0 ? " zero" : "") + (state[d] === lvl ? " active" : "");
      }
      cells[d].val.textContent = String(state[d]);
    }
    var setting = state.join("-");
    document.getElementById("readout-setting").textContent = "Setting: " + setting;
    var preset = PRESETS[setting];
    document.getElementById("readout-preset").textContent = preset
      ? "Preset: " + preset
      : "No preset \u2014 unlisted field setting. Log it in the margin.";
  }

  build();
  buildPresets();
  paint();
})();
