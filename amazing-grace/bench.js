// Build Log No. 41 — a small chapel bell at the foot of the page.
(function () {
  var btn = document.getElementById("ring");
  var line = document.getElementById("bell-line");
  if (!btn || !line) return;
  var phrases = [
    "The bell is up.",
    "The bell says grace.",
    "One peal, four verses.",
    "The bell rings above the street."
  ];
  var i = 0;

  function toll() {
    var ctx;
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      return;
    }
    var t = ctx.currentTime;
    [0, 0.9].forEach(function (delay) {
      var o = ctx.createOscillator();
      var g = ctx.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(392, t + delay);
      o.frequency.exponentialRampToValueAtTime(196, t + delay + 1.4);
      g.gain.setValueAtTime(0.0001, t + delay);
      g.gain.exponentialRampToValueAtTime(0.25, t + delay + 0.05);
      g.gain.exponentialRampToValueAtTime(0.0001, t + delay + 1.6);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(t + delay);
      o.stop(t + delay + 1.7);
    });
  }

  btn.addEventListener("click", function () {
    toll();
    line.style.opacity = "0.4";
    setTimeout(function () {
      line.style.opacity = "1";
      i = (i + 1) % phrases.length;
      line.textContent = phrases[i];
    }, 350);
  });
})();
