/* The Ebb Route — walker counter and guest book, kept in the drawer */

(function () {
  var KEY = "ebb-route-walkers";

  function digits(n) {
    var s = String(n);
    while (s.length < 6) s = "0" + s;
    return s.split("").join(" ");
  }

  function setCounter() {
    var el = document.getElementById("walkno");
    if (!el) return;
    var n = parseInt(window.localStorage.getItem(KEY), 10);
    if (isNaN(n) || n < 1) n = 1;
    window.localStorage.setItem(KEY, String(n));
    el.textContent = digits(n);
  }

  try {
    setCounter();
  } catch (e) {
    var el = document.getElementById("walkno");
    if (el) el.textContent = "0 0 1 9 9 8";
  }

  var form = document.getElementById("gbform");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var name = document.getElementById("gbname");
      var line = document.getElementById("gbline");
      var text = line.value.replace(/^\s+|\s+$/g, "");
      if (!text) { line.focus(); return; }
      var li = document.createElement("li");
      var who = name.value.replace(/^\s+|\s+$/g, "") || "A walker of the ebb";
      li.appendChild(document.createTextNode(who + " — "));
      var q = document.createElement("em");
      q.appendChild(document.createTextNode(text));
      li.appendChild(q);
      document.getElementById("book").appendChild(li);
      name.value = "";
      line.value = "";
    });
  }
})();
