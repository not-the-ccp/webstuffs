// The Barge & Bell, No. 12 — the passage counter.
// The same reckoning stands in the table for readers without this script.

var STATIONS = {
  reading:   { name: "Reading",            mile: 0,  locks: 0 },
  newbury:   { name: "Newbury",            mile: 13, locks: 26 },
  devizes:   { name: "Devizes",            mile: 42, locks: 74 },
  bradford:  { name: "Bradford-on-Avon",   mile: 57, locks: 100 },
  bath:      { name: "Bath",               mile: 66, locks: 102 },
  bristol:   { name: "Bristol",            mile: 87, locks: 105 }
};

function makePassage() {
  var fromKey = document.getElementById("from-pt").value;
  var toKey = document.getElementById("to-pt").value;
  var from = STATIONS[fromKey];
  var to = STATIONS[toKey];
  var readout = document.getElementById("readout");
  var line = document.getElementById("lockline");
  if (!from || !to) return;

  if (fromKey === toKey) {
    readout.textContent = from.name + " to " + to.name +
      ": the same berth. The counter recommends tea and a lockage of nothing.";
    line.innerHTML = "";
    return;
  }

  var miles = Math.abs(from.mile - to.mile);
  var locks = Math.abs(from.locks - to.locks);
  var pluralLocks = locks === 1 ? "lock" : "locks";
  readout.textContent = from.name + " to " + to.name + ": " +
    miles + " mile" + (miles === 1 ? "" : "s") + ", " +
    locks + " " + pluralLocks + " to pass. The lock-line below marks them one for one.";

  line.innerHTML = "";
  for (var i = 0; i < locks; i++) {
    var chip = document.createElement("span");
    // The first five locks light in brick, as if the boat were passing them now.
    if (i < Math.min(locks, 5)) chip.className = "lit";
    chip.style.transitionDelay = (i * 60) + "ms";
    line.appendChild(chip);
  }
}

document.getElementById("run-passage").addEventListener("click", makePassage);
// Report the default pairing once on arrival, so the readout matches the selects.
makePassage();
