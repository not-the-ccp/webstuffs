/* Field Manual FM-14/EC — Ecuador · interactive touches */
(function () {
  "use strict";

  /* Equator line draws itself on load. */
  window.addEventListener("load", function () {
    var line = document.querySelector(".eq-line");
    if (line) {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { line.classList.add("drawn"); });
      });
    }
  });

  /* Altimeter: needle swings up to Chimborazo (6,263 m) with a counting readout. */
  function runAltimeter() {
    var altmeter = document.getElementById("altmeter");
    var needle = document.getElementById("needle");
    var read = document.getElementById("alt-read");
    if (!altmeter || !needle || !read) return;

    var target = 6263;
    var done = false;
    var timer = null;

    function go() {
      if (done) return;
      done = true;
      needle.classList.add("set");
      var start = null;
      var dur = 2800;
      function step(ts) {
        if (start === null) start = ts;
        var t = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - t, 3);
        read.textContent = Math.round(target * eased).toLocaleString("en-US");
        if (t < 1) timer = requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) go(); });
    }, { threshold: 0.4 });
    io.observe(altmeter);
  }
  runAltimeter();

  /* The rubber stamp: each press re-inks it with a fresh rotation wobble. */
  var stamp = document.getElementById("stamp");
  if (stamp) {
    stamp.addEventListener("click", function () {
      var base = -9;
      var wobble = base + (Math.random() * 8 - 4);
      stamp.style.transform = "rotate(" + wobble + "deg) scale(1.02)";
      setTimeout(function () {
        stamp.style.transform = "";
      }, 220);
    });
  }

  /* The gravy line: a slow ink-bleed on hover, and one underline sweep on view. */
  var gravy = document.getElementById("gravy");
  if (gravy) {
    gravy.style.transition = "box-shadow 0.5s ease, color 0.5s ease";
    gravy.addEventListener("mouseenter", function () {
      gravy.style.boxShadow = "7px 7px 0 rgba(138,59,18,0.4)";
    });
    gravy.addEventListener("mouseleave", function () {
      gravy.style.boxShadow = "";
    });
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          io2.disconnect();
          setTimeout(function () {
            gravy.style.background =
              "linear-gradient(0deg, rgba(138,59,18,0.16), rgba(138,59,18,0.16)) no-repeat left bottom / 0% 0.55em, " +
              "linear-gradient(120deg, rgba(138, 59, 18, 0.08), transparent 55%), " +
              "repeating-linear-gradient(0deg, rgba(28, 26, 23, 0.06) 0 1px, transparent 1px 26px)";
            gravy.style.backgroundSize = "100% 0.55em, auto, auto";
            gravy.style.backgroundRepeat = "no-repeat, repeat, repeat";
            gravy.style.backgroundPosition = "left bottom, 0 0, 0 0";
            gravy.style.transition = "background-size 1.6s ease, box-shadow 0.5s ease";
          }, 700);
        }
      });
    }, { threshold: 0.5 });
    io2.observe(gravy);
  }
})();
