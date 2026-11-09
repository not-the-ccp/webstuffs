/* Column Nine — the small machinery of the gate workshop */
(function () {
  "use strict";

  // the wax seal settles when tapped
  var wax = document.getElementById("wax");
  if (wax) {
    wax.addEventListener("click", function () {
      wax.classList.add("spin");
      setTimeout(function () { wax.classList.remove("spin"); }, 260);
    });
  }

  // the record line, ruled into the light: it brightens while you read it
  var line = document.getElementById("record-line");
  if (line) {
    var timer = null;
    function lit() {
      line.classList.add("lit");
      clearTimeout(timer);
      timer = setTimeout(function () { line.classList.remove("lit"); }, 3500);
    }
    line.addEventListener("mouseenter", lit);
    line.addEventListener("focus", lit);
    line.setAttribute("tabindex", "0");
  }

  // a slow tally of the toll, for the footer's sake
  var foot = document.querySelector(".foot p:last-of-type");
  if (foot) {
    var base = foot.textContent;
    var toll = 0;
    var names = ["seven", "eight", "nine", "ten", "eleven", "twelve"];
    setInterval(function () {
      toll = (toll + 1) % (names.length + 1);
      if (toll === 0) { foot.textContent = base; }
      else { foot.textContent = base.replace("does not leave", "does not leave · the bell, " + names[toll - 1] + " times"); }
    }, 6000);
  }
})();
