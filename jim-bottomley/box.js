// Lot 66 — small counter-room effects for the Bottomley Stone Box page.
(function () {
  "use strict";

  // Light up the rating stars.
  var stars = document.getElementById("stars");
  if (stars) {
    var rating = parseFloat(stars.dataset.rating || "0");
    var starEls = stars.querySelectorAll(".star");
    starEls.forEach(function (el, i) {
      if (i + 1 <= Math.floor(rating)) {
        el.classList.add("lit");
      } else if (el.classList.contains("half")) {
        el.style.opacity = "0.6";
      }
    });
  }

  // The price ticks over once, like a shop counter turning.
  var price = document.getElementById("price");
  if (price) {
    var target = parseFloat(price.textContent) || 0;
    var start = target * 2;
    var t0 = null;
    var dur = 900;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      price.textContent = (target + (start - target) * eased).toFixed(2);
      if (p < 1) requestAnimationFrame(step);
      else price.textContent = target.toFixed(2);
    }
    requestAnimationFrame(step);
  }

  // The provenance button simply walks to the ledger.
  var specBtn = document.getElementById("spec-btn");
  if (specBtn) {
    specBtn.addEventListener("click", function () {
      var prov = document.getElementById("provenance");
      if (prov) prov.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // The reserve button: the shop answers shorter.
  var reserve = document.getElementById("reserve-btn");
  if (reserve) {
    reserve.addEventListener("click", function () {
      var label = reserve.textContent;
      reserve.textContent = "Reserved — lot 66, the case by the window";
      reserve.disabled = true;
      reserve.style.opacity = "0.75";
      setTimeout(function () {
        reserve.textContent = label;
        reserve.disabled = false;
        reserve.style.opacity = "";
      }, 3500);
    });
  }
})();
