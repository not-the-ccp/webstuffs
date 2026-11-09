// The Munich Mouser — Term Report, Class 5A
// Small touches only: stamp the approval seal on load, and let the
// ledger figures count up. The report reads fine with none of this.
(function () {
  "use strict";

  var stamp = document.querySelector(".stamp");
  if (stamp) {
    window.addEventListener("load", function () {
      setTimeout(function () { stamp.classList.add("animate"); }, 400);
    });
  }

  // Count the caretaker's ledger figures (113, 41) up from zero, once.
  var counts = [
    { target: 113, el: null, done: false }
  ];
  var body = document.body.textContent || "";
  // Mark the two ledger numbers on first sight of the text.
  if (body.indexOf("113 mice") !== -1) {
    var nodes = document.querySelectorAll("section.lines p");
    nodes.forEach(function (p) {
      if (p.textContent.indexOf("catch of 113 mice") !== -1) {
        var html = p.innerHTML.replace("113", '<span class="tally" data-target="113">0</span>');
        p.innerHTML = html;
        var span = p.querySelector(".tally");
        var start = null;
        function tick(ts) {
          if (start === null) start = ts;
          var t = Math.min((ts - start) / 1200, 1);
          span.textContent = Math.round(113 * t);
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }
    });
  }
})();
