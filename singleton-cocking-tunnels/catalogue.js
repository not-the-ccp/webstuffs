/* Lot 9, Catalogue D — the hammer falls, the lamps breathe */
(function () {
  var hammer = document.getElementById("hammer");
  if (hammer && hammer.dataset.fell === "yes") return;
  var target = parseInt(hammer.dataset.target || "34500", 10);
  var shown = Math.round(target * 0.82);
  var step = Math.max(250, Math.round(target * 0.002));
  var timer = setInterval(function () {
    shown += step;
    if (shown >= target) {
      shown = target;
      clearInterval(timer);
      hammer.style.color = "";
    }
    hammer.innerHTML = "&pound;" + shown.toLocaleString("en-GB");
  }, 60);
  hammer.dataset.fell = "yes";

  /* stagger the two lamps so the bores do not breathe in time */
  var lamps = document.querySelectorAll(".bores .lamp");
  if (lamps.length > 1) lamps[1].style.animationDelay = "2.2s";
})();
