/* Field Manual FM-11W, Chapter 21 — small serviceable touches; the manual reads fine without this */
(function () {
  "use strict";

  // Stamp in the control corner on load, as if the copy were just issued.
  var stamp = document.querySelector(".stamp");
  if (stamp) {
    stamp.style.opacity = "0";
    stamp.style.transform = "rotate(-22deg) scale(1.6)";
    requestAnimationFrame(function () {
      stamp.style.transition = "opacity 0.35s ease, transform 0.5s cubic-bezier(0.2, 1.6, 0.4, 1)";
      stamp.style.opacity = "0.85";
      stamp.style.transform = "rotate(-7deg) scale(1)";
    });
  }

  // Milepost counter in the footer: counts the chapter's paragraph numbers,
  // the way the route counts mileposts — one per entry, none deleted.
  var foot = document.querySelector(".footline p");
  var paras = document.querySelectorAll(".para p.num");
  if (foot && paras.length) {
    var suffix = document.createTextNode("");
    foot.appendChild(suffix);
    var n = 0;
    var timer = setInterval(function () {
      n += 1;
      suffix.nodeValue = "  ·  ENTRIES CHECKED: " + n + "/" + paras.length;
      if (n >= paras.length) { clearInterval(timer); suffix.nodeValue = "  ·  ENTRIES CHECKED: " + paras.length + " OF " + paras.length + " · NONE STRUCK OUT"; }
    }, 220);
  }
})();
