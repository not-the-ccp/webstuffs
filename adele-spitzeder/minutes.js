/* Minutes No. 31 — florin ticker, the count of the register, and the seal */
(function () {
  "use strict";

  // ---------- the florin ticker, doubled so the roll loops seamlessly ----------
  var ledger = [
    "Viktoriastra&szlig;e cash box &middot; 6 Nov 1884 &middot; <b>200,000 fl. found</b>",
    "claims presented &middot; <b>30,792,411 fl.</b>",
    "interest paid to the 1879 subscribers &middot; <i>112,000 fl., in full</i>",
    "the stage pension, paid in praise &middot; <i>no figure</i>",
    "deposits taken at the gilded lobby, 1882 &middot; <i>two million fl. in the year</i>",
    "the return offered &middot; 6&frac12;% per month, from 200 fl. upwards",
    "creditors of the register &middot; <b>8,104 names</b>",
    "widowed creditors of the register &middot; 316",
    "lake wells folio &middot; <i>third line of the marginal note, kept as it lies</i>"
  ];

  var track = document.getElementById("ticker-track");
  if (track) {
    var half = ledger.map(function (s) { return " &nbsp;&#10086;&nbsp; " + s; }).join("");
    track.innerHTML = half + half;
  }

  // ---------- the register count, run once, in the assessor's own time ----------
  var target = 8104;
  var started = false;

  function runCount() {
    if (started) return;
    started = true;
    var node = document.getElementById("register-count");
    if (!node) return;
    var step = 0;
    function tick() {
      step += 1;
      if (step >= target) {
        node.textContent = target.toLocaleString("en-US");
        node.removeAttribute("data-unfinished");
        return;
      }
      node.textContent = step.toLocaleString("en-US");
      // slower as it nears the end, the way the ledger does
      var iv = step > target * 0.95 ? 45 : (step > target * 0.8 ? 22 : 6);
      setTimeout(tick, iv);
    }
    tick();
  }

  var marginal = document.querySelector(".marginal");
  if (marginal && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { runCount(); io.disconnect(); }
      });
    }, { threshold: 0.4 });
    io.observe(marginal);
  } else {
    window.addEventListener("load", runCount);
  }

  // ---------- the seal can be pressed: one witness, once, out of sympathy ----------
  var seal = document.querySelector(".seal");
  var pressed = false;
  if (seal) {
    seal.style.cursor = "pointer";
    seal.addEventListener("click", function () {
      if (pressed) return;
      pressed = true;
      var p = document.querySelector(".adjourned p");
      if (!p) return;
      var note = document.createElement("span");
      note.className = "witness";
      note.style.cssText =
        "display:inline-block;margin-left:0.6rem;font-style:italic;color:#7a1f1f;" +
        "opacity:0;transition:opacity 1.6s ease;";
      note.textContent = " \u2014 and one witness, present and counting.";
      p.appendChild(note);
      requestAnimationFrame(function () { note.style.opacity = "1"; });
    });
  }
})();
