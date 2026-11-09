/* The Long Watch — Route Plate No. 1963-W
   The call-box lamp, and the ledger at the gate.
   The tour reads fine without this script. */

(function () {
  "use strict";

  var sign = document.getElementById("policeSign");
  if (sign) {
    sign.setAttribute("role", "button");
    sign.setAttribute("aria-pressed", "false");
    sign.addEventListener("click", function () {
      var lit = sign.classList.toggle("lit");
      sign.setAttribute("aria-pressed", lit ? "true" : "false");
    });
  }

  var note = document.getElementById("ledgerNote");
  if (note) {
    // The ledger settles itself at the gate, once the route has been read
    // down to the last stop.
    var stops = document.querySelectorAll(".stop");
    var last = stops[stops.length - 1];
    if (last && "IntersectionObserver" in window) {
      var done = false;
      var settle = function () {
        if (done) return;
        done = true;
        note.textContent =
          "Ledger settled at the gate, 16 frames per second. The route stands.";
        note.classList.add("settled");
      };
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              settle();
              io.disconnect();
            }
          });
        },
        { threshold: 0.4 }
      );
      io.observe(last);
    }
  }
})();
