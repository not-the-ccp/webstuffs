/* Entry B-118 — the ruled line, as found.
   Stamps the entry the way the cutting room did it: a slow red
   impression, once, when the article settles into view. The text
   is all in the markup; this only adds the impression. */
(function () {
  var paper = document.getElementById("paper");
  if (!paper || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var stamp = document.createElement("div");
  stamp.className = "stamp";
  stamp.textContent = "As found \u00b7 ruled & closed";
  stamp.style.opacity = "0";
  paper.appendChild(stamp);

  var shown = false;
  function press() {
    if (shown) return;
    shown = true;
    stamp.style.transition = "opacity 900ms ease, transform 900ms ease";
    stamp.style.opacity = "0.8";
    stamp.style.transform = "rotate(6deg) scale(1)";
  }

  stamp.style.transform = "rotate(9deg) scale(1.35)";
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          setTimeout(press, 500);
          io.disconnect();
        }
      });
    }, { threshold: 0.25 });
    io.observe(paper);
  } else {
    window.addEventListener("load", function () { setTimeout(press, 800); });
  }
})();
