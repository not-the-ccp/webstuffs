/* Gallery Placard No. 14 — read the ledger card aloud, once, per selection. */
(function () {
  var entries = {
    "all-of-creation": {
      title: "All of Creation",
      text: "The lead single, sent to the stations in March 2010, a month before the album itself. It peaked at number one on Billboard's Christian Songs chart and held the top position for ten weeks; the station log books of the period keep a hand-marked tick once a week for the length of the run.",
      ticks: 10
    },
    "love-is": {
      title: "Love Is",
      text: "Sent in as the summer record in August 2010, the second of the three singles. It reached number one on the Christian Songs chart and held it for seven weeks, which the label's chart log marks as the longest run after the lead single.",
      ticks: 7
    },
    "title-track": {
      title: "The Generous Mr. Lovewell",
      text: "The title track, sent last, in November 2010. It likewise reached number one on the Christian Songs chart and held the position for five weeks; by then the album had sold over 88,000 copies in its first week and sat at number three on the Billboard 200.",
      ticks: 5
    }
  };

  var buttons = document.querySelectorAll(".tracker-buttons button");
  var readout = document.getElementById("readout");
  if (!readout || buttons.length === 0) { return; }

  function ticks(t) {
    var out = "";
    for (var i = 0; i < t; i++) { out += "\u2713 "; }
    return out;
  }

  Array.prototype.forEach.call(buttons, function (btn) {
    btn.setAttribute("aria-pressed", "false");
    btn.addEventListener("click", function () {
      var entry = entries[btn.getAttribute("data-single")];
      if (!entry) { return; }

      Array.prototype.forEach.call(buttons, function (b) {
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });

      readout.innerHTML = "";
      var p = document.createElement("p");
      p.className = "readout-entry";
      var strong = document.createElement("span");
      strong.className = "entry-title";
      strong.textContent = entry.title + " \u2014 read from the card:";
      p.appendChild(strong);
      p.appendChild(document.createTextNode(entry.text + " "));
      var tickRow = document.createElement("span");
      tickRow.className = "ticks";
      tickRow.setAttribute("aria-label", entry.ticks + " ticks, one per week at number one");
      tickRow.textContent = ticks(entry.ticks);
      p.appendChild(tickRow);
      readout.appendChild(p);
    });
  });
})();
