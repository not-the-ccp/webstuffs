// Cantons of the South Stand — visitor counter, 1988–2014 pressing
(function () {
  var el = document.getElementById("visit-counter");
  if (!el) return;
  var base = 14023; // the number of sleeves pulled
  var extra = 0;
  try {
    extra = parseInt(localStorage.getItem("souline-088-visits") || "0", 10) + 1;
    localStorage.setItem("souline-088-visits", String(extra));
  } catch (e) { extra = 0; }
  var n = base + extra;
  el.textContent = ("000000" + n).slice(-6);
})();
