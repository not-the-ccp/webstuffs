/* Entry No. 311 - guestbook and counter touches. The page stands without this. */
(function () {
  "use strict";

  function pad(n) {
    var s = String(n);
    while (s.length < 5) s = "0" + s;
    return s;
  }

  // Bump the visitor counter once per visit, on top of the printed 00472.
  var digits = document.querySelectorAll(".counter-digits span");
  if (digits.length === 5) {
    var stored = 0;
    try { stored = parseInt(window.localStorage.getItem("nbw-311") || "0", 10) || 0; } catch (e) {}
    stored += 1;
    try { window.localStorage.setItem("nbw-311", String(stored)); } catch (e) {}
    var total = (472 + stored).toString();
    while (total.length < 5) total = "0" + total;
    for (var i = 0; i < 5; i++) digits[i].textContent = total.charAt(i);
  }

  // Guestbook: sign with the reading, keep the line.
  var out = document.getElementById("gb-out");
  function sign() {
    if (!out) return false;
    var name = document.getElementById("gb-name").value.trim();
    var reading = document.getElementById("gb-reading").value.trim();
    if (!name || !reading) {
      out.textContent = "The book needs a name and a reading, both.";
      return false;
    }
    out.textContent = "Signed: " + name + " — " + reading;
    return false;
  }

  window.gbSign = sign;
})();
