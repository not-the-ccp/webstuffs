/* Herbarium & Culinary Council — seal and page reveal */
(function () {
  var items = document.querySelectorAll(".item");

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // ensure the last item is always visible even if the observer is idle
  window.addEventListener("load", function () {
    setTimeout(function () {
      items.forEach(function (el) { el.classList.add("in"); });
    }, 2500);
  });

  var seal = document.getElementById("seal");
  var stamp = document.getElementById("stamp");
  if (seal && stamp) {
    seal.addEventListener("click", function () {
      stamp.classList.remove("press");
      // force reflow so the animation can restart
      void stamp.offsetWidth;
      stamp.classList.add("press");
    });
  }
})();
