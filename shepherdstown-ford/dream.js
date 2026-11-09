/* Entry S-19 — visitor counter, kept in the guestbook's own drawer */
(function () {
  var el = document.getElementById("counter");
  if (!el) return;

  var KEY = "shepherdstown-dreamer-count";
  var base = 419;
  try {
    var stored = parseInt(window.localStorage.getItem(KEY), 10);
    if (isNaN(stored)) stored = base;
    else stored = stored + 1;
    window.localStorage.setItem(KEY, String(stored));
    base = stored;
  } catch (e) {
    /* the drawer is locked; the printed number stands */
  }

  el.textContent = String(base).replace(/^(\d+)$/, function (_, d) {
    while (d.length < 6) d = "0" + d;
    return d;
  });

  el.className = "counter-digits blink";
})();
