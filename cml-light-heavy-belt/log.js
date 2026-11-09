/* Build Log No. 11 — the rivet tally climbs from 0 to 317, once the page settles.
   The text reads fine without it: the number simply sits at 0. */
(function () {
  var el = document.getElementById("rivet-count");
  if (!el) return;
  var target = 317,
      current = 0,
      step = 3;
  el.textContent = String(current);
  var timer = setInterval(function () {
    current = Math.min(target, current + step);
    el.textContent = String(current);
    if (current >= target) clearInterval(timer);
  }, 38);
})();
