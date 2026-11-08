/* NR-2 · 98.4 MHz — a small touch for The Nine-Thousand Metre Hour.
   Fades scenes in as they enter the audience's ear, and lets the
   tuning needle answer the dial. Text is fully readable without it. */
(function () {
  "use strict";

  // Gentle fade-in for scenes as the page scrolls.
  var scenes = document.querySelectorAll(".scene, .cast, .related");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.transition = "opacity 0.9s ease, transform 0.9s ease";
          entry.target.style.opacity = "1";
          entry.target.style.transform = "none";
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    scenes.forEach(function (el) {
      el.style.opacity = "0.25";
      el.style.transform = "translateY(8px)";
      io.observe(el);
    });
  }

  // The needle drifts when the dial is hovered, as if someone's
  // hand is near the knob.
  var dial = document.querySelector(".dial");
  var needle = document.querySelector(".dial .needle");
  if (dial && needle) {
    dial.addEventListener("mousemove", function (e) {
      var r = dial.getBoundingClientRect();
      var pct = (e.clientX - r.left) / r.width;
      needle.style.animation = "none";
      needle.style.transition = "left 0.25s ease-out";
      needle.style.left = (8 + pct * 84) + "%";
    });
    dial.addEventListener("mouseleave", function () {
      needle.style.transition = "left 1.2s ease";
      needle.style.left = "50%";
      setTimeout(function () { needle.style.animation = "waver 6s ease-in-out infinite"; }, 1300);
    });
  }
})();
