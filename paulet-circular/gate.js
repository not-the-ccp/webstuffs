/* The St John Gate Society — Newsletter No. 7
   Small touches: a guestbook that remembers, a counter that moves.
   The paper reads perfectly without this file. */

(function () {
  var KEY = "sjgs-guestbook-7";

  function pad(n, w) {
    var s = String(n);
    while (s.length < w) s = "0" + s;
    return s;
  }

  // visitor counter: start at 4172, tick once per visit
  try {
    var base = parseInt(localStorage.getItem("sjgs-visits") || "4172", 10);
    var el = document.getElementById("visits");
    if (el) {
      el.textContent = pad(base, 6);
      if (document.readyState === "interactive" || document.readyState === "complete") {
        setTimeout(function () {
          el.textContent = pad(base + 1, 6);
          localStorage.setItem("sjgs-visits", String(base + 1));
        }, 1200);
      }
    }
  } catch (e) { /* some browsers keep no secrets; the counter stands as printed */ }

  // guestbook: entries live in the visitor's own browser, and nowhere else
  function entries() {
    try { return JSON.parse(localStorage.getItem(KEY) || "[]"); }
    catch (e) { return []; }
  }

  function saveGuestbook(ev) {
    ev.preventDefault();
    var nameEl = document.getElementById("gb-name");
    var noteEl = document.getElementById("gb-note");
    var list = document.getElementById("gb-list");
    if (!nameEl || !noteEl || !list) return false;
    var name = nameEl.value.replace(/^\s+|\s+$/g, "");
    var note = noteEl.value.replace(/^\s+|\s+$/g, "");
    if (!name || !note) {
      window.alert("Two blanks and a keeper: the book wants both a name and a line.");
      return false;
    }
    var entries = entries();
    entries.unshift({ who: name, note: note, when: new Date().toDateString() });
    try { localStorage.setItem(KEY, JSON.stringify(entries.slice(0, 20))); } catch (e) {}
    drawGuestbook();
    nameEl.value = "";
    noteEl.value = "";
    return false;
  }

  function drawGuestbook() {
    var list = document.getElementById("gb-list");
    if (!list) return;
    var entries = entries();
    for (var i = 0; i < entries.length; i++) {
      var li = document.createElement("li");
      var who = document.createElement("span");
      who.className = "gb-who";
      who.textContent = entries[i].who;
      var when = document.createElement("span");
      when.className = "gb-when";
      when.textContent = entries[i].when;
      li.appendChild(who);
      li.appendChild(document.createTextNode(" \u2014 " + entries[i].note + " "));
      li.appendChild(when);
      list.insertBefore(li, list.firstChild);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".guestbook form");
    if (form) form.addEventListener("submit", saveGuestbook);
    drawGuestbook();
  });
})();
