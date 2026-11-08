/* Lot 29 — the bidding that never opens */
(function () {
  var count = document.getElementById("bidbox-count");
  var btn = document.getElementById("bid-btn");
  var note = document.getElementById("bidbox-note");
  if (!count || !btn || !note) return;

  var lines = [
    "The committee is taking no bids, and is not taking any bids, and will not take any bids. This is not a defect. This is the lot.",
    "Bid declined: judgment suspended. The hammer remains, as the jar remains, in the air.",
    "Your bid has been returned with the lid on. The committee thanks you for suspending it.",
    "No bid taken. Neither belief nor disbelief will be entered on the docket. The apricot stays in the water."
  ];

  var i = 0;
  btn.addEventListener("click", function () {
    i = (i + 1) % lines.length;
    note.textContent = lines[i];
    count.textContent = "Bids received: 0 (one attempted, one withheld)";
  });
})();
