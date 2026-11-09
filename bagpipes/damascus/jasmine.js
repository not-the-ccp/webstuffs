/* Travel Guide Entry No. 37 — hold the note, the way the cold room does. */
(function () {
  var btn = document.getElementById("hold");
  var line = document.getElementById("drone-line");
  if (!btn || !line) return;

  var base = line.textContent;
  var held = false;

  btn.addEventListener("click", function () {
    held = !held;
    btn.classList.toggle("held", held);
    if (held) {
      btn.textContent = "Holding \u2026 98\u00bc Hz";
      line.textContent = "The note is held. The arches are still in it.";
    } else {
      btn.textContent = "Hold the note";
      line.textContent = base;
    }
  });
})();
