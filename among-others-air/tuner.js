/* Dragons, By Post — tuner.js
   Draws the dial tick marks, swings the needle to 565 kHz on load,
   and toggles a static overlay. Pure garnish: the play reads fine
   with all of this off. */
(function () {
  "use strict";

  // --- dial ticks along the top of the frame ---
  var ticks = document.getElementById("ticks");
  if (ticks && typeof SVGElement !== "undefined") {
    var NS = "http://www.w3.org/2000/svg";
    for (var i = 0; i <= 60; i++) {
      var x = 40 + (i * 1120) / 60;
      var line = document.createElementNS(NS, "line");
      line.setAttribute("x1", x);
      line.setAttribute("x2", x);
      line.setAttribute("y1", i % 5 === 0 ? 40 : 54);
      line.setAttribute("y2", 64);
      if (i % 5 === 0) line.setAttribute("class", "major");
      ticks.appendChild(line);

      if (i % 10 === 0) {
        var t = document.createElementNS(NS, "text");
        t.setAttribute("x", x);
        t.setAttribute("y", 86);
        t.setAttribute("fill", "#e8b45a");
        t.setAttribute("fill-opacity", "0.55");
        t.setAttribute("font-family", "monospace");
        t.setAttribute("font-size", "15");
        t.setAttribute("text-anchor", "middle");
        t.textContent = String(500 + i * 1);
        ticks.appendChild(t);
      }
    }
  }

  // --- needle: swings in from the left edge, settles on 565 ---
  var needle = document.getElementById("needle");
  if (needle) {
    needle.style.left = "4%";
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        needle.style.left = "56.5%"; // 565 kHz, of course
      });
    });
  }

  // --- static toggle: brief burst, or hold while pressed twice fast ---
  var stage = document.getElementById("stage");
  var btn = document.getElementById("staticToggle");
  var hold = null;
  if (stage && btn) {
    btn.addEventListener("click", function () {
      if (stage.classList.contains("static-on")) {
        stage.classList.remove("static-on");
        btn.textContent = "tap the dial for static";
        return;
      }
      stage.classList.add("static-on");
      btn.textContent = "clear the static";
      clearTimeout(hold);
      hold = setTimeout(function () {
        stage.classList.remove("static-on");
        btn.textContent = "tap the dial for static";
      }, 2600);
    });
  }

  // --- the on-air lamp breathes with the clock; the postbag lands ---
  // a small scroll cue: scenes lift off the page as they enter view.
  var scenes = document.querySelectorAll(".scene");
  if (scenes.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "none";
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    scenes.forEach(function (s) {
      s.style.opacity = "0.001";
      s.style.transform = "translateY(14px)";
      s.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      io.observe(s);
    });
  }
})();
