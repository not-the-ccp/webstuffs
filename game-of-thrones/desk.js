/* The Seven Kingdoms Desk — small touches; the ledger is fully readable without this. */
(function () {
  "use strict";

  var entries = Array.prototype.slice.call(document.querySelectorAll(".qa"));

  entries.forEach(function (entry) {
    var heading = entry.querySelector(".q");
    if (!heading) return;
    heading.style.cursor = "pointer";
    heading.addEventListener("click", function () {
      var open = entry.classList.toggle("folded");
      var body = entry.querySelectorAll(".a, .transcript");
      Array.prototype.forEach.call(body, function (p) {
        p.style.display = open ? "none" : "";
      });
    });
  });

  var stamp = document.querySelector(".stamp");
  if (stamp) {
    var base = -12;
    setInterval(function () {
      var jitter = base + (Math.random() * 2 - 1);
      stamp.style.transform = "rotate(" + jitter.toFixed(2) + "deg)";
    }, 900);
  }
})();
