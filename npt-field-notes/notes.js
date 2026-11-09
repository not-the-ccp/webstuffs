/* Geneva Station — Notebook No. 44 · small station effects.
   Everything is decorative; the notes read fine without this file. */

(function () {
  "use strict";

  // 1. The radar sweep ornament, added to the notebook's corner.
  var sweep = document.createElement("div");
  sweep.className = "sweep";
  sweep.setAttribute("aria-hidden", "true");
  var notebook = document.querySelector(".notebook");
  if (notebook) {
    notebook.style.position = "relative";
    notebook.appendChild(sweep);
  }

  // 2. A station clock in the plate, ticking at 1 a.m. pace —
  //    it always shows the hour the special passes.
  var plate = document.querySelector(".plate");
  if (plate) {
    var clock = document.createElement("p");
    clock.className = "observer station-clock";
    clock.setAttribute("aria-hidden", "true");
    function tick() {
      var now = new Date();
      var h = ("0" + now.getHours()).slice(-2);
      var m = ("0" + now.getMinutes()).slice(-2);
      var s = ("0" + now.getSeconds()).slice(-2);
      clock.textContent = "STATION CLOCK · " + h + ":" + m + ":" + s +
        " · THE SPECIAL PASSES AT 01:00";
    }
    tick();
    plate.appendChild(clock);
    setInterval(tick, 1000);
  }

  // 3. Ledger rows fill in as they scroll into view.
  var rows = document.querySelectorAll("table.fix-log tbody tr");
  if ("IntersectionObserver" in window && rows.length) {
    rows.forEach(function (tr, i) {
      tr.style.opacity = "0";
      tr.style.transform = "translateY(0.5rem)";
      tr.style.transition =
        "opacity 0.6s ease " + (i * 0.12) + "s, transform 0.6s ease " + (i * 0.12) + "s";
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "translateY(0)";
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    rows.forEach(function (tr) { io.observe(tr); });
  }
})();
