/* Council of the Far Bank · Minutes No. 215 — the quay, the snow, and the seal */
(function () {
  "use strict";

  /* Drifting snow over the meeting. */
  var field = document.getElementById("snow");
  if (field) {
    var reduced = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) {
      var glyphs = ["\u00B7", "\u2022", "\u00B7"];
      for (var i = 0; i < 34; i++) {
        var s = document.createElement("span");
        s.className = "flake";
        s.textContent = glyphs[i % glyphs.length];
        s.style.left = (Math.random() * 100).toFixed(2) + "vw";
        s.style.fontSize = (8 + Math.random() * 10).toFixed(0) + "px";
        s.style.opacity = (0.25 + Math.random() * 0.5).toFixed(2);
        s.style.setProperty("--drift", ((Math.random() - 0.5) * 160).toFixed(0) + "px");
        s.style.animationDuration = (11 + Math.random() * 18).toFixed(1) + "s";
        s.style.animationDelay = (-Math.random() * 24).toFixed(1) + "s";
        field.appendChild(s);
      }
    }
  }

  /* The sitting adjourned at 14:00 and was found at 14:04. */
  var clock = document.getElementById("clock");
  if (clock) {
    var marks = ["14:00", "14:01", "14:02", "14:03", "14:04"];
    var k = 0;
    var tick = setInterval(function () {
      k++;
      if (k >= marks.length) { clearInterval(tick); return; }
      clock.textContent = marks[k];
    }, 2400);
  }

  /* The seal, pressed into the margin of the record. */
  var btn = document.getElementById("quorum");
  var seal = document.getElementById("seal");
  var stamp = null;

  function makeStamp() {
    if (stamp || !document.body) return;
    stamp = document.createElement("div");
    stamp.id = "in-quorum";
    stamp.textContent = "In Quorum";
    document.body.appendChild(stamp);
  }

  if (btn && seal) {
    btn.addEventListener("click", function () {
      var pressed = btn.getAttribute("aria-pressed") === "true";
      if (pressed) {
        btn.setAttribute("aria-pressed", "false");
        seal.classList.remove("pressed");
        return;
      }
      btn.setAttribute("aria-pressed", "true");
      seal.classList.add("pressed");
      makeStamp();
      if (stamp) {
        stamp.classList.add("show");
        setTimeout(function () {
          if (stamp) stamp.classList.remove("show");
        }, 1600);
      }
    });
  }
})();
