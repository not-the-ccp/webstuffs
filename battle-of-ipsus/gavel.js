/* Upper Room, by lamplight — the gavel line */
(function () {
  var btn = document.getElementById("gavel");
  var amount = document.getElementById("bid-amount");
  if (!btn || !amount) return;

  var open = 4500;
  var current = null;
  var bids = [
    4500, 4600, 4750, 4800, 5000, 5150, 5300, 5500, 5750, 6000, 6250, 6500
  ];
  var i = 0;

  function fmt(n) {
    return "£" + n.toLocaleString("en-GB");
  }

  btn.addEventListener("click", function () {
    if (current === null) {
      current = bids[i];
      i += 1;
      amount.textContent = "£" + current.toLocaleString("en-GB") + " — " +
        ["the dealer from Bursa", "a collector of the Halys road",
         "the man with the red column", "the buyer by proxy",
         "a hand at the back of the room", "the firm itself"][
          (i - 1) % 6
        ];
      btn.textContent = "Strike the gavel";
      return;
    }

    if (i < bids.length) {
      current = bids[i];
      i += 1;
      amount.textContent = "£" + current.toLocaleString("en-GB");
    } else {
      amount.textContent = "sold at " + fmt(current) + " — the plain is crated";
      btn.disabled = true;
      btn.textContent = "Sold";
    }
  });
})();
