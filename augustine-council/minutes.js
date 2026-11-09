// Red minute book, item no. 597 — the chair's stamp, applied once.
(function () {
  var note = document.getElementById("certNote");
  if (!note) return;

  note.textContent = "Certified a true copy — the chair, at the hour of the last cask";
  note.style.cursor = "pointer";
  note.title = "Apply the chair's stamp";

  var stamped = false;
  note.addEventListener("click", function () {
    if (stamped) {
      note.classList.remove("shown");
      note.textContent = "Stamp withdrawn — the minutes remain as entered";
      stamped = false;
      note.style.cursor = "pointer";
      return;
    }
    stamped = true;
    note.classList.add("shown");
    note.style.cursor = "default";
    note.title = "Withdraw the stamp";
  });
})();
