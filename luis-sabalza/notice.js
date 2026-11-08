/* Notice No. 402 — the clerk's stamp */
(function () {
  var btn = document.getElementById("stampBtn");
  var note = document.getElementById("stampNote");
  var stamp = document.getElementById("stamp");
  if (!btn || !note) return;

  btn.addEventListener("click", function () {
    btn.disabled = true;
    btn.style.opacity = "0.55";
    btn.style.cursor = "default";
    note.textContent = "FOUND — 11:40, Gate C. The tunnel is short; the Society is patient.";
    if (stamp) {
      stamp.style.transition = "transform 0.25s ease";
      stamp.style.transform = "rotate(8deg) scale(1.06)";
      setTimeout(function () {
        stamp.style.transform = "rotate(-11deg)";
      }, 260);
    }
  });
})();
