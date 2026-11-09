/* The Conscience Register Office — Small Ads Column No. XXII
   The press stamp: click it and a stamp flies down onto a random ad. */
(function () {
  "use strict";

  var WORDS = ["REGISTERED", "READ ALOUD", "KEPT WORD FOR WORD", "NO RETURN", "FILED", "IN FULL"];
  var COLORS = ["#8f2d1e", "#1f3a5f", "#a67c2e"];

  function pressStamp() {
    var ads = document.querySelectorAll(".ad");
    if (!ads.length) return;
    var ad = ads[Math.floor(Math.random() * ads.length)];
    var rect = ad.getBoundingClientRect();

    var fly = document.createElement("span");
    fly.className = "stamp-fly";
    fly.textContent = WORDS[Math.floor(Math.random() * WORDS.length)];
    fly.style.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    fly.style.left = (rect.left + rect.width * (0.25 + Math.random() * 0.4)) + "px";
    fly.style.top = (rect.top + rect.height * (0.3 + Math.random() * 0.35)) + "px";
    document.body.appendChild(fly);

    fly.addEventListener("animationend", function () {
      fly.remove();
    });
  }

  var press = document.getElementById("stampPress");
  if (press) {
    press.addEventListener("click", pressStamp);
    press.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        pressStamp();
      }
    });
  }
})();
