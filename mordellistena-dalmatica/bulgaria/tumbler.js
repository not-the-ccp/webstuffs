/* Case 12, Placard No. 0207 — the tumbler may be turned; the Gallery does not verify tumbling. */
(function () {
  var btn = document.getElementById("flip-btn");
  var beetle = document.getElementById("tumbler");
  var countEl = document.getElementById("flip-count");
  var feetEl = document.getElementById("flip-feet");
  if (!btn || !beetle) return;

  var flips = 0;
  var onFeet = 0;

  btn.addEventListener("click", function () {
    if (beetle.classList.contains("flipping")) return;
    beetle.classList.add("flipping");
    flips += 1;
    countEl.textContent = String(flips);
    setTimeout(function () {
      // The tumbler lands on its feet or it does not. No commentary.
      if (flips % 3 === 0) onFeet += 1;
      feetEl.textContent = String(onFeet);
    }, 900);
    beetle.addEventListener("animationend", function () {
      beetle.classList.remove("flipping");
    }, { once: true });
  });
})();
