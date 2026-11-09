/* Route 12 ledger — strike off legs as the class walks them */
(function () {
  var stops = Array.prototype.slice.call(document.querySelectorAll(".stop"));
  var status = document.getElementById("ledger-status");
  if (!status || stops.length === 0) return;

  // legs are stops 2..9 (each stop carries the km of its incoming leg)
  var legs = stops.slice(1);
  var totalKm = legs.reduce(function (sum, s) {
    return sum + parseInt(s.getAttribute("data-km"), 10);
  }, 0);

  function render() {
    var walkedKm = 0;
    var walkedHrs = 0;
    var count = 0;
    legs.forEach(function (s) {
      if (s.classList.contains("walked")) {
        walkedKm += parseInt(s.getAttribute("data-km"), 10);
        walkedHrs += parseInt(s.getAttribute("data-hrs"), 10);
        count++;
      }
    });
    var text = "WALKED " + count + " OF " + legs.length +
      " LEGS — " + walkedKm.toLocaleString("en-US") + " KM — " +
      walkedHrs.toLocaleString("en-US") + " HRS";
    if (count === legs.length) {
      text += " — ROUTE CLOSED — THE COUNT IS KEPT AS KEPT";
    }
    status.textContent = text;
  }

  stops.forEach(function (s, i) {
    if (i === 0) return; // stop 1 has no incoming leg to strike
    var btn = s.querySelector(".strike");
    if (!btn) return;
    btn.addEventListener("click", function () {
      s.classList.toggle("walked");
      render();
    });
  });

  render();
})();
