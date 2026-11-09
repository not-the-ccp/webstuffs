/* Pay-book reckoning, Chapter VI — the Truceless War */
(function () {
  "use strict";

  var form = document.getElementById("paybook-form");
  if (!form) return;

  var DRACHMA_GRAMS = 4.3;
  var DRACHMAE_PER_DENARIUS = 4;

  function fmt(n) {
    if (!isFinite(n)) return "—";
    return Math.round(n).toLocaleString("en-US");
  }

  function compute() {
    var men = parseFloat(document.getElementById("pb-soldiers").value) || 0;
    var months = parseFloat(document.getElementById("pb-months").value) || 0;
    var wage = parseFloat(document.getElementById("pb-wage").value) || 0;
    var days = parseFloat(document.getElementById("pb-days").value) || 30;

    var drachmae = men * months * days * wage;
    var denarii = drachmae / DRACHMAE_PER_DENARIUS;
    var grams = drachmae * DRACHMA_GRAMS;
    var tonnes = grams / 1e6;

    document.getElementById("out-drachmae").textContent = fmt(drachmae);
    document.getElementById("out-denarii").textContent = fmt(denarii);
    document.getElementById("out-grams").textContent =
      grams >= 1000 ? fmt(grams / 1000) + " kg" : fmt(grams) + " g";

    var verdict;
    if (men <= 0 || drachmae <= 0) {
      verdict = "No body entered; the chest is undisturbed.";
    } else if (tonnes < 1) {
      verdict = "The chest covers this month. Post the notice in red ochre and keep the table moving.";
    } else if (tonnes < 10) {
      verdict = "The treasury will bleed a season for this; it is the price of the porches, and the board has paid worse.";
    } else {
      verdict = "This is the weight that mutinies: leave the body this long unpaid and the next chapter writes itself at the pay table.";
    }
    document.getElementById("out-verdict").textContent = verdict;
  }

  form.addEventListener("input", compute);
  form.addEventListener("submit", function (e) { e.preventDefault(); compute(); });
  compute();
})();
