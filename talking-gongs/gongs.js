/* The Kulintang Room — Desk No. 12: gong-board for the gandingan */
(function () {
  "use strict";

  var board = document.getElementById("gongBoard");
  if (!board) return;

  var noteEl = document.getElementById("boardNote");
  var NOTE_HZ = { "do": 293.66, "re": 220.0, "mi": 174.61, "do-low": 146.83 };
  // pattern letters: L = do low, M = re (mid), H = mi (high)
  var LETTER_NOTE = { L: "do-low", M: "re", H: "mi" };

  var ctx = null;
  function audio() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  function strike(noteName) {
    var ac = audio();
    var gong = board.querySelector('.gong[data-note="' + noteName + '"]');
    if (gong) {
      gong.classList.add("struck");
      setTimeout(function () { gong.classList.remove("struck"); }, 140);
    }
    if (!ac) return;
    var t = ac.currentTime;
    var base = NOTE_HZ[noteName] || 200;
    var partials = [
      { ratio: 1.0, gain: 0.55, decay: 2.6 },
      { ratio: 1.5, gain: 0.28, decay: 2.0 },
      { ratio: 2.02, gain: 0.18, decay: 1.5 },
      { ratio: 2.94, gain: 0.10, decay: 1.0 },
      { ratio: 4.1, gain: 0.06, decay: 0.6 }
    ];
    for (var i = 0; i < partials.length; i++) {
      var p = partials[i];
      var osc = ac.createOscillator();
      var g = ac.createGain();
      osc.type = "sine";
      osc.frequency.value = base * p.ratio;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(p.gain, t + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t + p.decay);
      osc.connect(g);
      g.connect(ac.destination);
      osc.start(t);
      osc.stop(t + p.decay + 0.1);
    }
  }

  var busy = false;

  board.addEventListener("click", function (e) {
    var btn = e.target.closest("button");
    if (!btn) return;
    if (btn.classList.contains("gong")) {
      strike(btn.dataset.note);
      noteEl.textContent = "The " + btn.dataset.note + " gong is ringing — eleven seconds, by the room's count.";
    } else if (btn.classList.contains("strike") && !busy) {
      playPattern(btn.dataset.pattern, btn.closest("li").querySelector(".msg-name").textContent);
    }
  });

  function playPattern(pattern, name) {
    busy = true;
    var strikeBtns = board.querySelectorAll(".strike");
    for (var i = 0; i < strikeBtns.length; i++) strikeBtns[i].disabled = true;
    noteEl.textContent = "Striking: “" + name + "” — beat, pause, beat, pause.";
    var t = 0;
    var BEAT = 700, REST = 1100;
    var chars = pattern.split("");
    for (var c = 0; c < chars.length; c++) {
      var ch = chars[c];
      (function (ch, at) {
        if (ch === ".") {
          setTimeout(function () { noteEl.textContent = "…rest, the length of a breath…"; }, at);
        } else {
          var note = LETTER_NOTE[ch];
          setTimeout(function () {
            strike(note);
            noteEl.textContent = "…the " + note + " gong.";
          }, at);
        }
      })(ch, t);
      t += ch === "." ? REST : BEAT;
    }
    setTimeout(function () {
      busy = false;
      for (var i = 0; i < strikeBtns.length; i++) strikeBtns[i].disabled = false;
      noteEl.textContent = "The message is on the thread. The far ridge has it.";
    }, t + 1400);
  }
})();
