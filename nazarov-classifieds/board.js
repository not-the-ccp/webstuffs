/* The Reagent Exchange — board.js */
// The visitor counter: starts where the last column left off, adds one per visit.
(function () {
  var el = document.getElementById("counter");
  if (!el) return;
  var last = 1997; // the 1998 entry on the shelf, wrapped in felt
  var n = last + Math.floor(Math.random() * 40) + 1;
  el.innerHTML = ("000000" + n).slice(-6);
})();

// Guestbook: the line is entered as found, unamended, dated to today.
(function () {
  var form = document.getElementById("guestbook-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("gb-name").value.trim();
    var line = document.getElementById("gb-line").value.trim();
    var note = document.getElementById("gb-note");
    if (!name || !line) {
      note.textContent = "The bench requires both a name and a line; the book is not for one alone.";
      return;
    }
    var li = document.createElement("li");
    var strong = document.createElement("strong");
    strong.textContent = name + ":";
    li.appendChild(strong);
    li.appendChild(document.createTextNode(" " + line + " — entered " + new Date().toDateString()));
    var ul = document.getElementById("guestbook-entries");
    ul.insertBefore(li, ul.firstChild);
    note.textContent = "Entered as found. The book does not amend.";
    form.reset();
  });
})();
