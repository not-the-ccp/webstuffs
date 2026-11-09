/* Nani's Boro Paddy Pot — visitor counter and guestbook, in the union way */

(function () {
  // The counter: starts at 004113 (the number of people at the table,
  // per the roll in Kalibari), counts up to 004121 the way the
  // council-room clock runs two minutes fast, then holds.
  var digits = document.getElementById("counter");
  if (digits) {
    var start = 4113, end = 4121, n = start;
    var pad = function (x) {
      var s = String(x);
      while (s.length < 6) s = "0" + s;
      return s;
    };
    var tick = setInterval(function () {
      digits.textContent = pad(n);
      if (n++ >= end) clearInterval(tick);
    }, 180);
    digits.textContent = pad(start);
  }

  // The guestbook: names first, then the line, like the roll.
  var form = document.getElementById("gbform");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("gbname").value.trim();
      var line = document.getElementById("gbline").value.trim();
      if (!name) { alert("Names first. Who is signing?"); return; }
      var li = document.createElement("li");
      var strong = document.createElement("span");
      strong.className = "gname";
      strong.textContent = name;
      var date = document.createElement("span");
      date.className = "gdate";
      date.textContent = "signed " + new Date().toDateString();
      li.appendChild(strong);
      li.appendChild(document.createTextNode(" \u2014 "));
      if (line) li.appendChild(document.createTextNode(line + " \u00b7 "));
      li.appendChild(date);
      document.getElementById("gb").appendChild(li);
      form.reset();
    });
  }
})();
