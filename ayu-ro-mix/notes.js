/* Field Notes, Vol. XII — progressive reveal for the entries */
(function () {
  var entries = document.querySelectorAll(".entry");
  if (!("IntersectionObserver" in window) || !entries.length) return;
  entries.forEach(function (el) { el.classList.add("reveal"); });
  var io = new IntersectionObserver(function (boxes) {
    boxes.forEach(function (box) {
      if (box.isIntersecting) {
        box.target.classList.add("shown");
        io.unobserve(box.target);
      }
    });
  }, { threshold: 0.12 });
  entries.forEach(function (el) { io.observe(el); });
})();
