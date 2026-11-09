/* The Closed Sea — Route No. 2: let each stop of the route arrive as it scrolls into view. */
(function () {
  document.documentElement.classList.add("js");
  var entries = document.querySelectorAll(".entry");
  if (!("IntersectionObserver" in window)) {
    entries.forEach(function (el) { el.classList.add("arrived"); });
    return;
  }
  var observer = new IntersectionObserver(function (items) {
    items.forEach(function (item) {
      if (item.isIntersecting) {
        item.target.classList.add("arrived");
        observer.unobserve(item.target);
      }
    });
  }, { threshold: 0.12 });
  entries.forEach(function (el) { observer.observe(el); });
})();
