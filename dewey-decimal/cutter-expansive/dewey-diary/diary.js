/* Diary, entry 41 — small touches for the drawer. */
(function () {
  "use strict";

  // Stamp the entry's filing date onto the ledger line, in the cabin's
  // own hand, once the page has settled.
  var ledger = document.querySelector(".ledger-line");
  if (ledger) {
    setTimeout(function () {
      ledger.style.transition = "opacity 1.2s ease";
      ledger.style.opacity = "0";
      setTimeout(function () {
        ledger.textContent += " · FILED 12 DEC 2012, 11:40";
        ledger.style.opacity = "1";
      }, 400);
    }, 900);
  }

  // The bulletin card sits slightly crooked; give it a second, slower
  // settle, the way a typed card does when it is laid on the pie stand.
  var card = document.querySelector("blockquote.bulletin");
  if (card) {
    card.style.transition = "transform 0.9s ease";
    setTimeout(function () { card.style.transform = "rotate(0.3deg)"; }, 700);
  }
})();
