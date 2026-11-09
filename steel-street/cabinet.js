// KA-89 marquee flicker — decorative only; the page reads fine without it.
(function () {
  var title = document.querySelector(".marquee h1");
  if (!title) return;
  var shadows = [
    "4px 4px 0 #d64541, 8px 8px 0 rgba(0,0,0,.45)",
    "4px 4px 0 #d64541, 8px 8px 0 rgba(0,0,0,.45), 0 0 18px rgba(255,179,71,.5)"
  ];
  var i = 0;
  setInterval(function () {
    i = (i + 1) % shadows.length;
    title.style.textShadow = shadows[i];
  }, 1400);
})();
