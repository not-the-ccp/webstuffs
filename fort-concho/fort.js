/* Fort Concho · storehouse effects — readable without it */
(function () {
  "use strict";

  // Camp embers drifting up the page
  var layer = document.querySelector(".embers");
  if (layer && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    for (var i = 0; i < 18; i++) {
      var e = document.createElement("span");
      e.className = "ember";
      e.style.left = (Math.random() * 100).toFixed(2) + "%";
      e.style.setProperty("--drift", ((Math.random() - 0.5) * 120).toFixed(0) + "px");
      e.style.animationDuration = (7 + Math.random() * 9).toFixed(2) + "s";
      e.style.animationDelay = (-Math.random() * 12).toFixed(2) + "s";
      e.style.width = e.style.height = (3 + Math.random() * 4).toFixed(1) + "px";
      layer.appendChild(e);
    }
  }

  // Muster roll counter
  var btn = document.getElementById("ledger-btn");
  var count = document.getElementById("ledger-count");
  if (btn && count) {
    var n = 4318;
    btn.addEventListener("click", function () {
      n += 1;
      count.textContent = n.toLocaleString("en-US") + " on the roll this season";
      btn.textContent = "ROLL ENTRIES: " + (n - 4318) + " — THE POST ADJUTANT NOTICES";
      var old = btn.style.transform;
      btn.style.transform = "scale(.96)";
      setTimeout(function () { btn.style.transform = old; }, 130);
    });
  }

  // Gentle parallax tilt on the crate
  var crate = document.querySelector(".crate");
  if (crate && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    window.addEventListener("scroll", function () {
      var y = window.scrollY || 0;
      crate.style.transform = "translateY(" + (Math.min(y * 0.015, 8).toFixed(2)) + "px)";
    }, { passive: true });
  }
})();
