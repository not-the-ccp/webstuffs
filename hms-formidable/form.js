/* The Formidable Log Room — small touches, text stands without this. */

(function () {
  "use strict";

  // Visitor counter: one line a night, nothing re-inked — but it may tick up once.
  var counter = document.getElementById("counter");
  if (counter) {
    var n = 3471 + Math.floor(Math.random() * 3);
    var s = ("0000000" + n).slice(-7);
    counter.textContent = s.slice(0, s.length - 3) + "," + s.slice(s.length - 3);
  }

  // Last-updated stamp, the way the old room dated its cards.
  var stamp = document.getElementById("stamp");
  if (stamp) {
    var d = new Date();
    var months = ["January","February","March","April","May","June",
                  "July","August","September","October","November","December"];
    stamp.textContent = "(" +
      ("00" + d.getDate()).slice(-2) + " " + months[d.getMonth()] + " " + d.getFullYear() +
      " — the book is still kept" +
      ")";
  }
})();

// Guestbook: sign in one line, entered and not enforced.
function signGuestbook() {
  var name = document.getElementById("gb-name");
  var line = document.getElementById("gb-line");
  var note = document.getElementById("gb-note");
  if (!name || !line || !note) { return false; }
  if (name.value.replace(/^\s+|\s+$/g, "") && line.value.replace(/^\s+|\s+$/g, "")) {
    note.textContent = name.value + " entered: \u201C" + line.value + "\u201D — entered, not enforced. Thank you, and good watch.";
    name.value = "";
    line.value = "";
  } else {
    note.textContent = "The book needs both a name and one line. Enter them plainly, as the log asks.";
  }
  return false;
}
