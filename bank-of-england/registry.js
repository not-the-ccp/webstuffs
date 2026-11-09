/* BOE-ERR registry: acknowledge stamp + audit ticker */
(function () {
  var ack = document.getElementById("ack-all");
  if (ack) {
    ack.addEventListener("click", function () {
      ack.classList.toggle("acked");
      var word = document.getElementById("ack-word");
      if (word) {
        word.textContent = ack.classList.contains("acked")
          ? "ALL ENTRIES ACKNOWLEDGED"
          : "AWAITING ACKNOWLEDGMENT";
      }
    });
  }

  var lines = [
    "audit line 01: water level at the fourth bore, nominal",
    "audit line 02: twin bore gauge 4\u00bd ft., unchanged since 1896",
    "audit line 03: gate inventory, open Thursdays, confirmed",
    "audit line 04: Lothbury drawer, closed against the record",
    "audit line 05: Issue Department / Banking Department, split holds",
    "audit line 06: second since 1668, standing confirmed"
  ];
  var ticker = document.getElementById("ticker");
  if (ticker) {
    var i = 0;
    setInterval(function () {
      i = (i + 1) % lines.length;
      ticker.textContent = lines[i] + " \u00b7";
    }, 2600);
  }
})();
