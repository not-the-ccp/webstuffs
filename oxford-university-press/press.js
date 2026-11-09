// The Press — the Delegates' roll, rulebook page 14
(function () {
  var delegates = [
    "Dr. A. Merton, Secretary to the Delegates",
    "Dr. C. Radcliffe",
    "the Keeper of the First Book",
    "Dr. E. Vachell",
    "the Paterson Ford Reader",
    "Dr. H. Wren",
    "Dr. S. Enoggera",
    "the Vice-Chancellor's Steward",
    "Dr. B. Lignum",
    "the Cataloguer of the Bank",
    "Dr. M. Lomandra",
    "Dr. K. Kimberley",
    "the Strand Keeper",
    "Dr. P. Vacy",
    "the Senior Chair, 1534"
  ];

  var tasks = [
    { name: "print", points: 3 },
    { name: "catalogue", points: 2 },
    { name: "sell", points: 1 },
    { name: "charter", points: 0 }
  ];

  var year = 1478;
  var grand = 0;
  var finished = false;

  var tbody = document.querySelector("#delegate-table tbody");
  var status = document.getElementById("sim-status");
  var roundTotal = document.getElementById("sim-round-total");
  var grandTotal = document.getElementById("sim-grand-total");
  var button = document.getElementById("print-round");

  function fillTable() {
    tbody.innerHTML = "";
    delegates.forEach(function (name) {
      var tr = document.createElement("tr");
      var tdName = document.createElement("td");
      tdName.textContent = name;
      var tdDuty = document.createElement("td");
      tdDuty.textContent = "—";
      var tdPts = document.createElement("td");
      tdPts.textContent = "";
      tr.appendChild(tdName);
      tr.appendChild(tdDuty);
      tr.appendChild(tdPts);
      tbody.appendChild(tr);
    });
  }

  function roll() {
    if (finished) return;
    var roll = delegates.map(function () {
      return tasks[Math.floor(Math.random() * tasks.length)];
    });
    var charterCount = roll.filter(function (t) { return t.name === "charter"; }).length;
    var charterBonus = (year >= 1586 && charterCount >= 4) ? 5 : 0;
    var total = roll.reduce(function (sum, t) { return sum + t.points; }, 0) + charterBonus;

    var rows = tbody.rows;
    for (var i = 0; i < rows.length; i++) {
      var duty = rows[i].cells[1];
      var pts = rows[i].cells[2];
      duty.textContent = roll[i].name;
      duty.className = "duty-" + roll[i].name;
      pts.textContent = roll[i].points || "";
    }

    grand += total;
    roundTotal.textContent = total + (charterBonus ? " (incl. charter bonus 5)" : "");
    grandTotal.textContent = grand;

    var notes = [];
    if (year === 1586) notes.push("The decree is read: the press holds the legal right to print books.");
    if (charterBonus) notes.push("Four Delegates at the crown table: the charter bonus stands.");
    if (charterCount && !charterBonus && year >= 1586) notes.push("The crown table is kept warm; the charter waits on " + (4 - charterCount) + " more.");

    year += 1;
    if (year >= 1600) {
      finished = true;
      button.textContent = "The sitting ends, 1600";
      status.textContent = "The counter reads 1600. The sitting ends with the press standing at " + grand +
        " points. The paddy is led to the bank and fed on seeds of the ledger, both kept.";
    } else {
      status.textContent = "The year stands at " + year + "." + (notes.length ? " " + notes.join(" ") : " ") +
        " The paddy takes one space down the river bank.";
    }
  }

  fillTable();
  button.addEventListener("click", roll);
})();
