/* Entry 432 — Botany · the ticker keeps its own pace */
(function () {
  var run = document.querySelector(".ticker .run");
  if (run) {
    // duplicate the run so the drift loops without a seam
    run.textContent += run.textContent;
  }

  // the count cards reach bloom in order, on the garden's own beat
  var cards = document.querySelectorAll(".count-card .count-num");
  if (cards.length && "IntersectionObserver" in window) {
    var seen = 0;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.transition = "none";
          e.target.textContent = e.target.getAttribute("data-final");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.6 });
    cards.forEach(function (c, i) {
      c.setAttribute("data-final", c.textContent);
      c.textContent = "0";
      c.style.opacity = "0";
      c.style.transition = "opacity 0.6s ease " + (i * 0.35) + "s";
      setTimeout(function () { c.style.opacity = "1"; }, 60 * i);
      io.observe(c);
    });
  }
})();
