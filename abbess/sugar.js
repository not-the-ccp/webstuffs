/* Walk-in Board, Thread No. 63 — the sifting of sugar, gradually */
(function () {
  "use strict";

  // Posts stand as they are written without script; with it, they
  // rise into the light of the board in turn.
  var posts = document.querySelectorAll(".post");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    posts.forEach(function (p) { io.observe(p); });
  } else {
    posts.forEach(function (p) { p.classList.add("in"); });
  }

  // A light sifting of sugar over the page — a few grains at a time,
  // never more than the recipe allows.
  var field = document.getElementById("sugar");
  if (field) {
    var flakes = 14;
    for (var i = 0; i < flakes; i++) {
      var s = document.createElement("span");
      s.style.left = (Math.random() * 100) + "%";
      s.style.animationDuration = (9 + Math.random() * 14) + "s";
      s.style.animationDelay = (Math.random() * 12) + "s";
      var size = 2 + Math.round(Math.random() * 3);
      s.style.width = size + "px";
      s.style.height = size + "px";
      field.appendChild(s);
    }
  }
})();
