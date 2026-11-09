/* Bench Log No. 9 — The Sudden. The drum turns one name at a time, in order, and no other order.
   The trigger takes one out of the row. The reel counter runs unasked. */
(function () {
  "use strict";

  var ROLL = [
    "W. A. HOLT · ASHBOURNE · 1916",
    "T. E. BARKER · DERBY · 1917",
    "J. N. CLIFT · MATLOCK TOWN · 1915",
    "S. O. DOWNEY · RICHMOND · 1916",
    "H. P. EGGERTON · BURTON ON TRENT · 1917",
    "A. R. FITZGIBBON · ASHDON · 1918",
    "C. M. GARNETT · LONGWORTH · 1916",
    "E. L. HALLIWELL · ASHBY DE LA ZOUCH · 1917",
    "F. J. IRONSIDE · CHESTERFIELD · 1915",
    "G. W. KETTLE · SWINDON · 1918",
    "B. D. LINDSAY · DERBY · 1916",
    "O. V. MAUGHAN · LECESTER · 1917",
    "R. T. NUNNERY · ASHFORD · 1916",
    "P. H. OSBORN · LONGMARTON · 1917"
  ];
  var TOTAL = 2833;

  var drumName = document.getElementById("drumName");
  var drumCount = document.getElementById("drumCount");
  var gravel = document.getElementById("gravel");
  var reel = document.getElementById("reel");
  var machine = document.getElementById("machine");

  if (!drumName || !drumCount) return;

  var line = 1;
  var fallen = 0;

  function fmt(n) {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function currentName() {
    return ROLL[(line - 1) % ROLL.length];
  }

  function paintDrum() {
    drumName.style.opacity = "0";
    setTimeout(function () {
      drumName.textContent = currentName();
      drumCount.textContent = "line " + fmt(line) + ", of " + fmt(TOTAL);
      drumName.style.opacity = "1";
    }, 130);
  }

  function clickRatchet() {
    line += 1;
    paintDrum();
  }

  function pullTrigger() {
    fallen += 1;
    var card = document.createElement("span");
    card.className = "fallen";
    card.textContent = currentName();
    card.style.left = (12 + ((fallen * 19) % 62)) + "%";
    gravel.appendChild(card);
    while (gravel.children.length > 6) gravel.removeChild(gravel.firstChild);
    machine.classList.add("sudden");
    setTimeout(function () {
      machine.classList.remove("sudden");
      line += 1; /* the row closes up; the drum itself did not move while the needle was up */
      paintDrum();
    }, 1600);
  }

  var clickBtn = document.getElementById("clickBtn");
  var triggerBtn = document.getElementById("triggerBtn");
  if (clickBtn) clickBtn.addEventListener("click", clickRatchet);
  if (triggerBtn) triggerBtn.addEventListener("click", pullTrigger);

  /* the drum of its own running, one part per meeting */
  setInterval(function () {
    if (machine.classList.contains("sudden")) return;
    line += 1;
    paintDrum();
  }, 2400);

  /* the reel counter, attic unit No. 2 — it keeps running without once being asked to */
  var reelVal = 11902;
  setInterval(function () {
    reelVal += 1;
    if (reel) reel.textContent = fmt(reelVal);
  }, 4000);
})();
