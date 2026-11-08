// The Pledge-Counter: a dinner run like a loan at the House of Wuhsha.
(function () {
  var RATE = 0.05; // 5% per month on the outstanding balance
  var form = document.getElementById("pledge-form");
  if (!form) return;

  var principalEl = document.getElementById("principal");
  var monthsEl = document.getElementById("months");
  var outRate = document.getElementById("out-rate");
  var outInterest = document.getElementById("out-interest");
  var outTotal = document.getElementById("out-total");

  function dinars(n) {
    return n.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " dinars";
  }

  function run() {
    var principal = parseFloat(principalEl.value) || 0;
    var months = Math.min(12, Math.max(1, Math.round(parseFloat(monthsEl.value) || 1)));
    monthsEl.value = months;

    var balance = principal;
    var interestTotal = 0;
    var firstMonthRate = 0;

    for (var m = 1; m <= months; m++) {
      var interest = balance * RATE;
      if (m === 1) firstMonthRate = interest;
      interestTotal += interest;
      balance += interest;
    }

    outRate.textContent = dinars(firstMonthRate);
    outInterest.textContent = dinars(interestTotal);
    outTotal.textContent = dinars(principal + interestTotal) +
      " — " + months + " month" + (months === 1 ? "" : "s") + " on the counter";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    run();
  });

  run();
})();
