/* Lot 27 — a little live auction. The page reads fully without this. */
(function () {
  var gavel = document.getElementById("gavel");
  var amount = document.getElementById("bid-amount");
  var line = document.getElementById("bidline");
  if (!gavel || !amount || !line) return;

  var bids = [1200, 1250, 1300, 1400, 1450, 1500, 1600, 1650, 1700];
  var i = 0;
  var timer = null;

  function money(n) {
    return "$" + n.toLocaleString("en-US");
  }

  gavel.addEventListener("click", function () {
    if (i < bids.length) {
      gavel.disabled = true;
      step(350);
    }
  });

  function step(delay) {
    timer = setInterval(function () {
      if (i < bids.length) {
        i += 1;
        amount.textContent = money(bids[i - 1]);
        if (i === bids.length) {
          clearInterval(timer);
          setTimeout(sold, 900);
        }
      }
    }, delay * 4);
  }

  function sold() {
    line.classList.add("sold");
    var stamp = document.createElement("span");
    stamp.className = "sold-stamp";
    stamp.textContent = "SOLD";
    line.insertBefore(stamp, gavel);
    gavel.disabled = true;
    gavel.textContent = "Hammer down";
  }
})();
