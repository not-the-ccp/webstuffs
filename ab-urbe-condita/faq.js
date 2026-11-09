/* Ab urbe condita — Placard No. 2: hour-marked AUC reading and bench arithmetic.
   The page is fully readable without this script; it only animates and converts. */
(function () {
  "use strict";

  function toRoman(n) {
    if (n <= 0 || n > 3999) return String(n);
    var table = [
      [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
      [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
      [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
    ];
    var out = "";
    for (var i = 0; i < table.length; i++) {
      while (n >= table[i][0]) { out += table[i][1]; n -= table[i][0]; }
    }
    return out;
  }

  // Convert a CE year (negative = BC) to AUC. No year 0: n BC is AUC (754 - n).
  function toAUC(ce) {
    if (ce > 0) return ce + 753;
    if (ce < 0) return 754 + ce; // ce negative: 754 - |ce|
    return null;
  }

  // Live gauge reading at the top of the placard.
  var live = document.getElementById("auc-live");
  if (live) {
    var base = parseInt(live.getAttribute("data-base"), 10) || 2779;
    var year = new Date().getFullYear();
    var auc = toAUC(year);
    if (auc) {
      var target = toRoman(auc);
      var ticks = 0;
      var timer = setInterval(function () {
        ticks++;
        if (ticks % 2 === 0) {
          live.textContent = target.slice(0, Math.min(target.length, ticks));
        }
        if (ticks >= target.length) {
          clearInterval(timer);
          live.textContent = target;
        }
      }, 110);
      live.title = "AUC " + auc + " (year " + year + " CE), recomputed on the hour";
    }
  }

  // Bench arithmetic.
  var input = document.getElementById("ce-input");
  var button = document.getElementById("ce-btn");
  var out = document.getElementById("ce-out");

  function convert() {
    if (!input || !out) return;
    var ce = parseInt(input.value, 10);
    if (isNaN(ce)) {
      out.textContent = "The bench needs a year: 2026, 753, or \u201327 for a BC year.";
      return;
    }
    var auc = toAUC(ce);
    if (auc === null) {
      out.textContent = "There is no year 0; the count passes from 1 BC straight to AD 1.";
      return;
    }
    var label = ce > 0 ? ce + " CE" : (Math.abs(ce) + " BC");
    out.innerHTML =
      label + " is AUC " + auc +
      ' &mdash; <span class="numerals">' + toRoman(auc) + "</span>. " +
      (ce > 0
        ? "The wall went up " + (auc - 1) + " years before this reading."
        : "This reading lies before the epoch of the other count; the founding came " +
          (auc - 1) + " years earlier still, in 753 BC.");
  }

  if (button && input) {
    button.addEventListener("click", convert);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") convert();
    });
    convert();
  }
})();
