// Entry 431 — the sleeping ledger: numerals drift down the page like a
// forecast nobody asked for, and the lot card ticks when you scroll to it.
(function () {
  "use strict";

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // --- drifting numerals -------------------------------------------------
  var drift = document.getElementById("numdrift");
  if (drift && !reduce) {
    var tokens = [
      "I = 0.4127", "NOK 2,400", "12,486", "494,399", "POP2011", "UNEMP",
      "p < 0.05", "sp / rgdal", "morán", "2.114", "1968", "33 yrs",
      "W = 0.318", "Avon", "half-day", "thesis 249", "kettle"
    ];
    for (var i = 0; i < 22; i++) {
      var s = document.createElement("span");
      s.textContent = tokens[i % tokens.length];
      s.style.left = (Math.random() * 96) + "%";
      s.style.fontSize = (10 + Math.random() * 14) + "px";
      s.style.animationDuration = (26 + Math.random() * 40) + "s";
      s.style.animationDelay = (-Math.random() * 50) + "s";
      drift.appendChild(s);
    }
  }

  // --- lot card: one soft glow pulse when it enters the viewport ---------
  var card = document.querySelector(".lot-card");
  if (card && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          card.style.transition = "box-shadow 1.6s ease";
          card.style.boxShadow =
            "8px 8px 0 rgba(201,163,90,0.14), 0 0 64px rgba(201,163,90,0.35)";
          setTimeout(function () {
            card.style.boxShadow = "";
          }, 2200);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(card);
  }
})();
