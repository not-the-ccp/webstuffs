/* The Goygol Tannery — gate die demonstration.
   Rolls the six-faced gate die and enters the result in the ledger's
   fixed form. Purely decorative; the manual stands without it. */

(function () {
  var faces = [
    { name: "open", cls: "", line: "gate open, hours kept, the line is not written." },
    { name: "open", cls: "", line: "gate open, hours kept, the line is not written." },
    { name: "shut", cls: "shut", line: "gate shut; the key stays on the yard." },
    { name: "shut", cls: "shut", line: "gate shut; the key stays on the yard." },
    { name: "frost", cls: "frost", line: "door, 03:20, frost — a frost token on the yard." },
    { name: "hens", cls: "hens", line: "the hens come out; the gate is closed again first." }
  ];

  var die = document.getElementById("gate-die");
  if (!die) return;
  var faceEl = document.getElementById("die-face");
  var ledgerEl = document.getElementById("die-ledger");
  var rollCount = 0;

  document.getElementById("die-roll").addEventListener("click", function () {
    rollCount += 1;
    var f = faces[Math.floor(Math.random() * faces.length)];
    faceEl.textContent = f.name;
    faceEl.className = "die-face" + (f.cls ? " " + f.cls : "");

    if (f.name === "frost") {
      ledgerEl.textContent = "The plaintiff says the defendant is fined in the ledger. — entered in ink, one copy to the office, one to Baku, one to the bench (roll " + rollCount + ")";
    } else {
      ledgerEl.textContent = f.line + " (roll " + rollCount + ")";
    }
    ledgerEl.classList.remove("inked");
    // force reflow so the animation replays
    void ledgerEl.offsetWidth;
    ledgerEl.classList.add("inked");
  });
}());
