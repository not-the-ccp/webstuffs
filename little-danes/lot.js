/* Lot 61 — a little live auction. The page reads fully without this. */
(function () {
  var gavel = document.getElementById("gavel");
  var amount = document.getElementById("bid-amount");
  var line = document.getElementById("bidline");
  if (!gavel || !amount || !line) return;

  var bids = [18500, 19000, 19500, 20500, 21000, 22000, 23000, 24000, 25000, 26000];
  var i = 0;

  function money(n) { return "DKK " + n.toLocaleString("en-US"); }

  gavel.addEventListener("click", function () {
    if (i < bids.length) {
      gavel.disabled = true;
      step(300);
    }
  });

  function step(delay) {
    var timer = setInterval(function () {
      if (i < bids.length) {
        i += 1;
        amount.textContent = money(bids[i - 1]);
        if (i === bids.length) {
          clearInterval(timer);
          setTimeout(sold, 700);
        }
      }
    }, delay * 3);
  }

  function sold() {
    line.classList.add("sold");
    var stamp = document.createElement("span");
    stamp.className = "sold-stamp";
    stamp.textContent = "SOLD · HAMMER " + money(bids[bids.length - 1]);
    line.appendChild(stamp);
    gavel.textContent = "Struck";
  }
})();
