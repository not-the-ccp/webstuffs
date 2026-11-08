/* Già — liner notes: platter control, ticker, and side indicator */
(function () {
  "use strict";

  var disc = document.getElementById("disc");
  if (disc) {
    disc.addEventListener("click", function () {
      disc.classList.toggle("stopped");
    });
  }

  var tracks = [
    "TRACK A1 — BAG OF CLOTHES (VIA MONTENAPOLEONE, 1977) · 3:41",
    "TRACK A2 — SHOOT HER IN THE JACKET (UOMO BAZAAR, AUTUMN 1978) · 2:58",
    "TRACK A3 — THE BLEACH · 4:12",
    "TRACK A4 — BALL MACHINE, WELLINGTON (1978) · 1:33",
    "TRACK A5 — AMERICAN VOGUE, FRONT · 5:06",
    "TRACK A6 — FOUR HOUSES: ARMANI / DIOR / VERSACE / SAINT LAURENT · 3:27",
    "TRACK B1 — HALSTON (THE 1982 MET) · 4:44",
    "TRACK B2 — THE ST. JOHNS FERRY (A FIXED POINT) · 2:19",
    "TRACK B3 — QUIT (1983) · 3:05",
    "TRACK B4 — 135TH STREET, NEW YORK · 6:12",
    "TRACK B5 — 18 NOVEMBER 1986 · 1:34",
    "TRACK B6 — NO. 15 (A LATER COUNT) · 2:47"
  ];

  var ticker = document.getElementById("ticker-text");
  if (ticker) {
    // Double the list so the CSS crawl loops seamlessly.
    var line = tracks.join("  ·  ") + "  ·  ";
    ticker.textContent = line + line;
  }

  var indicator = document.getElementById("side-indicator");
  var sideA = document.getElementById("side-a");
  var sideB = document.getElementById("side-b");
  if (indicator && sideA && sideB && "IntersectionObserver" in window) {
    function watch(el, label) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            indicator.textContent = label;
            disc.classList.remove("stopped");
          }
        });
      }, { rootMargin: "-40% 0px -40% 0px" });
      io.observe(el);
    }
    watch(sideA, "SIDE A");
    watch(sideB, "SIDE B");
  }
})();
