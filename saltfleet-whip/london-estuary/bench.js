/* Bench No. 3 — visitor counter for the estuary build log. */
(function () {
  var key = "estuary-bench-visitors";
  var count = 0;
  try {
    count = parseInt(localStorage.getItem(key), 10) || 0;
    count += 1;
    localStorage.setItem(key, String(count));
  } catch (e) {
    count = 1437 + (new Date().getDate() * 3);
  }
  var el = document.getElementById("counter");
  if (el) {
    var s = String(count);
    while (s.length < 6) s = "0" + s;
    el.textContent = s;
  }
})();
