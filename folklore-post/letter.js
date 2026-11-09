/* To the Editor of The Gif — letter effects.
   Everything the page says is readable without this;
   this only stamps, seals, and drifts the fog. */
(function () {
  "use strict";

  var postmark = document.getElementById("postmark");
  var seal = document.getElementById("seal");
  var sealMessage = document.getElementById("seal-message");
  var fogBands = Array.prototype.slice.call(document.querySelectorAll(".fog-band"));
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // The letter arrives postmarked at the fifth meeting of the winter.
  function stampPostmark() {
    if (postmark) postmark.classList.add("stamped");
  }

  // The wax seal: press it to receive the letter in the manner of the minute book.
  var sealed = false;
  var waxLines = [
    "Received, in the minute book, at the fifth meeting of the winter. The defect stands entered; the parishes continue, as the house has done in similar lots, to disagree usefully.",
    "Stamped again, for fairness. The fire is kept, the door is the wrong colour, and the letter is entered on the line beneath the tea account.",
    "The seventh chair observes. The reader may now sit down; the fog will not be waiting for the kettle."
  ];
  var waxCount = 0;

  if (seal && sealMessage) {
    seal.addEventListener("click", function () {
      seal.classList.add("sealed");
      sealed = true;
      var line = waxLines[Math.min(waxCount, waxLines.length - 1)];
      waxCount += 1;
      sealMessage.classList.add("sealed");
      sealMessage.textContent = line;
      // A brief press, like a seal against parchment.
      seal.style.transform = "scale(0.9)";
      window.setTimeout(function () { seal.style.transform = ""; }, 140);
    });
  }

  if (reduced) {
    stampPostmark();
    return;
  }

  window.setTimeout(stampPostmark, 600);

  // The fog answers to the hand that moves it, a little.
  if (fogBands.length) {
    var target = { x: 0, y: 0 };
    var current = { x: 0, y: 0 };
    window.addEventListener("mousemove", function (e) {
      target.x = (e.clientX / window.innerWidth - 0.5) * 30;
      target.y = (e.clientY / window.innerHeight - 0.5) * 12;
    }, { passive: true });
    (function drift() {
      current.x += (target.x - current.x) * 0.03;
      current.y += (target.y - current.y) * 0.03;
      for (var i = 0; i < fogBands.length; i += 1) {
        var depth = (i + 1) * 0.6;
        fogBands[i].style.marginLeft = (current.x * depth).toFixed(1) + "px";
        fogBands[i].style.marginTop = (current.y * depth).toFixed(1) + "px";
      }
      window.requestAnimationFrame(drift);
    })();
  }
})();
