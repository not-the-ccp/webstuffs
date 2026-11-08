/* Chapter XVII — the greeting, demonstrated: the hands join and part. */
(function () {
  var palms = document.getElementById("palms");
  var cap = document.getElementById("palms-cap");
  if (!palms || !cap) return;

  var joined = false;
  var idle = null;

  function give() {
    joined = !joined;
    palms.classList.toggle("joined", joined);
    cap.textContent = joined
      ? "Namaste. The hands before the words, the half inch kept."
      : "Press to give the greeting — the hands before the words, the half inch kept.";
    if (joined) {
      clearTimeout(idle);
      idle = setTimeout(function () { give(); }, 4200);
    }
  }

  palms.addEventListener("click", give);
  palms.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); give(); }
  });
})();
