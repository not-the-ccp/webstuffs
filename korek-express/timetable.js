// Line 7 — a small clock on the platform and a train dot on the route line.
(function () {
  var line = document.querySelector(".plate-line");
  if (line && !line.querySelector(".train-dot")) {
    var dot = document.createElement("span");
    dot.className = "train-dot";
    dot.setAttribute("aria-hidden", "true");
    line.appendChild(dot);
  }
  var clock = document.querySelector(".clock");
  if (clock) {
    var text = clock.textContent;
    setInterval(function () {
      var t = new Date();
      var hh = String(t.getHours()).padStart(2, "0");
      var mm = String(t.getMinutes()).padStart(2, "0");
      clock.textContent = text + "  \u00b7  platform time " + hh + ":" + mm;
    }, 15000);
  }
})();
