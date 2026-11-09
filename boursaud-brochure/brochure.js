/* The Boursaud Trail — brochure extras (the text reads fine without this) */

(function () {
  "use strict";

  // Twinkling stars over the night background.
  var sky = document.getElementById("stars");
  if (sky) {
    for (var i = 0; i < 40; i++) {
      var s = document.createElement("span");
      s.className = "star";
      s.textContent = Math.random() < 0.2 ? "✦" : "·";
      s.style.left = (Math.random() * 100).toFixed(2) + "%";
      s.style.top = (Math.random() * 100).toFixed(2) + "%";
      s.style.animationDelay = (Math.random() * 2).toFixed(2) + "s";
      sky.appendChild(s);
    }
  }

  // Visitor counter: a number that only ever goes up.
  var countEl = document.getElementById("visitor-count");
  if (countEl) {
    var n = 3721 + new Date().getDate() * 7;
    function pad(x) {
      var t = String(x);
      while (t.length < 6) t = "0" + t;
      return t;
    }
    countEl.textContent = pad(n);
    setInterval(function () {
      n += 1;
      countEl.textContent = pad(n);
    }, 45000);
  }

  // Guestbook: sign the book, stay in the book.
  var form = document.getElementById("guestbook-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("gb-name").value.trim() || "A nameless walker";
      var note = document.getElementById("gb-note").value.trim() || "the trail was good";
      var list = document.getElementById("gb-entries");
      var li = document.createElement("li");
      li.textContent = name + " — “" + note + "”";
      list.appendChild(li);
      form.reset();
    });
  }
})();
