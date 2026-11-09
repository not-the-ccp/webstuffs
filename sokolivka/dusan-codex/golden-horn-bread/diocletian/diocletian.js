/* Field Notes on Diocletian — the A.U.C. dial and the wax stamp */

(function () {
  "use strict";

  // Milestones of the specimen's reign, keyed to the scroll of the ledger.
  var MILESTONES = [
    { year: 284, name: "the troops proclaim Diocles" },
    { year: 286, name: "the first years of the reign" },
    { year: 290, name: "the western frontier settled" },
    { year: 293, name: "the Tetrarchy goes up — four thrones" },
    { year: 296, name: "the Caesar Constantius in the field" },
    { year: 301, name: "the Edict on Maximum Prices" },
    { year: 303, name: "the last full years of the grid" },
    { year: 305, name: "1 May — the abdication at Sirmium" },
    { year: 308, name: "the cabbages at Spalatum" },
    { year: 311, name: "the specimen at the garden wall" },
    { year: 312, name: "the palace outlives its emperor" }
  ];

  var yearOut = document.getElementById("era-year");
  var nameOut = document.getElementById("era-name");
  if (!yearOut || !nameOut) return;

  var START = 284, END = 312;

  function milestoneFor(year) {
    var current = MILESTONES[0];
    for (var i = 0; i < MILESTONES.length; i++) {
      if (year >= MILESTONES[i].year) current = MILESTONES[i];
    }
    return current;
  }

  var ticking = false;

  function paint() {
    ticking = false;
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var frac = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    var year = Math.round(START + frac * (END - START));
    yearOut.textContent = String(year);
    nameOut.textContent = milestoneFor(year).name;
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(paint);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  paint();

  // The wax stamp: click anywhere on the parchment and the ledger is examined.
  var stamp = document.getElementById("stamp");
  if (stamp) {
    var book = document.querySelector(".book");
    if (book) {
      book.addEventListener("click", function (e) {
        if (e.target.closest("a")) return; // links keep their business
        stamp.classList.add("stamped");
      });
    }
    stamp.addEventListener("click", function () {
      stamp.classList.remove("stamped");
    });
    // one early stamp, so a reader who never clicks still sees the ledger was kept
    setTimeout(function () { stamp.classList.add("stamped"); }, 2600);
    setTimeout(function () { stamp.classList.remove("stamped"); }, 9000);
  }
})();
