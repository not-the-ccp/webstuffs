/* The Brine Hollow Gazette, Letters Page — counter and scrolling top bar.
   The page reads fine without this script. */

(function () {
  "use strict";

  // Visitor counter: start where the dynamo room last inked it, nudge it by one.
  var counterEl = document.getElementById("visitor-counter");
  if (counterEl) {
    var base = 4127;
    var tryKey;
    try { tryKey = window.localStorage.getItem("bh-gazette-count"); } catch (e) { tryKey = null; }
    var seen = tryKey ? parseInt(tryKey, 10) : base;
    var show = (seen > base) ? seen : base + 1;
    try { window.localStorage.setItem("bh-gazette-count", String(show)); } catch (e) {}
    counterEl.textContent = String(show).replace(/\d/g, function (d) { return d; }).padStart(7, "0");
  }

  // Guestbook: the book is kept by the barrel, but the box can at least answer.
  var signEl = document.getElementById("sign-guestbook");
  var noteEl = document.getElementById("gb-note");
  if (signEl && noteEl) {
    signEl.addEventListener("click", function (ev) {
      ev.preventDefault();
      noteEl.textContent = "noted. the page is held at the foot of the queue, open, with a plate that gives only its six seasons of dates.";
    });
  }

  // Scrolling top bar, the way it used to.
  var topbar = document.querySelector(".topbar");
  if (topbar) {
    var speed = 1.2; // pixels per frame
    var x = 0;
    var half = Math.ceil(topbar.scrollWidth / 2) || topbar.scrollWidth;
    topbar.style.overflow = "hidden";
    // duplicate content so the loop has no visible seam
    topbar.innerHTML = topbar.innerHTML + topbar.innerHTML;
    (function scrollStep() {
      x -= speed;
      if (x <= -half) x = 0;
      topbar.style.textIndent = x + "px";
      window.requestAnimationFrame(scrollStep);
    })();
  }
})();
