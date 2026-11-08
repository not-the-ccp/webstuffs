/* The Met Register — Classifieds.
   1. The East Door odometer counts up to 5,727,258, then ticks on its own.
   2. The masthead title decodes from chisel scrap.
   3. Clicking an ad lays the registrar's CLAIMED stamp on it. */

(function () {
  "use strict";

  /* ── visitor odometer ── */
  var odo = document.getElementById("visitor-odometer");
  if (odo) {
    var TOTAL = 5727258;
    var value = 0;
    var step = Math.ceil(TOTAL / 90);
    var timer = setInterval(function () {
      value = Math.min(TOTAL, value + step);
      odo.textContent = value.toLocaleString("en-US");
      if (value >= TOTAL) {
        clearInterval(timer);
        setInterval(function () {
          /* the register keeps taking names; it just wraps the page */
          if (Math.random() < 0.5) {
            odo.style.background = "#3e5c48";
            setTimeout(function () { odo.style.background = ""; }, 260);
          }
        }, 4000);
      }
    }, 28);
  }

  /* ── masthead decode ── */
  var title = document.getElementById("masthead-title");
  if (title) {
    var word = title.textContent;
    var glyphs = "\u25AC\u25A0\u00A7\u00D7\u25C6\u2726\u2190\u2192\u00BB\u2014";
    var frame = 0;
    var total = 26;
    var d = setInterval(function () {
      frame++;
      var settled = Math.floor((frame / total) * word.length);
      var out = "";
      for (var i = 0; i < word.length; i++) {
        if (i < settled || word[i] === " ") {
          out += word[i];
        } else {
          out += glyphs[Math.floor(Math.random() * glyphs.length)];
        }
      }
      title.textContent = out;
      if (frame >= total) {
        clearInterval(d);
        title.textContent = word;
      }
    }, 55);
  }

  /* ── claim stamps ── */
  var ads = document.querySelectorAll(".ad");
  Array.prototype.forEach.call(ads, function (ad) {
    ad.addEventListener("click", function (e) {
      if (e.target.closest("a")) return; /* links are not for claiming */
      ad.classList.toggle("claimed");
    });
  });
})();
