// St Botwine — minutes: reveal entries as they come into view.
(function () {
  var root = document.documentElement;
  root.classList.remove("no-js");

  var entries = Array.prototype.slice.call(document.querySelectorAll(".entry"));
  if (!("IntersectionObserver" in window)) {
    entries.forEach(function (e) { e.classList.add("shown"); });
    return;
  }

  var observer = new IntersectionObserver(function (items) {
    items.forEach(function (item) {
      if (item.isIntersecting) {
        item.target.classList.add("shown");
        observer.unobserve(item.target);
      }
    });
  }, { threshold: 0.12 });

  entries.forEach(function (e) { observer.observe(e); });
})();
