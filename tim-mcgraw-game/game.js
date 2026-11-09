/* The Signal — fiddle gauge · Manual No. 006-A */
(function () {
  var rail = document.getElementById("rail");
  var marker = document.getElementById("marker");
  var send = document.getElementById("send");
  var calls = document.getElementById("calls");
  var verdict = document.getElementById("verdict");
  if (!rail || !marker || !send) return;

  var callsMade = 0;
  var remembered = 0;
  var t = 0;
  var SPEED = 0.014; // rail-fractions per frame
  var P = 0.22; // patch width (fractions, matches style.css)
  var T0 = 0.35; // patch left edge (matches style.css)
  var running = false;

  function pos() {
    // triangle wave across the rail
    var x = (t % 2) < 1 ? (t % 2) : 2 - (t % 2);
    return x;
  }

  function frame() {
    t += SPEED;
    marker.style.left = (pos() * 100).toFixed(2) + "%";
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  send.addEventListener("click", function () {
    if (callsMade >= 4) {
      reset();
      return;
    }
    callsMade += 1;
    var x = pos();
    var inPatch = x >= T0 && x <= T0 + P;
    if (inPatch) remembered += 1;
    calls.textContent = "Calls made: " + callsMade + " of 4";
    verdict.textContent = inPatch ? "Remembered." : "Static on the line.";
    if (callsMade >= 4) {
      send.textContent = "Play it Again";
      verdict.textContent += " " + closing(remembered);
    }
  });

  function closing(r) {
    if (r === 4) return "A full summer; the ledger closes with the boy's name still legible.";
    if (r === 3) return "Three calls remembered — almost, which is what most summers are.";
    return "Static on the line; the whole side plays again before the window opens.";
  }

  function reset() {
    callsMade = 0;
    remembered = 0;
    calls.textContent = "Calls made: 0 of 4";
    verdict.textContent = "";
    send.textContent = "Send the Signal";
  }
})();
