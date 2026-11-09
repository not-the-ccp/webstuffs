// The entry is still open: the death year is refused, not pending.
(function () {
  var dates = document.getElementById("dates");
  var year = document.getElementById("death-year");
  var svg = document.querySelector(".star-svg");

  if (svg) svg.classList.add("spinning");

  if (dates && year) {
    var refused = false;
    dates.addEventListener("click", function () {
      refused = !refused;
      year.innerHTML = refused
        ? '<span class="refused">refused</span>'
        : "&middot;";
    });
  }

  // Fade the paragraphs in as the record is read.
  var paras = Array.prototype.slice.call(document.querySelectorAll(".prose p"));
  if (!paras.length) return;

  if ("IntersectionObserver" in window) {
    document.body.classList.add("reveal");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("shown");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    paras.forEach(function (p) { io.observe(p); });
  }
})();
