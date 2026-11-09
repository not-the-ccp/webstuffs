/* Visitor counter for PCS-88. Increments once per session and stores the
   count locally. The sheet stays readable without this script. */
(function () {
  var key = "pcs88-visits";
  var el = document.getElementById("ctr");
  if (!el || !window.localStorage) return;
  var n = parseInt(window.localStorage.getItem(key), 10) || 1426;
  window.localStorage.setItem(key, n + 1);
  el.textContent = String(n + 1).padStart(6, "0");
})();
