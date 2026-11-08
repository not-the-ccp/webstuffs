/* Lot 714 — the room keeps bidding until the hammer falls at 11:04. */
(function () {
  "use strict";

  var bids = document.querySelector("[data-bids]");
  if (!bids) return;

  var count = parseInt(bids.textContent, 10) || 118;

  function tick() {
    // the room bids again, but the room is patient
    if (count < 143) {
      count += 1;
      bids.textContent = String(count);
      bids.classList.add("live");
      setTimeout(function () { bids.classList.remove("live"); }, 400);
    }
    setTimeout(tick, 2500 + Math.random() * 3500);
  }
  setTimeout(tick, 2000);
})();
