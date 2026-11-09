/* Entry 61,214 — the door, the dust, and the house clock */
(function () {
  "use strict";

  /* ---- the door ---- */
  var BASE = 132741; // slams since 20 December 1879, per the prompt-keeper's ledger
  var count = BASE;
  var btn = document.getElementById("slam");
  var countEl = document.getElementById("slam-count");
  var totalEl = document.getElementById("slam-total");

  function paint(n) {
    var s = n.toLocaleString("en-US");
    if (countEl) countEl.textContent = s;
    if (totalEl) totalEl.textContent = s;
  }

  if (btn) {
    btn.addEventListener("click", function () {
      count += 1;
      paint(count);
      btn.classList.remove("slamming");
      void btn.offsetWidth; // restart the animation
      btn.classList.add("slamming");
      document.body.classList.remove("slammed");
      void document.body.offsetWidth;
      document.body.classList.add("slammed");
      setTimeout(function () {
        btn.classList.remove("slamming");
        document.body.classList.remove("slammed");
      }, 500);
    });
  }

  /* ---- dust motes in the gaslight ---- */
  var field = document.getElementById("dust");
  if (field && window.matchMedia && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    for (var i = 0; i < 16; i++) {
      var m = document.createElement("span");
      m.className = "mote";
      m.style.left = (Math.random() * 100).toFixed(2) + "%";
      m.style.top = (20 + Math.random() * 80).toFixed(2) + "%";
      var dur = 9 + Math.random() * 14;
      m.style.animationDuration = dur.toFixed(2) + "s";
      m.style.animationDelay = (-Math.random() * dur).toFixed(2) + "s";
      m.style.opacity = (0.2 + Math.random() * 0.5).toFixed(2);
      field.appendChild(m);
    }
  }

  /* ---- the house clock: a slow drift from quarter to ten, forever ----
     (it is quarter to ten in the drawing room when the tarantella ends) */
  var min = document.querySelector("#houseclock .hand.min");
  if (min) {
    min.style.animation = "none"; // keep it where the tarantella left it: 9:57
    min.style.transform = "rotate(354deg)";
  }
})();
