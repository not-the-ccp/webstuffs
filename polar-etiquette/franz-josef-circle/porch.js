/* The Porch Light, No. 47 — the lamp is trimmed at two o'clock. */
(function () {
  "use strict";

  // Twinkle the stars at their own pace.
  var stars = document.querySelectorAll(".star");
  for (var i = 0; i < stars.length; i++) {
    stars[i].style.animationDuration = (1.6 + Math.random() * 2.6) + "s";
    stars[i].style.animationDelay = (Math.random() * 2) + "s";
  }

  // The correspondent counter, kept in the browser's own ledger.
  var base = 142857;
  var n = base;
  try {
    var key = "porchlight-visits";
    var seen = parseInt(localStorage.getItem(key) || "0", 10) + 1;
    localStorage.setItem(key, String(seen));
    n = base + seen;
  } catch (e) { /* the register does not require it */ }
  var counter = document.getElementById("counter");
  if (counter) {
    var s = String(n);
    while (s.length < 7) { s = "0" + s; }
    counter.textContent = s;
  }

  // The guest book: one line, unsalted.
  var form = document.getElementById("gb-form");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var nameEl = document.getElementById("gb-name");
      var lineEl = document.getElementById("gb-line");
      var name = nameEl.value.replace(/^\s+|\s+$/g, "") || "Anonymous correspondent";
      var line = lineEl.value.replace(/^\s+|\s+$/g, "") || "(one line, unsalted)";
      var li = document.createElement("li");
      var strong = document.createElement("strong");
      strong.textContent = name;
      li.appendChild(strong);
      li.appendChild(document.createTextNode(" — \u201c" + line + "\u201d (No. 47)"));
      document.getElementById("gb").appendChild(li);
      var thanks = document.getElementById("gb-thanks");
      if (thanks) { thanks.hidden = false; }
      form.reset();
    });
  }
})();
