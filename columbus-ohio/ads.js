/* The Scioto Ledger — classified desk effects */
(function () {
  "use strict";

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- ticker: duplicate the track so the scroll loops seamlessly --- */
  var track = document.getElementById("ticker-track");
  if (track && !reduce) {
    track.innerHTML += track.innerHTML;
  }

  /* --- the barometer rises to 30.42 and holds --- */
  var baro = document.getElementById("barometer");
  if (baro) {
    if (reduce) {
      baro.textContent = "30.42";
    } else {
      var start = null;
      var from = 29.0, to = 30.42, dur = 2600;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min(1, (ts - start) / dur);
        var eased = 1 - Math.pow(1 - p, 3);
        baro.textContent = (from + (to - from) * eased).toFixed(2);
        if (p < 1) requestAnimationFrame(step);
        else baro.textContent = to.toFixed(2) + ", holding";
      }
      window.addEventListener("load", function () { requestAnimationFrame(step); });
    }
  }

  /* --- the lost line, decoded in the old style --- */
  var line = document.getElementById("lost-line");
  if (line) {
    var plain = line.textContent;
    if (!reduce) {
      var glyphs = "abcdefghikmnorstuvwxABCEHIKLMNOPRSTUVWY·—";
      var frames = 26;
      var frame = 0;
      function decode() {
        frame++;
        line.textContent = plain
          .split("")
          .map(function (ch, i) {
            if (ch === " " || frame / frames >= i / plain.length) return ch;
            return glyphs[Math.floor(Math.random() * glyphs.length)];
          })
          .join("");
        if (frame < frames) {
          setTimeout(decode, 55);
        } else {
          line.textContent = plain;
          line.classList.add("decoded");
        }
      }
      var seen = false;
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting && !seen) {
            seen = true;
            decode();
            io.disconnect();
          }
        });
      }, { threshold: 0.4 });
      io.observe(line);
    } else {
      line.classList.add("decoded");
    }
  }

  /* --- clicking an ad files it --- */
  document.querySelectorAll(".ad").forEach(function (ad) {
    ad.addEventListener("click", function () {
      ad.classList.toggle("stamped");
    });
  });

  /* --- the desk's word count, kept for the 7B --- */
  var body = document.body;
  if (body) {
    var words = (body.innerText || "").trim().split(/\s+/).length;
    var small = document.querySelector(".colophon-line.small");
    if (small) {
      var node = document.createElement("span");
      node.textContent = " · " + words + " words, counted at the desk";
      small.appendChild(node);
    }
  }
})();
