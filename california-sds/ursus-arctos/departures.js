// Departure-board clock for the Sierra & Pacific Bear Railway.
// Pure garnish: the page reads fine without it.
(function () {
  var el = document.getElementById("clock");
  if (!el) return;
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function tick() {
    var d = new Date();
    el.textContent = pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
  }
  tick();
  setInterval(tick, 1000);

  // the little red carriage under the section headings
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) {
    document.querySelectorAll(".ticket h2").forEach(function (h) {
      var t = document.createElement("span");
      t.className = "train";
      t.setAttribute("aria-hidden", "true");
      h.appendChild(t);
    });
  }
})();
