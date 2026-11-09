// The counting-room touches: paragraphs ink themselves in as they enter
// view; the wax seal sways once when touched; the postmark keeps time.
(function () {
  "use strict";

  var paragraphs = Array.prototype.slice.call(
    document.querySelectorAll(".letter p, .dateline, .salutation, .signature")
  );

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("shown");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    paragraphs.forEach(function (p, i) {
      p.style.transitionDelay = (i % 5) * 90 + "ms";
      observer.observe(p);
    });
  } else {
    paragraphs.forEach(function (p) { p.classList.add("shown"); });
  }

  // The seal sways when pressed, like a coin turned in the light.
  var seal = document.getElementById("seal");
  if (seal) {
    var sway = 0;
    seal.addEventListener("click", function () {
      sway += 14;
      seal.style.transform = "rotate(" + sway + "deg)";
      setTimeout(function () {
        seal.style.transform = "";
        sway = 0;
      }, 600);
    });
  }
})();
