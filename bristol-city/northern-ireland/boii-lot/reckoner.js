// Lot 41 — the bid reckoner: premium 12.5%, stamp fee 10 pence, estimate 1200–1800.
(function () {
  var LOW = 1200;
  var HIGH = 1800;
  var PREMIUM = 0.125;
  var STAMP = 0.10;

  var form = document.getElementById("reckoner");
  if (!form) return;
  var bid = document.getElementById("bid");
  var out = document.getElementById("reckoner-out");

  function money(n) {
    return "&pound;" + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function reckon() {
    var value = parseFloat(bid.value);
    if (isNaN(value) || value < 0) {
      out.innerHTML = "Enter a bid in pounds; the hammer waits.";
      return;
    }
    var premium = value * PREMIUM;
    var total = value + premium + STAMP;
    var standing;
    if (total >= HIGH) {
      standing = "at or above the high estimate; the Newry household will be watching.";
    } else if (total >= LOW) {
      standing = "inside the estimate; a reasonable bid for a people of disputed location.";
    } else {
      standing = "below the low estimate; the cataloguers have been bid under before, and kept the lot.";
    }
    out.innerHTML =
      "Total with premium and stamp: <span class=\"above\">" + money(total) + "</span> " +
      "(" + money(value) + " + " + money(premium) + " + " + STAMP.toFixed(2) + "p). " +
      standing.charAt(0).toUpperCase() + standing.slice(1);
  }

  bid.addEventListener("input", reckon);
  reckon();
})();
