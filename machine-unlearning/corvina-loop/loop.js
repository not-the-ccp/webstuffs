/* The Corvina Loop — small touches for the route card and stop highlights */
(function () {
  "use strict";

  // Highlight the stop markers on the route ribbon as their sections scroll into view.
  var dots = document.querySelectorAll(".routemap .dot");
  var stops = document.querySelectorAll(".stop");

  if ("IntersectionObserver" in window && dots.length && stops.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var idx = Array.prototype.indexOf.call(stops, entry.target);
        if (idx === -1 || !dots[idx]) return;
        dots[idx].classList.add("lit");
        dots[idx].style.transform = "scale(1.25)";
        dots[idx].style.transition = "transform 0.3s ease";
      });
    }, { threshold: 0.35 });
    stops.forEach(function (s) { observer.observe(s); });
  }

  // Tilt the printed card a touch more when it is clicked, like handling paper.
  var card = document.querySelector(".route-card");
  if (card) {
    var flipped = false;
    card.addEventListener("click", function () {
      flipped = !flipped;
      card.style.transform = flipped ? "rotate(0.8deg)" : "rotate(-0.6deg)";
      card.style.transition = "transform 0.4s ease";
    });
  }
})();
