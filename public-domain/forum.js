/* The Free Reel Bulletin — board three
   The old reckoning: flash, count, divide by five for the miles,
   divide by twenty-two for the feet of nitrate stock the lamp burns. */
(function () {
  "use strict";

  var btn = document.getElementById("flash-btn");
  var readout = document.getElementById("storm-readout");
  var start = 0;
  var timer = null;
  var counting = false;

  function render(seconds) {
    var miles = (seconds / 5).toFixed(1);
    var feet = Math.round(seconds * 22);
    var text =
      Math.floor(seconds) + " s \u00b7 " + miles + " miles \u00b7 " + feet +
      " ft of stock" + (seconds > 0 && seconds < 5 ? " \u2014 the storm is close" : "") +
      (seconds >= 35 ? " \u2014 the cake is done" : "");
    if (readout) { readout.textContent = text; }
  }

  if (!btn || !readout) { return; }

  btn.addEventListener("click", function () {
    if (!counting) {
      counting = true;
      start = Date.now();
      btn.textContent = "thunder \u2014 stop the count";
      timer = setInterval(function () {
        render((Date.now() - start) / 1000);
      }, 100);
      render(0);
    } else {
      counting = false;
      clearInterval(timer);
      var seconds = (Date.now() - start) / 1000;
      btn.textContent = "count from here";
      render(seconds);
      if (seconds > 0) { readout.textContent += " \u2014 set down anyway"; }
    }
  });
})();
