// Bocusoides build log — advance the reading trail dot as entries scroll into view.
(function () {
  var trailHead = document.getElementById("trail-head");
  var masthead = document.querySelector(".masthead");
  if (!trailHead || !masthead) return;

  function widthOf() {
    return masthead.getBoundingClientRect().width - trailHead.offsetWidth - 24;
  }

  function place(fraction) {
    var max = widthOf();
    trailHead.style.transition = "transform 900ms ease";
    trailHead.style.transform =
      "translateX(" + Math.max(0, Math.min(max, max * fraction)) + "px)";
  }

  function onScroll() {
    var doc = document.documentElement;
    var total = doc.scrollHeight - window.innerHeight;
    var frac = total > 0 ? window.scrollY / total : 0;
    place(frac);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
})();
