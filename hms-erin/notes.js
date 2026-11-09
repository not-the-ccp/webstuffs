/* Sheet 23 — a visitor counter, kept in the old manner. */
(function () {
  var el = document.getElementById("counter");
  if (!el) return;
  var seed = 0;
  for (var i = 0; i < el.id.length; i++) seed += el.id.charCodeAt(i) * 7;
  var base = 4021 + seed; /* the gulls, the gannets, the tide */
  function pad(n, w) {
    var s = String(n);
    while (s.length < w) s = "0" + s;
    return s;
  }
  function tick() {
    var day = Math.floor(Date.now() / 86400000);
    el.textContent = pad(base + (day % 970000), 7);
  }
  tick();
  setInterval(tick, 30000);
})();
