/* FRS-1898 · Rev. 7 — darkroom.js
   Plates develop as they scroll into view; the ledger line develops character by character. */

(function () {
  "use strict";

  // Develop the error cards as they enter the light.
  var cards = document.querySelectorAll(".error, .ledger, .cure");
  if ("IntersectionObserver" in window) {
    cards.forEach(function (card) {
      card.style.opacity = "0";
      card.style.transform = "translateY(10px)";
      card.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "none";
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    cards.forEach(function (card) { io.observe(card); });
  }

  // Develop the kept ledger line, one character at a time,
  // starting only when it is seen. The final text is never changed.
  var kept = document.querySelector("blockquote.kept p");
  if (kept && "IntersectionObserver" in window) {
    var full = kept.textContent;
    var shown = 0;
    var ioLine = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      ioLine.disconnect();
      var timer = setInterval(function () {
        shown += 2;
        kept.textContent = full.slice(0, shown);
        if (shown >= full.length) {
          clearInterval(timer);
          kept.textContent = full;
        }
      }, 18);
    }, { threshold: 0.6 });
    ioLine.observe(kept);
  }

  // The revision code develops like wet collodion on first view.
  var rev = document.getElementById("rev");
  if (rev) {
    var target = rev.textContent;
    var chars = "0123456789FRS-";
    rev.textContent = "";
    var n = 0;
    var t = setInterval(function () {
      n += 1;
      var out = "";
      for (var i = 0; i < target.length; i++) {
        out += i < n ? target[i] : chars[Math.floor(Math.random() * chars.length)];
      }
      rev.textContent = out;
      if (n >= target.length) {
        clearInterval(t);
        rev.textContent = target;
      }
    }, 90);
  }
})();
