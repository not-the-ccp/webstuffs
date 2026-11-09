/* The Drafting Room — Thread No. 249 · small effects, all optional.
   The thread reads fine with this file off; the candles just stand still. */
(function () {
  "use strict";

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Stagger the candles so the eleven do not march — the room does not march. */
  var flames = document.querySelectorAll(".candle .flame");
  for (var i = 0; i < flames.length; i++) {
    var f = flames[i];
    f.style.animationDelay = (i * 0.23).toFixed(2) + "s";
    f.style.animationDuration = (1.4 + (i % 3) * 0.35).toFixed(2) + "s";
  }

  /* Count the replies up once, the way the bench keeps a ledger. */
  var replyEl = document.querySelector(".thread-meta strong");
  var posts = document.querySelectorAll(".board .post");
  if (replyEl && !reduced) {
    var target = posts.length - 1; /* replies, not the opener */
    var n = 0;
    replyEl.textContent = "0";
    var timer = setInterval(function () {
      n += 1;
      replyEl.textContent = n;
      if (n >= target) clearInterval(timer);
    }, 260);
  }

  /* A kept line, clicked, warms — the way a lid warms in a candle room. */
  var kept = document.querySelectorAll(".kept");
  for (var k = 0; k < kept.length; k++) {
    kept[k].style.cursor = "pointer";
    kept[k].addEventListener("click", function () {
      this.style.transition = "background 0.6s ease, box-shadow 0.6s ease";
      this.style.boxShadow = "0 0 18px rgba(224,166,59,0.65)";
      var self = this;
      setTimeout(function () { self.style.boxShadow = "none"; }, 1100);
    });
  }

  /* Each post lights itself as it scrolls into view. */
  if ("IntersectionObserver" in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "translateY(0)";
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    posts.forEach(function (p) {
      p.style.opacity = "0";
      p.style.transform = "translateY(14px)";
      p.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      io.observe(p);
    });
  }
})();
