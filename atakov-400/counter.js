/* Visitor counter for the concourse. Purely decorative; the text reads
   fine without it. */
(function () {
  "use strict";
  var el = document.getElementById("visitors");
  if (!el) return;
  var base = 41837; // 37 rounds of the women's 400, four digits of the year
  var bump = 0;
  try {
    bump = Math.floor((Date.now() % 86400000) / 3600000);
  } catch (e) { bump = 0; }
  var n = base + bump;
  el.textContent = String(n).padStart ? String(n).padStart(7, "0") : ("0000000" + n).slice(-7);
  el.classList.add("blink");
  // stop blinking after a while so nobody's eyes get tired
  setTimeout(function () { el.classList.remove("blink"); }, 9000);
})();
