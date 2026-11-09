/* Card No. 7 — small touches; the recipe reads fine without any of it */

(function () {
  "use strict";

  /* 1. The line, kept word for word: a slow underline crawls under it once,
        as if the committee were reading it aloud a fourth time. */
  var line = document.getElementById("theline");
  if (line && "IntersectionObserver" in window) {
    var done = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !done) {
          done = true;
          line.classList.add("heard");
          var note = document.querySelector(".correction-note");
          if (note) {
            setTimeout(function () { note.hidden = false; }, 1800);
          }
          io.disconnect();
        }
      });
    }, { threshold: 0.6 });
    io.observe(line);
  } else if (line) {
    var note2 = document.querySelector(".correction-note");
    if (note2) note2.hidden = false;
  }

  /* 2. The rosette stamp: click the button, a rosette lands on the card
        where you asked for it. Up to seven, one per member. */
  var ROSETTE_SVG =
    '<svg class="rosette-stamp" viewBox="0 0 120 120">' +
    '<circle cx="60" cy="60" r="20" fill="#c8102e" stroke="#7a0c1e" stroke-width="3"/>' +
    '<circle cx="60" cy="30" r="14" fill="#c8102e" stroke="#7a0c1e" stroke-width="3"/>' +
    '<circle cx="86" cy="42" r="14" fill="#c8102e" stroke="#7a0c1e" stroke-width="3"/>' +
    '<circle cx="86" cy="78" r="14" fill="#c8102e" stroke="#7a0c1e" stroke-width="3"/>' +
    '<circle cx="60" cy="90" r="14" fill="#c8102e" stroke="#7a0c1e" stroke-width="3"/>' +
    '<circle cx="34" cy="78" r="14" fill="#c8102e" stroke="#7a0c1e" stroke-width="3"/>' +
    '<circle cx="34" cy="42" r="14" fill="#c8102e" stroke="#7a0c1e" stroke-width="3"/>' +
    '<circle cx="60" cy="60" r="12" fill="#f6ecd9" stroke="#7a0c1e" stroke-width="3"/>' +
    "</svg>";

  var stampBtn = document.getElementById("stamp");
  if (stampBtn) {
    var count = 0;
    stampBtn.addEventListener("click", function (ev) {
      if (count >= 7) {
        var msg = stampBtn.textContent;
        stampBtn.textContent = "Seven, one per member";
        setTimeout(function () { stampBtn.textContent = msg; }, 1500);
        return;
      }
      count += 1;
      var wrap = document.createElement("span");
      wrap.innerHTML = ROSETTE_SVG;
      var svg = wrap.firstChild;
      var x = ev.clientX - 35;
      var y = ev.clientY - 35;
      var r = document.documentElement.getBoundingClientRect();
      if (x < 4 || x > r.width - 74) x = 40 + Math.random() * (r.width - 150);
      if (y < 4 || y > r.height - 74) y = 60;
      svg.style.left = x + "px";
      svg.style.top = y + "px";
      document.body.appendChild(svg);
      setTimeout(function () {
        svg.style.transition = "opacity 2s ease";
        svg.style.opacity = "0.35";
      }, 4000);
    });
  }
})();
