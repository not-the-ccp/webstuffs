// Desk Note 2 — visitor counter and guestbook.
// The page stays readable without this script; the log simply stands still.

(function () {
  "use strict";

  // The counter ticks over on each visit and refuses to stop at four digits.
  var counterEl = document.getElementById("counter");
  if (counterEl) {
    var next = (parseInt(counterEl.textContent, 10) + 1) % 10;
    counterEl.textContent = String(next);
  }

  // The guestbook keeps its lines in the log, at the whole minute.
  var form = document.getElementById("gbform");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var nameEl = document.getElementById("gbname");
      var list = document.getElementById("gblist");
      var name = nameEl.value.replace(/\s+/g, " ").trim();
      if (!name) {
        nameEl.focus();
        return;
      }
      var line = document.createElement("li");
      line.textContent = name;
      list.appendChild(line);
      nameEl.value = "";
      nameEl.focus();
    });
  }
})();
