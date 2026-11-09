/* Small touches for the Forum diary page. Text is fully readable without this. */
(function () {
  "use strict";

  // Nudge the visitor counter up by one, once per visit.
  var counter = document.getElementById("counter");
  if (counter) {
    var spans = counter.getElementsByTagName("span");
    if (spans.length) {
      var last = spans[spans.length - 1];
      var v = (parseInt(last.textContent, 10) + 1) % 10;
      last.textContent = String(v);
    }
  }

  // Slow blink on the "visitor number" heading, the classic way.
  var digits = document.querySelector(".digits");
  if (digits) {
    setInterval(function () {
      digits.style.textShadow =
        digits.style.textShadow ? "" : "0 0 6px #33ff33";
    }, 1000);
  }
})();
