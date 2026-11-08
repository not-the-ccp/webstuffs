// The Theban Almanac of Weathers — gauge rulings
(function () {
  "use strict";

  // Rule the Nile-gauge bars in when their rows enter view.
  var rows = Array.prototype.slice.call(
    document.querySelectorAll("#gauge-table tr[data-level]")
  );

  function ruleIn(row) {
    row.style.setProperty("--lvl", row.getAttribute("data-level"));
    row.classList.add("filled");
  }

  if ("IntersectionObserver" in window) {
    var seen = new Set();
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !seen.has(entry.target)) {
          seen.add(entry.target);
          ruleIn(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    rows.forEach(function (row) { io.observe(row); });
  } else {
    rows.forEach(ruleIn);
  }

  // A single reading at a time: hovering a year rules out its siblings' bar.
  var table = document.getElementById("gauge-table");
  if (table) {
    rows.forEach(function (row) {
      row.addEventListener("mouseenter", function () {
        rows.forEach(function (other) {
          if (other !== row) other.style.opacity = "0.45";
        });
        row.style.opacity = "1";
      });
      row.addEventListener("mouseleave", function () {
        rows.forEach(function (other) { other.style.opacity = "1"; });
      });
    });
  }

  // The scribe's margin tally: mean of the eight readings.
  function meanLevel() {
    if (!rows.length) return;
    var total = rows.reduce(function (sum, row) {
      return sum + (parseFloat(row.getAttribute("data-level")) || 0);
    }, 0);
    var mean = (total / rows.length).toFixed(1);
    var foot = document.querySelector(".gauge-foot");
    if (foot) {
      var node = document.createElement("span");
      node.className = "mean";
      node.textContent = " [the scribe's tally: " + mean + " cubits, as entered]";
      node.style.fontStyle = "italic";
      foot.appendChild(node);
    }
  }
  meanLevel();
})();
