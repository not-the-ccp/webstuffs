/* The Preston Bypass — visitor counter and small touches */
(function () {
  "use strict";

  // The counter: 1,192 before you, you being next.
  var digits = document.getElementById("counter");
  if (digits) {
    var base = 1192;
    var target = base + 1;
    var shown = 0;
    var timer = setInterval(function () {
      shown += 1;
      if (shown > target) shown = target;
      digits.textContent = String(shown).replace(/\d/g, function (d) {
        return "00000" + d;
      }).slice(-7);
      if (shown >= target) clearInterval(timer);
    }, 40);
  }

  // A blinking asterisk in the ticker, the old way.
  var ticker = document.querySelector(".ticker-text");
  if (ticker) {
    var star = document.createElement("span");
    star.className = "blink";
    star.textContent = " \u2605 ";
    ticker.insertBefore(star, ticker.firstChild);
  }
})();
