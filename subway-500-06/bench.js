/* Martinsville Bench — the paper counter, rendered quietly.
   Adds a lap readout to Entry 5. The page reads fine without it. */
(function () {
  var entry = document.querySelectorAll(".entry-no");
  if (!entry.length) return;
  for (var i = 0; i < entry.length; i++) {
    if (entry[i].textContent.indexOf("The scoreboard") === -1) continue;
    var section = entry[i].parentNode;
    var counter = document.createElement("p");
    counter.className = "lap-counter";
    counter.setAttribute("aria-hidden", "true");
    var span = document.createElement("span");
    span.textContent = "0";
    counter.appendChild(span);
    section.appendChild(counter);
    var lap = 0;
    var timer = setInterval(function () {
      lap += 1;
      span.textContent = lap;
      if (lap >= 500) {
        clearInterval(timer);
        setTimeout(function () { span.textContent = "500 — lap counter at rest"; }, 900);
      }
    }, 24);
    break;
  }
})();
