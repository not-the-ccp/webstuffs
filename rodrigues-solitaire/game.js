/* The Pale Centre — a one-keeper timing game for Manual No. 9 */
(function () {
  var statusEl = document.getElementById("game-status");
  var clapperEl = document.getElementById("clapper");
  var btn = document.getElementById("call-btn");
  var tallyEl = document.getElementById("tally");

  var TOTAL_CALLS = 15;   // five calls a passage, three passages
  var BAND = { lo: 40, hi: 60 };
  var SWEEP_MS = 2600;

  var landed = 0;         // calls landed in the pale band
  var made = 0;           // calls made in the current passage
  var passage = 1;
  var running = false;
  var start = 0;
  var raf = null;

  function updateTally() {
    tallyEl.textContent = "Calls landed: " + landed + " of " + TOTAL_CALLS +
      " · Passage " + Math.min(passage, 3) + " of 3";
  }

  function sweepFrame(now) {
    var t = (now - start) / SWEEP_MS;
    if (t >= 1) {
      // The clapper ran the whole track: the fleet passes unheeded.
      resolve("Late — the crew is already on the road. The bell rests; the call is spent.");
      return;
    }
    clapperEl.style.left = (t * 100).toFixed(2) + "%";
    raf = requestAnimationFrame(sweepFrame);
  }

  function endGame() {
    statusEl.textContent = "Fifteen calls, all in the pale band. The egg tile may sit anywhere on the island; the table forgives you. Press Run the fleet again to keep the fleet out.";
    btn.textContent = "Run the fleet again";
    landed = 0;
    made = 0;
    passage = 1;
    updateTally();
  }

  function resolve(msg) {
    running = false;
    if (raf) cancelAnimationFrame(raf);
    clapperEl.style.left = "0%";
    btn.disabled = false;

    made++;
    if (msg.indexOf("Landed") === 0) {
      landed++;
      updateTally();
      if (landed >= TOTAL_CALLS) { endGame(); return; }
    }

    if (made >= 5) {
      made = 0;
      if (passage < 3) {
        passage++;
        updateTally();
        msg += " The fleet rests; the forage bag loses its smallest seeds. Passage " + passage + " of 3.";
      }
    }
    statusEl.textContent = msg;
  }

  function onCall() {
    if (!running) {
      if (btn.textContent !== "Call the bell") btn.textContent = "Call the bell";
      running = true;
      start = performance.now();
      btn.disabled = true;
      statusEl.textContent = "The escort bell sweeps. Call when the clapper sits in the pale band.";
      raf = requestAnimationFrame(sweepFrame);
      return;
    }
    var pos = (performance.now() - start) / SWEEP_MS * 100;
    if (pos < BAND.lo) {
      resolve("Early — the ship is still on the lagoon. The bell rests; the call is spent.");
    } else if (pos <= BAND.hi) {
      resolve("Landed — the fleet answers and the roost is fed for one call.");
    } else {
      resolve("Late — the crew is already on the road. The bell rests; the call is spent.");
    }
  }

  btn.addEventListener("click", onCall);
  document.addEventListener("keydown", function (e) {
    if (e.code === "Space" && document.activeElement !== btn) {
      e.preventDefault();
      onCall();
    }
  });
  updateTally();
})();
