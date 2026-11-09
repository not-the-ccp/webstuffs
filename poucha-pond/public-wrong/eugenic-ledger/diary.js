/* The line of the years — the needle holds one year, the events dim or stand */
(function () {
  var needle = document.getElementById("needle");
  var readout = document.getElementById("needle-year");
  var events = Array.prototype.slice.call(document.querySelectorAll("#events li"));
  if (!needle || !events.length) return;

  function hold() {
    var year = parseInt(needle.value, 10);
    if (readout) readout.textContent = year;
    for (var i = 0; i < events.length; i++) {
      var evYear = parseInt(events[i].getAttribute("data-year"), 10);
      events[i].classList.toggle("held", evYear === year);
      events[i].classList.toggle("dim", evYear !== year);
    }
  }

  needle.addEventListener("input", hold);
  hold();
})();
