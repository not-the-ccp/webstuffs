/* Small clock-keeper for the Green Line board at bench 7.
   The page reads fully without it; this only walks the row. */
(function () {
  var rows = Array.prototype.slice.call(
    document.querySelectorAll("#departures tbody tr")
  );
  if (!rows.length) return;

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function tick() {
    var now = new Date();
    var mins = now.getHours() * 60 + now.getMinutes();
    var next = null;

    rows.forEach(function (row) {
      var t = row.getAttribute("data-time").split(":");
      var rm = parseInt(t[0], 10) * 60 + parseInt(t[1], 10);
      var state = row.querySelector(".state");
      row.classList.remove("next");

      if (rm <= mins && rm >= mins - 24 * 60) {
        row.classList.add("gone");
        state.textContent = "Departed";
      } else if (next === null && rm > mins) {
        next = rm;
        row.classList.add("next");
        state.textContent = "On the quay";
      } else {
        row.classList.remove("gone");
        state.textContent = "—";
      }
    });

    var label = document.getElementById("next-dep");
    if (label) {
      if (next !== null) {
        var wait = next - mins;
        var h = Math.floor(wait / 60);
        var m = wait % 60;
        label.textContent = "in " + h + " h " + pad(m) + " min";
      } else {
        label.textContent = "the row is inked anew at first light";
      }
    }
  }

  tick();
  setInterval(tick, 60000);
})();
