/* Lot 400,000 — catalogue register counter. The page is fully readable without this. */
(function () {
  var el = document.getElementById("counter");
  if (!el) return;
  var base = 400000 + Math.floor(Math.random() * 37);
  var n = base;
  function paint() {
    var s = String(n);
    while (s.length < 6) s = "0" + s;
    el.textContent = s;
  }
  paint();
  var steps = 0;
  var timer = setInterval(function () {
    n += 1 + Math.floor(Math.random() * 3);
    paint();
    steps += 1;
    if (steps >= 24) clearInterval(timer);
  }, 160);
})();
