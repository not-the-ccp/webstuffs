/* The Foundry Table — bronze alloy reckoner */
(function () {
  "use strict";

  var slider = document.getElementById("tin");
  var out = document.getElementById("tin-out");
  var verdict = document.getElementById("verdict");
  var swatch = document.getElementById("swatch");
  var trade = document.getElementById("trade");
  if (!slider || !verdict) return;

  // Copper-red to a pale, tin-heavy grey, as the tin share rises.
  var copper = [184, 115, 51];
  var paleTin = [146, 124, 96];

  function metalColour(tin) {
    var t = tin / 30;
    var r = Math.round(copper[0] + (paleTin[0] - copper[0]) * t);
    var g = Math.round(copper[1] + (paleTin[1] - copper[1]) * t);
    var b = Math.round(copper[2] + (paleTin[2] - copper[2]) * t);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  function copperShare(tin) {
    var c = 100 - tin;
    return c % 10 === 0 ? c : c;
  }

  function verdictText(tin) {
    if (tin === 0) {
      return "No tin at all: that is still copper, and the apology stands exactly as written. I am sorry.";
    }
    if (tin < 5) {
      return copperShare(tin) + " parts copper to " + tin + " of tin: harder than the old pot, and you can taste the tin in the first pour. Better, but not yet bronze.";
    }
    if (tin < 12) {
      return "About " + Math.round(100 / tin) + " parts copper to one of tin: classic kettle bronze. The pot is honest, and it is, at last, real.";
    }
    if (tin < 18) {
      return tin + " percent tin: ring bronze — bright, hard, a little proud. It would sound at the pass of the cider farm and be heard all the way down to the Wnion.";
    }
    if (tin < 25) {
      return "Past eighteen percent and the kettle grows brittle. It would crack before the hay bales were out, and I would have had a second apology to write.";
    }
    return "At " + tin + " percent tin this is a monument, not a pot. We shall keep it by the press where it can be admired, and serve the five thousand diners from an honest kettle instead.";
  }

  function tradeText() {
    return "In trade, per the old custom of the producing areas: forty litres of pressed cider, two hay bales, one well-behaved dog, and no further misnaming of metals. Copper for your bronze, and the kettle comes home right.";
  }

  function update() {
    var tin = parseInt(slider.value, 10);
    out.textContent = tin;
    swatch.style.background = metalColour(tin);
    verdict.textContent = (trade.checked ? tradeText() + " " : "") + verdictText(tin);
  }

  slider.addEventListener("input", update);
  trade.addEventListener("change", update);
  update();
})();
