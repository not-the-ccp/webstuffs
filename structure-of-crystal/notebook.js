/* Festival Notebook — a gate counter on the projector, ticking as the page scrolls */
(function () {
  var el = document.getElementById("frame-counter");
  if (!el) return;
  var frame = 0;
  function paint() {
    el.textContent = String(frame).padStart(6, "0");
  }
  function onScroll() {
    var next = Math.min(2400, Math.round(window.scrollY / 1.5));
    if (next > frame) {
      frame = next;
      paint();
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  paint();
})();
