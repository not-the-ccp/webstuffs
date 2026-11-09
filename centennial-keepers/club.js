/* The Centennial Circular — vault scripts, No. 26 */

(function () {
  // Visitor counter: the vault's own little counter, reset each season.
  var counterEl = document.getElementById("visitor-counter");
  if (counterEl) {
    var base = 261;
    // One extra visitor per day since the 4th of August.
    var extra = Math.floor((Date.now() - Date.UTC(1996, 7, 4)) / 86400000) % 97;
    var n = base + extra + 1;
    counterEl.textContent = String(n).padStart(6, "0").replace(/^(\d{3}),?(\d{3})$/, "$1,$2");
  }

  // Guestbook: the price of the Circular is one line.
  var form = document.getElementById("guestbook-form");
  var lines = document.getElementById("guestbook-lines");
  if (form && lines) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = form.elements["name"].value.trim() || "The Secretary";
      var line = form.elements["line"].value.trim() || "The card is still open.";
      var li = document.createElement("li");
      var em = document.createElement("em");
      em.textContent = name;
      li.appendChild(em);
      li.appendChild(document.createTextNode(" \u2014 " + line));
      lines.appendChild(li);
      form.reset();
      form.elements["name"].focus();
    });
  }
})();
