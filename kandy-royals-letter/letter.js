// The Kandy Courier — a light touch for the letter.
// Without this script the page is fully readable; it only adds
// a gentle stamp and a running count-up on the scorecard figures.
(function () {
  "use strict";

  // Stamp the letter faintly in the corner, like an old registration mark.
  var stamp = document.createElement("div");
  stamp.className = "stamp";
  stamp.setAttribute("aria-hidden", "true");
  stamp.textContent = "KC \u00b7 2026";
  document.querySelector(".letterhead").appendChild(stamp);

  // Count up the two season totals (434 runs, 14 wickets) when visible.
  function countUp(el, target) {
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / 900, 1);
      el.textContent = Math.round(target * p);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var cards = document.querySelectorAll(".scorecard td:last-child");
  cards.forEach(function (cell) {
    var m = cell.textContent.match(/(\d+)/);
    if (!m) return;
    var target = parseInt(m[1], 10);
    var prefix = cell.textContent.slice(0, m.index);
    var suffix = cell.textContent.slice(m.index + m[1].length);
    if (!("IntersectionObserver" in window)) return;
    var done = false;
    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && !done) {
        done = true;
        var holder = document.createElement("span");
        cell.firstChild.nodeValue = "";
        cell.innerHTML = "";
        cell.appendChild(document.createTextNode(prefix));
        var num = document.createElement("span");
        num.textContent = "0";
        cell.appendChild(num);
        cell.appendChild(document.createTextNode(suffix));
        countUp(num, target);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(cell);
  });
})();
