/* A light touch for Chapter VII: the gilt rule breathes, and entries
   settle onto the page as the reader reaches them. The text is fully
   readable with this script absent. */
(function () {
  "use strict";

  var rule = document.querySelector(".rule");
  if (rule && "animate" in Element.prototype) {
    rule.animate(
      [
        { opacity: 0.55 },
        { opacity: 1 },
        { opacity: 0.55 }
      ],
      { duration: 3800, iterations: Infinity, easing: "ease-in-out" }
    );
  }

  var entries = document.querySelectorAll(".entry");
  if (!entries.length) return;

  if (!("IntersectionObserver" in window)) return;

  var seen = new WeakSet();
  var observer = new IntersectionObserver(function (items) {
    items.forEach(function (item) {
      if (item.isIntersecting && !seen.has(item.target)) {
        seen.add(item.target);
        if ("animate" in Element.prototype) {
          item.target.animate(
            [
              { opacity: 0.35, transform: "translateY(6px)" },
              { opacity: 1, transform: "translateY(0)" }
            ],
            { duration: 450, easing: "ease-out" }
          );
        }
        observer.unobserve(item.target);
      }
    });
  }, { threshold: 0.15 });

  entries.forEach(function (entry) { observer.observe(entry); });
})();
