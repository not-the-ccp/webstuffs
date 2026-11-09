/* desk script — visitor counter and guestbook, 1998 build */

(function () {
  var base = 12407; // as counted by the strong-room keeper, last July

  function pad(n) {
    var s = String(n);
    while (s.length < 6) s = "0" + s;
    return s;
  }

  function setCounter(el) {
    el.textContent = pad(base + new Date().getMonth() * 31 + new Date().getDate());
  }

  var counter = document.getElementById("counter");
  if (counter) setCounter(counter);

  var btn = document.getElementById("gb-sign");
  var thanks = document.getElementById("gb-thanks");
  if (btn && thanks) {
    btn.onclick = function () {
      var name = document.getElementById("gb-name").value || "a traveler";
      thanks.textContent = "Thank you, " + name + " — the chair keeps your note.";
    };
  }
})();
