// The club register counts visitors from the kettle.
(function () {
  var el = document.getElementById("visitors");
  if (!el) return;
  var key = "sasp-visitors-61";
  var n;
  try {
    n = parseInt(localStorage.getItem(key), 10);
    if (isNaN(n)) n = 208;
  } catch (e) {
    n = 208;
  }
  n += 1;
  try { localStorage.setItem(key, String(n)); } catch (e) {}
  el.textContent = String(n).padStart(6, "0");
})();
