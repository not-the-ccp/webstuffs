/* Error Reference AM-15/03 — spool touches.
   The page reads fully without this; the script only
   ticks the counter and takes guestbook lines. */
(function () {
  "use strict";

  var counterEl = document.getElementById("visit-counter");
  if (counterEl) {
    var now = new Date();
    var visits = 41041 + now.getDate() * 7 + now.getHours();
    counterEl.textContent = ("000000" + visits).slice(-6);
  }

  var gb = document.getElementById("guestbook");
  if (gb) {
    var nameEl = document.getElementById("gb-name");
    var msgEl = document.getElementById("gb-msg");
    var btn = document.getElementById("gb-sign");
    var list = document.getElementById("gb-list");
    var count = 2;

    function clean(v) {
      return (v || "").replace(/[<>]/g, "").replace(/\s+/g, " ").trim();
    }

    btn.addEventListener("click", function () {
      var name = clean(nameEl.value) || "anonymous dial";
      var msg = clean(msgEl.value) || "no line for the spool";
      count += 1;
      var li = document.createElement("li");
      var no = document.createElement("span");
      no.className = "gb-no";
      no.textContent = ("00" + count).slice(-3);
      li.appendChild(no);
      li.appendChild(document.createTextNode(name + " \u2014 \u201c" + msg + "\u201d"));
      list.appendChild(li);
      nameEl.value = "";
      msgEl.value = "";
      nameEl.focus();
    });
  }
})();
