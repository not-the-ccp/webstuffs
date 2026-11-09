/* The Lamplighter's Ledger, No. 82 — the night by the quarter hour.
   Without this script all six turn cards are written in the ledger hand
   in the page itself; the machinery here only lets a reader choose a turn. */
(function () {
  var buttons = document.querySelectorAll(".turn");
  var cards = document.querySelectorAll(".turn-card");
  if (!buttons.length || !cards.length) return;

  function show(n) {
    buttons.forEach(function (b) {
      var on = b.dataset.turn === n;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    cards.forEach(function (c) {
      c.classList.toggle("is-active", c.dataset.turn === n);
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { show(b.dataset.turn); });
  });

  show("1");
})();
