/* The desk stamp: the laurel of the Olympiad settles into the paper
   as the letter scrolls into view, and breathes gently after. */
(function () {
  var wreath = document.getElementById("wreath");
  if (!wreath || !("IntersectionObserver" in window)) return;

  var seen = false;
  wreath.style.transition = "transform 900ms ease-out, opacity 900ms ease-out";
  wreath.style.transform = "scale(1.15) rotate(-8deg)";
  wreath.style.opacity = "0";

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !seen) {
        seen = true;
        wreath.style.transform = "scale(1) rotate(0deg)";
        wreath.style.opacity = "1";
        io.unobserve(wreath);
      }
    });
  }, { threshold: 0.4 });
  io.observe(wreath);
})();
