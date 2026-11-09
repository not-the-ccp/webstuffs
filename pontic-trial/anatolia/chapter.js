// FM-24, Chapter 3 — the desk refuses to strike a name.
(function () {
  var offered = 0;
  var btn = document.getElementById("gavelBtn");
  var count = document.getElementById("gavelCount");
  if (!btn || !count) return;

  var refuse = [
    "refused: the bench has read the ledger, not struck it",
    "refused: a name kept in a book outlives a name kept in a head",
    "refused: the record is kept as it is",
    "refused: the address is the record and the interstate sees"
  ];

  btn.addEventListener("click", function () {
    offered += 1;
    count.textContent = "strikes offered: " + offered + " · names struck: 0 — " +
      refuse[(offered - 1) % refuse.length];
  });
})();
