// Chapter IX visitor counter and guestbook margin.
// The page stays fully readable with this script disabled.

(function () {
  var visitsEl = document.getElementById("visits");
  if (visitsEl) {
    var key = "chapter-ix-visits";
    var count = parseInt(window.localStorage && localStorage.getItem(key) || "0", 10);
    if (isNaN(count)) { count = 0; }
    count += 1;
    if (window.localStorage) { localStorage.setItem(key, String(count)); }
    var shown = 4319 + count;
    visitsEl.textContent = String(shown).padStart(6, "0");
  }

  var form = document.getElementById("guestbook-form");
  var list = document.getElementById("guestbook-list");
  if (form && list) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = document.getElementById("gb-name").value.trim() || "a reader";
      var line = document.getElementById("gb-line").value.trim();
      if (!line) { return; }
      var li = document.createElement("li");
      var em = document.createElement("em");
      em.textContent = name;
      li.appendChild(em);
      li.appendChild(document.createTextNode(" says: " + line + "."));
      list.appendChild(li);
      document.getElementById("gb-name").value = "";
      document.getElementById("gb-line").value = "";
    });
  }
})();
