/* house.js — small touches for the dining-room letter page.
   Nothing here is needed to read the letter itself. */

(function () {
  "use strict";

  // Visitor counter: nudge it up once per visit, like the box by the door.
  var counterEl = document.getElementById("counter");
  if (counterEl) {
    try {
      var base = parseInt(counterEl.textContent, 10);
      if (isNaN(base)) base = 1286;
      var seen = null;
      try { seen = sessionStorage.getItem("kc-counter"); } catch (e) {}
      if (seen !== String(base)) {
        base += 1;
        try { sessionStorage.setItem("kc-counter", String(base)); } catch (e) {}
      }
      counterEl.textContent = String(base).padStart(6, "0");
    } catch (e) { /* the letter stands without the counter */ }
  }

  // Guestbook: a signature for table nine, no server required.
  window.signGuestbook = function () {
    var nameEl = document.getElementById("gbname");
    var tableEl = document.getElementById("gbtable");
    var list = document.getElementById("guestlist");
    if (!nameEl || !list) return false;
    var name = nameEl.value.replace(/\s+/g, " ").trim();
    if (!name) { nameEl.focus(); return false; }
    var table = tableEl ? tableEl.value.replace(/\s+/g, " ").trim() : "";
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(
      name + (table ? ", table " + table : "") + " — the course is as logged."
    ));
    list.insertBefore(li, list.firstChild);
    nameEl.value = "";
    tableEl.value = "";
    return false;
  };
})();
