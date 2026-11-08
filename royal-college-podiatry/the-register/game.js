/* The Register — the card drawer, first twelve cards of the deck */
(function () {
  var cards = [
    "Card 3 — Standing Order Seven: tea at five, no exceptions, and no discussion after the first cup.",
    "Card 9 — A letter from Recalde Press: the manual is revised, and the revision takes a new ISBN.",
    "Card 11 — The banner comes down. Two pence to the hall fund, and the committee thanks the ladder.",
    "Card 14 — The kettle is ready. This is not a move, but everyone pauses.",
    "Card 17 — A walnut handle arrives from the workshop, turned well. The committee pretends it is coincidence.",
    "Card 21 — Arrears, one shilling. The secretary's pencil is seen, and nobody sits down quickly.",
    "Card 26 — A visitor at the small door, carrying an instrument case. Record the visit; the Royal Collection keeps its own records.",
    "Card 29 — The Ledger is closed for the AGM. All members to their feet. Seated players may pretend.",
    "Card 33 — The minute passes unamended. The secretary may, at last, drink the cold tea.",
    "Card 37 — Beat the eggs, and arrowroot are also tenants' goods and chattels of his safety, the balm of his profession.",
    "Card 41 — Dice heard on a distant broadcast, under the interval signal. The committee rules the card void, and keeps it.",
    "Card 44 — The hall kitchen is closed for the fire of 1968. Tokens must stand at the door and remember."
  ];
  var button = document.getElementById("draw");
  var card = document.getElementById("card");
  var face = document.getElementById("card-face");
  if (!button || !card || !face) return;

  button.addEventListener("click", function () {
    var pick = cards[Math.floor(Math.random() * cards.length)];
    face.textContent = pick;
    card.classList.remove("drawn");
    // force reflow so the deal animation replays
    void card.offsetWidth;
    card.classList.add("drawn");
  });
})();
