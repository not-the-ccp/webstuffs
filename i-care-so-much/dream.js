/* Entry 214 — small machines for the sleeper */
(function () {
  "use strict";

  /* Care meter: flips the room between full and flat. */
  var button = document.getElementById("careButton");
  var body = document.body;
  if (button) {
    button.addEventListener("click", function () {
      var flat = body.classList.toggle("state-flat");
      body.classList.toggle("state-care", !flat);
      button.textContent = flat ? "care: 0" : "care: ∞";
      button.setAttribute("aria-pressed", String(!flat));
      if (flat) {
        // one slow blink, the way a control room does when nothing is running
        setTimeout(function () { body.classList.remove("state-flat"); body.classList.add("state-care"); button.textContent = "care: ∞"; button.setAttribute("aria-pressed", "true"); }, 4000);
      }
    });
  }

  /* Title glitch: the title occasionally drops out of its capitals and
     back, which is the whole argument of the entry. */
  var title = document.getElementById("dream-title");
  if (title) {
    var original = title.textContent;
    var glyphs = "x#@%&!?*+—";
    function scramble() {
      var out = "";
      for (var i = 0; i < original.length; i++) {
        if (Math.random() < 0.12 && original[i] !== " ") {
          out += glyphs.charAt(Math.floor(Math.random() * glyphs.length));
        } else {
          out += original[i];
        }
      }
      title.textContent = out;
      title.classList.add("glitching");
      setTimeout(function () {
        title.textContent = original;
        title.classList.remove("glitching");
      }, 450);
      setTimeout(scramble, 5000 + Math.random() * 6000);
    }
    setTimeout(scramble, 2500);
  }

  /* Star drift: the stars lean away from the pointer, very slightly. */
  var stars = document.getElementById("stars");
  if (stars && window.matchMedia && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    window.addEventListener("pointermove", function (e) {
      var dx = (e.clientX / window.innerWidth - 0.5) * -14;
      var dy = (e.clientY / window.innerHeight - 0.5) * -10;
      stars.style.transform = "translate(" + dx + "px, " + dy + "px)";
    }, { passive: true });
  }
})();
