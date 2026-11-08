// Stamp the filing date when the page settles; text stays complete without it.
(function () {
  var stamp = document.querySelector(".stamp");
  if (!stamp || !("IntersectionObserver" in window)) return;
  stamp.style.transition = "opacity 0.9s ease 0.35s, transform 0.9s ease 0.35s";
  stamp.style.opacity = "0";
  stamp.style.transform = "rotate(8deg) scale(1.25)";
  var seen = false;
  var show = function () {
    if (seen) return;
    seen = true;
    requestAnimationFrame(function () {
      stamp.style.opacity = "0.82";
      stamp.style.transform = "rotate(8deg) scale(1)";
    });
  };
  new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        show();
        show = function () {};
      }
    });
  }).observe(document.body);
  setTimeout(show, 1600);
})();
