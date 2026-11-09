// FM-9 Addendum B — the range check: a small meter that shows,
// on the cover dial, how far the bench is from whatever is asking.
(function () {
  var dial = document.querySelector(".dial");
  if (!dial || !window.matchMedia || !matchMedia("(prefers-reduced-motion: no-preference)").matches) return;

  var dot = document.createElement("span");
  dot.className = "pair-dot";
  dot.title = "the paired device, wherever it is";
  dot.style.cssText = "position:absolute;bottom:-5px;width:8px;height:8px;margin-left:-4px;border-radius:50%;background:#7fd7c4;box-shadow:0 0 6px #7fd7c4;transition:left 2.4s ease-in-out;";
  dial.appendChild(dot);

  // drift the paired device back and forth across the band,
  // staying inside the 2.402–2.480 span, as if it were hopping channels
  var pos = 30;
  function hop() {
    var next = 12 + Math.random() * 76;
    dot.style.left = next + "%";
    pos = next;
    setTimeout(hop, 1600 + Math.random() * 1200);
  }
  hop();
})();
