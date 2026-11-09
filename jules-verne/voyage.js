/* The Eighty-Day Planner — pace arithmetic for the standing voyages */
(function () {
  var select = document.getElementById("voyage");
  var daysInput = document.getElementById("days");
  var button = document.getElementById("compute");
  var out = document.getElementById("planner-out");
  if (!select || !daysInput || !button || !out) return;

  function fmt(n) {
    return n.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function compute() {
    var opt = select.options[select.selectedIndex];
    var name = opt.getAttribute("data-name");
    var km = parseFloat(opt.value);
    var days = parseFloat(daysInput.value);
    if (!isFinite(days) || days < 1) days = 1;
    if (days > 365) days = 365;
    daysInput.value = days;

    var perDay = km / days;
    var perHour = perDay / 24;

    var verdict;
    if (name.indexOf("Twenty Thousand") === 0) {
      verdict = days <= 28
        ? "the propeller's own pace — Nemo would sign the ledger without raising his lamp"
        : days <= 80
          ? "comfortably below the speed of the propeller, comfortably above the speed of any of Hetzel's presses"
          : "slower than the current; the Nautilus dawdles at this rate and the ledgers of depth go stale";
    } else if (name.indexOf("Around the World") === 0) {
      verdict = perDay >= 499.3
        ? "Fogg's required pace, met or beaten — the wager stands, and the date line is the only hazard"
        : "below Fogg's 499.3 km per day — expect to arrive a day late and owe the Reform Club; the extra day may still be found";
    } else {
      verdict = perDay >= 750
        ? "Prof. Lidenbrock's actual pace, matched or exceeded — do not ask about the raft"
        : "a respectable tramping pace through Iceland; the centre will keep its own counsel until the raft arrives";
    }

    out.textContent = name + ": at " + days + " day" + (days === 1 ? "" : "s") +
      " the party must average " + fmt(perDay) + " km per day, or " +
      fmt(perHour) + " km per hour on a 24-hour regime — " + verdict + ".";
  }

  button.addEventListener("click", compute);
  select.addEventListener("change", compute);
  daysInput.addEventListener("change", compute);
})();
