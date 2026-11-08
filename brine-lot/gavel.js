// Lot 62 — the running count. The code does not require it, but it will let you count.
(function () {
  var seqEl = document.getElementById("seq");
  var button = document.getElementById("gavel");
  var result = document.getElementById("result");
  if (!seqEl || !button || !result) return;

  var BASES = ["A", "T", "C", "G"];
  // A deterministic "sample" in the spirit of the canteen count: 1,342 bases and one repeat.
  function sampleBases(n) {
    var out = [];
    var seed = 0x62; // Lot 62
    for (var i = 0; i < n; i++) {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      out.push(BASES[seed % 4]);
    }
    // the one repeat, at the bottom of the jar, performing no function anyone has asked it to
    var r = 1342;
    out[r] = out[7];
    out[r + 1] = out[8];
    return out;
  }

  var bases = sampleBases(1342);
  var running = 0;
  var timer = null;
  var FALLBACK = seqEl.innerHTML;

  button.addEventListener("click", function () {
    if (timer) return;
    running = 0;
    result.hidden = false;
    seqEl.textContent = "";
    var chunk = 24;
    timer = setInterval(function () {
      var next = Math.min(running + chunk, bases.length);
      seqEl.textContent = bases.slice(running, next).join(" ") +
        (next < bases.length ? " …" : "  ·  1,342 bases and one repeat · counted, not guessed");
      running = next;
      if (running >= bases.length) {
        clearInterval(timer);
        timer = null;
      }
    }, 60);
  });
})();
