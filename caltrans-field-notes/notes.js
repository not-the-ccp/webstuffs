/* Field notes — quiet reveal of entries as they come into the log. */
(function () {
  "use strict";
  var entries = document.querySelectorAll(".entry, .filing");
  if (!("IntersectionObserver" in window) || !entries.length) return;
  var seen = new IntersectionObserver(function (items) {
    items.forEach(function (item) {
      if (item.isIntersecting) {
        item.target.classList.add("seen");
        seen.unobserve(item.target);
      }
    });
  }, { threshold: 0.12 });
  entries.forEach(function (el) { seen.observe(el); });
})();
