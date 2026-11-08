/* Mortensrud diary — winter light over the platform. */
(function () {
  "use strict";

  var snowbox = document.getElementById("snow");
  if (snowbox && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var flakes = 26;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < flakes; i++) {
      var f = document.createElement("i");
      var s = 2 + Math.random() * 4;
      f.style.left = Math.random() * 100 + "vw";
      f.style.width = s + "px";
      f.style.height = s + "px";
      f.style.opacity = (0.3 + Math.random() * 0.6).toFixed(2);
      f.style.animationDuration = (7 + Math.random() * 10).toFixed(1) + "s";
      f.style.animationDelay = (-Math.random() * 16).toFixed(1) + "s";
      frag.appendChild(f);
    }
    snowbox.appendChild(frag);
  }

  // The departure-board ledger: clicking a row makes its lamp blink out and back,
  // the way the real board does when it changes its mind.
  var rows = document.querySelectorAll(".ledger li");
  rows.forEach(function (row) {
    row.style.cursor = "pointer";
    row.title = "tap to blink the row";
    row.addEventListener("click", function () {
      row.style.transition = "none";
      row.style.opacity = "0.15";
      setTimeout(function () {
        row.style.transition = "opacity 0.25s";
        row.style.opacity = "1";
        setTimeout(function () { row.style.transition = ""; }, 300);
      }, 180);
    });
  });

  // A quiet platform chime at the top of the page — two short tones, no sound.
  var stamp = document.querySelector(".stamp-date");
  if (stamp) {
    stamp.style.cursor = "default";
    stamp.addEventListener("mouseenter", function () {
      stamp.style.transform = "rotate(0.8deg) scale(1.02)";
      stamp.style.transition = "transform 0.3s ease";
    });
    stamp.addEventListener("mouseleave", function () {
      stamp.style.transform = "rotate(-1.4deg)";
    });
  }
})();
