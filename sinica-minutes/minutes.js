// Gentle reveal of the numbered minutes as they enter view.
(function () {
  var items = document.querySelectorAll(".items > li");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (li) { li.classList.add("in-view"); });
    return;
  }
  var shown = 0;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add("in-view");
        }, 80 * shown++);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(function (li) { observer.observe(li); });
})();
