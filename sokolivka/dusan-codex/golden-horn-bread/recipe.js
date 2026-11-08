/* The Ledger of the City, 330 to 1923 — a slider over the stamped years on the tin's side. */
(function () {
  var events = [
    { year: 330, era: "the New Rome", text: "Constantine gives the New Rome the name of the emperor. The Greeks on the hill keep calling it Byzantium, and they keep calling it that for years." },
    { year: 421, era: "the walls", text: "The Theodosian line goes up along the sea side of the peninsula, and the city stops being a question." },
    { year: 1204, era: "the Latin city", text: "The Fourth Crusade misses its mark; seven years under the Latin banners, and the Horn keeps the count." },
    { year: 1261, era: "the restoration", text: "Palaiologos comes in through the Horn, and the city is Byzantine again for the last long stretch." },
    { year: 1453, era: "the takeover", text: "The Ottoman Empire takes the city; the peninsula, the Horn, and the Marmara go on unchanged, and the capital changes hands in name and in minaret." },
    { year: 1922, era: "the abolition", text: "The Ottoman sultanate is abolished, and the last line of the ledger of capitals is written." },
    { year: 1923, era: "the republic", text: "The Republic of Turkey is founded, and the city at its core keeps the same water and the same islands." }
  ];

  var box = document.getElementById("scrubber");
  var input = document.getElementById("year");
  var yearOut = document.getElementById("year-out");
  var eraOut = document.getElementById("era-out");
  var ledgerOut = document.getElementById("ledger-out");
  var staticList = document.getElementById("ledger-static");

  if (!box || !input) return;

  function render() {
    var y = parseInt(input.value, 10);
    var current = events[0];
    for (var i = 0; i < events.length; i++) {
      if (events[i].year <= y) current = events[i];
      else break;
    }
    yearOut.textContent = current.year;
    eraOut.textContent = current.era;
    ledgerOut.textContent = current.text;
  }

  input.addEventListener("input", render);
  if (staticList) staticList.style.display = "none";
  box.hidden = false;
  render();
})();
