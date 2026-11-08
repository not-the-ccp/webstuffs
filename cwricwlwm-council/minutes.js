/* Minutes of the Curriculum Council of Wales — 14 March 2025 */
(function () {
  "use strict";

  var html = document.documentElement;
  html.classList.add("js");
  html.classList.remove("no-js");

  /* Reveal each entry as it enters the window. */
  var entries = Array.prototype.slice.call(document.querySelectorAll(".entry"));

  if ("IntersectionObserver" in window) {
    var seen = new Set();
    var io = new IntersectionObserver(function (batch) {
      batch.forEach(function (rec) {
        if (rec.isIntersecting && !seen.has(rec.target)) {
          seen.add(rec.target);
          rec.target.classList.add("visible");
        }
      });
    }, { threshold: 0.12 });
    entries.forEach(function (el) { io.observe(el); });
    /* Safety: if the observer never fires (odd engines), show all. */
    setTimeout(function () {
      entries.forEach(function (el) { el.classList.add("visible"); });
    }, 2500);
  } else {
    entries.forEach(function (el) { el.classList.add("visible"); });
  }

  /* The wax seal: strike it as the reader arrives, and again at the end. */
  var wax = document.getElementById("wax");
  if (wax) {
    wax.addEventListener("click", function () {
      wax.classList.remove("struck");
      void wax.offsetWidth; /* restart the animation */
      wax.classList.add("struck");
    });
  }

  /* A small running tally in the footer, in the clerk's manner:
     items recorded out of items set down. */
  var foot = document.querySelector(".foot-links");
  if (foot && entries.length) {
    var tally = document.createElement("span");
    tally.className = "tally";
    var shown = 0;
    function refresh() {
      tally.textContent = " · items in the record: " + shown + " of " + entries.length;
    }
    refresh();
    var tallyIo = new IntersectionObserver(function (batch) {
      batch.forEach(function (rec) {
        if (rec.isIntersecting && rec.target.dataset.counted !== "1") {
          rec.target.dataset.counted = "1";
          shown += 1;
          refresh();
        }
      });
    }, { threshold: 0.3 });
    if ("IntersectionObserver" in window) {
      entries.forEach(function (el) { tallyIo.observe(el); });
    } else {
      shown = entries.length;
      refresh();
    }
    foot.appendChild(document.createTextNode(" "));
    foot.appendChild(tally);
  }
})();
