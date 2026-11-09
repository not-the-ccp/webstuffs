/* Serial No. 6,412 — the watch bell.
   The bell is silent until it is struck; it rings at twelve,
   and at twelve the watch changes. */
(function () {
  "use strict";

  var bell = document.querySelector(".bell");
  var readout = document.getElementById("bell-readout");
  if (!bell || !readout) return;

  var strikes = 0;
  var when = parseInt(bell.getAttribute("data-when") || "12", 10);

  var lines = [
    "The bell is silent. It will ring at twelve, and at twelve the watch changes.",
    "One strike. The junior clerk copies the almanac page into the banquet book.",
    "Two strikes. The frost is on the glass; it lifts only when the almanac says 2 a.m.",
    "Three strikes. The Master walks the line of doors, room by room, and gives the word.",
    "Four strikes. A player who cannot quote the word is a bugbear until the bell rings at twelve."
  ];

  function setLine(text, chime) {
    readout.textContent = text;
    readout.classList.remove("chimed");
    // restart the fade animation
    void readout.offsetWidth;
    if (chime) readout.classList.add("chimed");
  }

  bell.addEventListener("click", function () {
    bell.classList.remove("ringing");
    void bell.offsetWidth;
    bell.classList.add("ringing");

    strikes = (strikes + 1) % (when + 1);
    if (strikes >= when) {
      setLine("Twelve. The watch changes at twelve. The Master may draw, and may draw once.", true);
      strikes = 0;
    } else {
      setLine(lines[strikes] || lines[0], false);
    }
  });
})();
