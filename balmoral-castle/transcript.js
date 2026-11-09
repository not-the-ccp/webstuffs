// Balmoral transcript: the clock, and the entry read into the record.
(function () {
  "use strict";

  var clock = document.getElementById("stampClock");
  function tick() {
    if (!clock) return;
    var d = new Date();
    var hh = String(d.getHours()).padStart(2, "0");
    var mm = String(d.getMinutes()).padStart(2, "0");
    var ss = String(d.getSeconds()).padStart(2, "0");
    clock.textContent = "The court sits at " + hh + ":" + mm + ":" + ss;
  }
  tick();
  setInterval(tick, 1000);

  var button = document.getElementById("readButton");
  var entry = document.querySelector(".entry");
  var stamp = document.getElementById("stamp");

  if (button && entry) {
    button.addEventListener("click", function () {
      entry.classList.add("is-read");
      if (stamp) {
        stamp.hidden = false;
        stamp.style.animation = "none";
        // restart the stamp animation
        void stamp.offsetWidth;
        stamp.style.animation = "";
        entry.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      button.textContent = "Read into the record, " +
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) +
        " — no exceptions";
    });
  }
})();
