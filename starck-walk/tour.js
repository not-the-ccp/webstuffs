/* The Starck Walk — route ledger. Text stands alone without this. */
(function () {
  var stops = Array.prototype.slice.call(document.querySelectorAll(".stop"));
  var log = document.getElementById("log");
  var countEl = document.getElementById("count");
  var distEl = document.getElementById("dist");
  var minsEl = document.getElementById("mins");
  if (!stops.length) return;

  function tick(stop) {
    var logged = stops.filter(function (s) { return s.classList.contains("logged"); });
    var dist = 0, mins = 0;
    logged.forEach(function (s) {
      dist += parseFloat(s.getAttribute("data-km")) || 0;
      mins += parseInt(s.getAttribute("data-min"), 10) || 0;
    });
    countEl.textContent = logged.length;
    distEl.textContent = dist.toFixed(1);
    minsEl.textContent = mins;
    if (logged.length === stops.length) {
      log.textContent = "All seven stops logged: 7.3 kilometres, the spoon at both ends. Walk complete.";
    } else if (stop) {
      log.textContent = stop.querySelector("h3").textContent + " logged. " + (stops.length - logged.length) + " to go.";
    }
  }

  stops.forEach(function (stop, i) {
    stop.addEventListener("click", function () {
      stop.classList.toggle("logged");
      tick(stop);
    });
  });
})();
