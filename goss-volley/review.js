// The Canaries' Tavern — Diners' Desk: small table-side effects.

(function () {
  "use strict";

  // A tiny clock that plays the first half, then holds at 2–1.
  var replayEl = document.getElementById("replay");
  if (replayEl) {
    var minute = 0;
    setInterval(function () {
      minute += 1;
      if (minute > 45) {
        replayEl.textContent = "45:00 — half time, 1–2";
        return;
      }
      replayEl.textContent = minute + ":00";
    }, 700);
  }

  // Goal badges: clicking one shows who scored and when.
  var goals = document.querySelectorAll(".goal");
  goals.forEach(function (badge) {
    badge.addEventListener("click", function () {
      badge.textContent = badge.dataset.label.split(",")[0];
      setTimeout(function () {
        badge.textContent = badge.dataset.label.split(",")[1].trim();
      }, 900);
    });
  });

  // The canary swivels toward the pointer.
  var canary = document.querySelector(".canary");
  if (canary) {
    document.addEventListener("pointermove", function (e) {
      var dx = (e.clientX / window.innerWidth - 0.5) * 10;
      canary.style.transform = "rotate(" + dx.toFixed(1) + "deg)";
    });
  }
})();
