/* The Crossing Diary — the ledger at the foot of the fourteenth day.
   Mean rate for the mid-Atlantic margin: 2.5 cm/yr; one jangada length: 5.5 m. */

(function () {
  var RATE_CM = 2.5;   // centimetres per year, mean for this margin
  var JANGADA_M = 5.5; // metres, measured from the landing in 2011
  var ORTELIUS = 1596;
  var BERLIN = 1912;

  var input = document.getElementById("year-in");
  var button = document.getElementById("year-go");
  var out = document.getElementById("open-out");
  if (!input || !button || !out) return;

  function fmt(n) {
    return n.toLocaleString("en-GB", { maximumFractionDigits: 1 });
  }

  function row(yearFrom, label) {
    var years = year - yearFrom;
    var metres = (years * RATE_CM) / 100;
    var jangadas = metres / JANGADA_M;
    return label + ": " + years + " years &times; " + RATE_CM +
      " cm &asymp; " + fmt(metres) + " m &asymp; " + fmt(jangadas) +
      (Math.abs(jangadas - Math.round(jangadas)) < 0.05 ? " jangada lengths" : " jangada lengths");
  }

  function close(year) {
    out.innerHTML =
      row(ORTELIUS, "Since Ortelius, 1596") +
      ". Since Berlin, 1912: " + (year - BERLIN) + " years &asymp; " +
      fmt((year - BERLIN) * RATE_CM / 100) + " m &asymp; " +
      fmt((year - BERLIN) * RATE_CM / 100 / JANGADA_M) + " jangada lengths.";
  }

  button.addEventListener("click", function () {
    var year = parseInt(input.value, 10);
    if (isNaN(year) || year < ORTELIUS || year > 3000) {
      out.textContent = "Log the year on every entry: the ledger closes to a year between 1596 and 3000.";
      return;
    }
    close(year);
  });

  input.addEventListener("change", function () {
    button.click();
  });

  // Close the ledger to the printed year on load, so the output always agrees with the form.
  close(parseInt(input.value, 10) || 2026);
})();
