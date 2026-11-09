// The Hooptie & Frill Club — notice-board extras.
// Everything stays readable with this file off; it only animates the
// visitor tally and lets the guestbook post a copy of itself.

(function () {
  "use strict";

  // Visitor tally: a fixed base count, nipped up by one for the visit.
  var counter = document.getElementById("counter");
  if (counter) {
    var base = 4117;
    try {
      var stored = parseInt(window.localStorage.getItem("hfc-tally") || "0", 10);
      if (stored > base) base = stored;
      base += 1;
      window.localStorage.setItem("hfc-tally", String(base));
    } catch (e) { /* no memory, no matter — the board keeps its count */ }
    var digits = base.toString();
    while (digits.length < 5) digits = "0" + digits;
    counter.textContent = digits.slice(0, 1) + "," + digits.slice(1);
  }

  // Guestbook: append the entry to the on-page copy of the book.
  var form = document.getElementById("guestbook-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = (document.getElementById("gb-name").value || "").trim() || "a visitor off the road";
      var entry = (document.getElementById("gb-entry").value || "").trim() || "(a line left blank, per the vow of silence)";
      var li = document.createElement("li");
      var strong = document.createElement("strong");
      strong.textContent = name;
      li.appendChild(strong);
      li.appendChild(document.createTextNode(" — " + entry + ". — " + new Date().toDateString()));
      var book = document.getElementById("guestbook");
      book.appendChild(li);
      form.reset();
    });
  }
})();
