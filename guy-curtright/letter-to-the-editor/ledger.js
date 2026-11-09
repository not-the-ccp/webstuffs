/* The Half-Inning Ledger — outs make half-innings, two half-innings make an
   inning, eighteen half-innings make a complete game. The corner kept count. */
(function () {
  var outs = 0;
  var halfInnings = 0;
  var runs = 0;
  var sideUp = false; // false: bottom (batting shown), true: top

  var pips = document.querySelectorAll(".out-pip");
  var sideEl = document.getElementById("side");
  var halfEl = document.getElementById("halfInnings");
  var inEl = document.getElementById("innings");
  var gamesEl = document.getElementById("games");
  var runsEl = document.getElementById("runs");

  function render() {
    pips.forEach(function (pip, i) {
      pip.classList.toggle("in", i < outs);
    });
    sideEl.textContent = sideUp
      ? "Sides have switched — top of the half-inning"
      : "Batting: bottom of the half-inning";
    halfEl.textContent = halfInnings;
    inEl.textContent = Math.floor(halfInnings / 2);
    gamesEl.textContent = Math.floor(halfInnings / 18);
    runsEl.textContent = runs;
  }

  function flip() {
    outs = 0;
    halfInnings += 1;
    sideUp = !sideUp;
    render();
  }

  document.getElementById("outBtn").addEventListener("click", function () {
    if (outs < 3) {
      outs += 1;
      if (outs === 3) {
        render();
        setTimeout(flip, 450);
      } else {
        render();
      }
    }
  });

  document.getElementById("runBtn").addEventListener("click", function () {
    runs += 1;
    render();
  });

  document.getElementById("resetBtn").addEventListener("click", function () {
    outs = 0;
    halfInnings = 0;
    runs = 0;
    sideUp = false;
    render();
  });

  render();
})();
