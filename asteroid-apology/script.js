/* The Office of Lost Property & Found Worlds — visitor counter and guestbook.
   The letter is fully readable with this script disabled. */

(function () {
  "use strict";

  // Visitor counter: starts at the office's last recorded figure and
  // counts up to today's, one visitor at a time.
  var base = 4817;
  var el = document.getElementById("counter");
  if (el) {
    var shown = 0;
    var step = Math.max(1, Math.floor(base / 90));
    var timer = window.setInterval(function () {
      shown += step;
      if (shown >= base) {
        shown = base;
        window.clearInterval(timer);
      }
      el.textContent = String(shown).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }, 40);
  }

  // Guestbook: sign the book without leaving the page.
  var form = document.getElementById("sign-form");
  var list = document.getElementById("signatures");
  if (form && list) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var input = document.getElementById("sign-name");
      var name = (input.value || "").trim();
      if (!name) {
        input.focus();
        return;
      }
      var li = document.createElement("li");
      var who = document.createElement("span");
      who.className = "who";
      who.textContent = name;
      li.appendChild(who);
      li.appendChild(document.createTextNode(" signs. The office is grateful, and the peaches remain unopened."));
      list.appendChild(li);
      input.value = "";
      input.focus();
    });
  }
})();
