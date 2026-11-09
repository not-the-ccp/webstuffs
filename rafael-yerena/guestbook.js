/* The Yerena Desk — visitor counter and guestbook, kept at the door. */

(function () {
  "use strict";

  // Visitor counter: counts up to the district office's running total.
  var counterEl = document.getElementById("visitor-counter");
  if (counterEl) {
    var total = 13097;
    var step = 0;
    var timer = setInterval(function () {
      step += 37;
      if (step >= total) { step = total; clearInterval(timer); }
      counterEl.textContent = String(step).padStart(6, "0");
    }, 30);
    // Without JS the digits stay 000000 and the page still reads fine.
  }

  // Guestbook: signs an entry in the register at the door.
  var form = document.getElementById("guestbook-form");
  if (form) {
    var entries = document.getElementById("guestbook-entries");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var nameInput = document.getElementById("gb-name");
      var textInput = document.getElementById("gb-text");
      var name = nameInput.value.replace(/<[^>]*>/g, "").trim() || "a passerby";
      var text = textInput.value.replace(/<[^>]*>/g, "").trim();
      if (!text) { text = "Signed from the district office, no words this time."; }
      var p = document.createElement("p");
      p.className = "gb-entry";
      var nameSpan = document.createElement("span");
      nameSpan.className = "gb-name";
      nameSpan.textContent = name;
      p.appendChild(nameSpan);
      p.appendChild(document.createTextNode(" — "));
      var em = document.createElement("em");
      em.textContent = text;
      p.appendChild(em);
      entries.insertBefore(p, entries.firstChild);
      entries.scrollTop = 0;
      nameInput.value = "";
      textInput.value = "";
    });
  }
})();
