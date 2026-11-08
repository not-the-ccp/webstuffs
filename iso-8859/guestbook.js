/* The Fifteen Parts - guestbook counter and sign-in, 1999 style.
   The page reads fine without this: the counter shows a default and
   the book keeps its printed entries. */

(function () {
  var counter = document.getElementById("counter");
  var visits = 4217;
  try {
    var stored = parseInt(window.localStorage.getItem("fifteenparts") || "0", 10);
    if (!isNaN(stored) && stored > 0) visits = stored;
    window.localStorage.setItem("fifteenparts", String(visits + 1));
  } catch (e) { /* no storage; the crock keeps its own count */ }
  if (counter) counter.textContent = String(visits).length < 6
    ? ("000000" + visits).slice(-6)
    : String(visits);

  window.signBook = function () {
    var name = document.getElementById("gb-name");
    var line = document.getElementById("gb-line");
    if (!name || !line) return;
    var entry = line.value.replace(/^\s+|\s+$/g, "");
    if (!entry) entry = "no line, only a signature.";
    var li = document.createElement("li");
    var who = document.createElement("span");
    who.className = "book-name";
    who.textContent = name.value.replace(/^\s+|\s+$/g, "") || "a reader";
    var text = document.createTextNode(": " + entry + " — just now");
    li.appendChild(who);
    li.appendChild(text);
    var book = document.querySelector(".book");
    if (book) book.appendChild(li);
    line.value = "";
  };
})();
