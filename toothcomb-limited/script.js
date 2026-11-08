/* Service TC-7 — small touches for the conductor's cab */
(function () {
  // Visitor counter: starts at 0001337 and ticks over politely.
  var count = 1337;
  var el = document.getElementById("visitorCounter");
  function pad(n) {
    var s = String(n);
    while (s.length < 7) s = "0" + s;
    return s;
  }
  if (el) {
    el.textContent = pad(count);
    el.classList.add("blink");
    var tick = 0;
    setInterval(function () {
      tick += 1;
      if (tick % 5 === 0) { count += 1; el.textContent = pad(count); }
    }, 1000);
  }

  // Footer year.
  var y = document.getElementById("year");
  if (y) y.textContent = "Fifth edition, spring 1998 (kept " + new Date().getFullYear() + ")";

  // Guestbook: local, on the page, like a paper book.
  var btn = document.getElementById("signBtn");
  var note = document.getElementById("formNote");
  if (btn && note) {
    btn.onclick = function () {
      var name = document.getElementById("gname").value || "A passenger, unrecorded";
      var msg = document.getElementById("gmsg").value || "The train was on time.";
      var entry = document.createElement("div");
      entry.className = "guest-entry";
      var p = document.createElement("p");
      var span = document.createElement("span");
      span.className = "g-name";
      span.textContent = name;
      p.appendChild(span);
      p.appendChild(document.createTextNode(" — just now: " + msg));
      entry.appendChild(p);
      var form = btn.closest("form");
      form.parentNode.insertBefore(entry, form);
      document.getElementById("gname").value = "";
      document.getElementById("gmsg").value = "";
      note.textContent = "Entry received. It will be read at 19:41.";
    };
  }
})();
