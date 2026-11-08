/* Green Book visitor counter — kept by the clerk, not by God */
(function () {
  var base = 4127;
  function pad(n) {
    n = String(n);
    while (n.length < 6) n = "0" + n;
    return n;
  }
  function showCount() {
    var el = document.getElementById("counter-digits");
    if (!el) return;
    el.textContent = pad(base + Math.floor(Math.random() * 4));
    setTimeout(showCount, 2500);
  }
  function start() {
    showCount();
    var d = document.getElementById("sitdate");
    if (d) d.textContent = new Date().toDateString();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
