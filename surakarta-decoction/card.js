// Card 112 — pressing the seal brings the reprinted line to red ink.
(function () {
  var seal = document.getElementById("seal");
  var reprint = document.getElementById("reprint");
  if (!seal || !reprint) return;

  seal.addEventListener("click", function () {
    reprint.classList.toggle("pressed");
    if (reprint.classList.contains("pressed")) {
      reprint.style.boxShadow = "0 0 0 1px var(--seal), 0 8px 18px rgba(140,47,27,.18)";
      reprint.style.transform = "scale(1.01)";
    } else {
      reprint.style.boxShadow = "";
      reprint.style.transform = "";
    }
  });
})();
