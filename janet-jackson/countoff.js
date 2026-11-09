/* FM 8-12 · Chapter 4 — the count-off console (auxiliary) */
(function () {
  "use strict";

  var bpmEl = document.getElementById("bpm");
  var bpmRead = document.getElementById("bpm-read");
  var cells = Array.prototype.slice.call(document.querySelectorAll("#grid .cell"));
  var callEl = document.getElementById("call");
  var btnIn = document.getElementById("count-in");
  var btnRun = document.getElementById("run");
  var btnStop = document.getElementById("stop");

  var ctx = null;
  var timer = null;
  var step = 0;
  var mode = null; // "in" or "run"
  var phrases = 0;

  function ensureCtx() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (AC) ctx = new AC();
    }
    if (ctx && ctx.state === "suspended") ctx.resume();
  }

  function beep(accent) {
    if (!ctx) return;
    var t = ctx.currentTime;
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.value = accent ? 1174 : 784;
    gain.gain.setValueAtTime(accent ? 0.18 : 0.12, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.13);
  }

  function clearHot() {
    cells.forEach(function (c) { c.classList.remove("hot"); });
  }

  function stop() {
    if (timer) { clearInterval(timer); timer = null; }
    mode = null;
    clearHot();
    callEl.textContent = "stand by";
  }

  function tick() {
    var n = step % 8 + 1;
    var accent = (mode === "in") ? n === 4 : n === 1;
    beep(accent);
    clearHot();
    var idx = (mode === "in") ? n + 3 : n - 1;
    cells[idx].classList.add("hot");
    callEl.textContent = mode === "in"
      ? "count-in: " + n
      : "phrase " + (phrases + 1) + " · count " + n;
    step++;
    if (mode === "in" && step === 4) {
      // count-in complete: hand off to eights
      mode = "run";
      phrases = 0;
      step = 0;
      callEl.textContent = "five, six, seven, eight — off";
    } else if (mode === "run" && step % 8 === 0) {
      phrases++;
    }
  }

  function startSchedule(m) {
    stop();
    ensureCtx();
    mode = m;
    step = 0;
    phrases = 0;
    beep(true); // the set beat
    timer = setInterval(tick, 60000 / bpmEl.value);
  }

  bpmEl.addEventListener("input", function () {
    bpmRead.textContent = bpmEl.value;
    if (timer) {
      var had = mode;
      clearInterval(timer);
      timer = setInterval(tick, 60000 / bpmEl.value);
      void had;
    }
  });

  btnIn.addEventListener("click", function () {
    startSchedule("in");
    phrases = 0;
  });
  btnRun.addEventListener("click", function () {
    startSchedule("run");
  });
  btnStop.addEventListener("click", stop);
})();
