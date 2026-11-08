/* Pace bar: how far along the 63.324 miles the reader is. */
(function () {
  var bar = document.createElement("div");
  bar.id = "pace-bar";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);
  function update() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var pct = max > 0 ? (h.scrollTop || document.body.scrollTop) / max : 0;
    bar.style.width = (pct * 100).toFixed(2) + "%";
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
