/* THE BUS STOP — thread 4411 little scripts. The thread reads fine without these. */

// The visitor counter. It has been counting since 2001; today it counts a little more.
(function () {
  var el = document.getElementById("hitcount");
  if (!el) return;
  var n = parseInt(el.textContent.replace(/\D/g, ""), 10) || 8912;
  var i = 0;
  var timer = setInterval(function () {
    i += Math.max(1, Math.round((n - i) / 8));
    if (i >= n) { i = n + 1; clearInterval(timer); }
    el.textContent = ("000000" + i).slice(-5);
  }, 40);
})();

// Guestbook: signs locally, in web-safe ink, into the book the page already carries.
(function () {
  var form = document.getElementById("gbform");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("gbname").value.trim() || "anonymous";
    var line = document.getElementById("gbline").value.trim();
    if (!line) return;
    var entry = document.createElement("div");
    entry.className = "gb-entry";
    var b = document.createElement("b");
    b.textContent = name;
    entry.appendChild(b);
    entry.appendChild(document.createTextNode(" (just now): " + line));
    var thanks = document.getElementById("gb-thanks");
    var book = form.parentNode;
    book.insertBefore(entry, form);
    thanks.textContent = "signed. the counter saw you.";
    form.reset();
  });
})();
