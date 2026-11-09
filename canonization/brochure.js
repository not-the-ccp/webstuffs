// The Golden Roll brochure — counter and guestbook, set for the Foundry
(function () {
  var base = 19974;

  function pad(n, w) {
    n = String(n);
    while (n.length < w) n = "0" + n;
    return n;
  }

  var top = document.getElementById("counter");
  var top2 = document.getElementById("counter2");
  var live = document.getElementById("live");
  var n = base + Math.floor(Math.random() * 40);

  function tick() {
    var s = pad(n, 6);
    if (top) top.textContent = s;
    if (top2) top2.textContent = s;
    if (live) live.textContent = s.charAt(s.length - 1);
  }

  tick();
  setInterval(function () { n++; tick(); }, 7000);
})();

function signBook(f) {
  var name = f.elements[0];
  var line = f.elements[1];
  if (!line.value) { line.value = "the bell answered across the square."; }
  var p = document.createElement("p");
  p.className = "gbspots";
  p.innerHTML = "&ldquo;" + (line.value || "") + " &mdash; " + (name.value || "a pilgrim") + ", signed at the book&rdquo;";
  var form = f;
  var parent = f.parentNode;
  parent.insertBefore(p, form);
  line.value = "";
  name.value = "";
  return false;
}
