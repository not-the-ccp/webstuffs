/* The Noctuary of Fungi — gill maturation: the stamp settles, then the spores set.
   Pure garnish; every sentence of the entry reads fine without it. */
(function () {
  var stamp = document.getElementById("stamp");
  if (stamp) {
    // the keeper's stamp is pressed, not pasted: it lands with a small press
    stamp.style.opacity = "0";
    stamp.style.transform = "rotate(-5deg) scale(1.35)";
    stamp.style.transition = "opacity 0.5s ease, transform 0.5s cubic-bezier(0.2, 1.6, 0.4, 1)";
    window.addEventListener("load", function () {
      setTimeout(function () {
        stamp.style.opacity = "1";
        stamp.style.transform = "rotate(-5deg) scale(1)";
      }, 600);
    });
  }

  var page = document.getElementById("page");
  if (!page) return;

  // the gills turn: as the reader sinks down the page, the leaf takes on
  // a faint spore-pink wash, white at the top and pink at the spore line
  var target = null;
  function onScroll() {
    var r = page.getBoundingClientRect();
    var vh = window.innerHeight || 1;
    var frac = (vh * 0.75 - r.top) / (r.height * 0.6);
    frac = Math.max(0, Math.min(1, frac));
    page.style.background =
      "linear-gradient(180deg, rgba(255,255,255,0.4), rgba(255,255,255,0) 14%)," +
      "repeating-linear-gradient(0deg, rgba(110,47,82,0.028) 0 2px, transparent 2px 27px)," +
      "linear-gradient(180deg, #f4ecdc 0%, #e9dcc2 " + (30 + frac * 40).toFixed(1) + "%, rgba(201,111,142," + (0.08 + frac * 0.14).toFixed(3) + "))";
  }
  window.addEventListener("scroll", function () {
    if (target) cancelAnimationFrame(target);
    target = requestAnimationFrame(onScroll);
  }, { passive: true });
  window.addEventListener("load", onScroll);
})();
