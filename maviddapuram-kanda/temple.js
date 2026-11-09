/* Maviddapuram Town Council, Session No. 7 — page effects */
(function () {
  "use strict";

  // Wrap the tamboola words so the marquee can loop.
  var strip = document.getElementById("tamboola");
  if (strip) {
    var inner = document.createElement("span");
    inner.className = "tamboola-inner";
    inner.textContent = strip.textContent;
    strip.textContent = "";
    strip.appendChild(inner);
  }

  // The gopuram bell: strike it and it rings once, counting the strikes.
  var bell = document.getElementById("temple-bell");
  var strikes = 0;
  if (bell) {
    var note = document.createElement("span");
    note.className = "bell-ring-note";
    note.textContent = "";
    bell.parentElement.appendChild(note);
    var roman = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
    bell.addEventListener("click", function () {
      strikes += 1;
      note.textContent = "STRIKE " + (roman[Math.min(strikes, 12)] || strikes);
      note.classList.add("show");
      bell.classList.remove("ringing");
      // force reflow so the animation can restart
      void bell.offsetWidth;
      bell.classList.add("ringing");
      window.clearTimeout(note._t);
      note._t = window.setTimeout(function () { note.classList.remove("show"); }, 2600);
    });
    window.setTimeout(function () {
      bell.classList.add("ringing");
      window.setTimeout(function () { bell.classList.remove("ringing"); }, 1200);
    }, 1400);
  }

  // Reveal the sections of the minute book as they enter the light.
  var sections = document.querySelectorAll(".roll, .item, .close, .foot");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("shown");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    sections.forEach(function (s) { io.observe(s); });
  } else {
    sections.forEach(function (s) { s.classList.add("shown"); });
  }
})();
