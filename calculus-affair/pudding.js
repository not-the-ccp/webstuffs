/* Grandma Odette's Sonic Wave Pudding — a small counter, kept like a guestbook. */
(function () {
  var el = document.getElementById("counter");
  if (!el) return;

  var start = 419;
  try {
    var seen = parseInt(localStorage.getItem("pudding-visitor"), 10);
    if (seen > start) start = seen;
  } catch (e) { /* the larder is locked; count from the card's number */ }

  start += 1;
  try { localStorage.setItem("pudding-visitor", String(start)); } catch (e) {}

  var n = String(start);
  while (n.length < 6) n = "0" + n;
  el.textContent = n;
})();
