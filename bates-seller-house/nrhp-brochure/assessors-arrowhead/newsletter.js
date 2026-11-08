// The Assessor's Arrowhead — No. 47
// Press for the assessor's stamp; it is kept, as everything here is, on record.
(function () {
  var btn = document.getElementById("stampBtn");
  var stamp = document.getElementById("stamp");
  if (!btn || !stamp) return;

  var presses = 0;

  btn.addEventListener("click", function () {
    presses += 1;
    stamp.classList.remove("stamped");
    // restart the stamp animation
    void stamp.offsetWidth;
    stamp.classList.add("stamped");
    stamp.innerHTML = "ASSESSED<br>&amp; KEPT<br>\u2605 No. 47 \u2605";
    if (presses > 3) {
      stamp.innerHTML = "ASSESSED<br>&amp; KEPT<br>\u2605 No. 47 \u2605<br>re-pressed, " + presses + "\u00d7";
    }
    btn.textContent = "Pressed " + presses + " \u00d7 \u00b7 one nickel each";
  });
})();
