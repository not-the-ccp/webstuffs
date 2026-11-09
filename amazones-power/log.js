/* Build Log No. 12 — the bench lamp and the spin counter.
   The log reads fine without this; the light is a courtesy. */
(function () {
  var lamp = document.createElement("span");
  lamp.id = "bench-light";
  lamp.title = "Bench lamp: on";
  document.body.appendChild(lamp);

  // A small spin counter, kept like the keeper keeps his chalk count.
  var key = "amz12-spins";
  var spins = Number(localStorage.getItem(key)) || 3;
  var note = document.createElement("p");
  note.className = "spin-note";
  note.textContent = "Full plays logged this month: " + spins + " spins.";
  note.style.fontFamily = '"Courier New", Courier, monospace';
  note.style.fontSize = "0.8rem";
  note.style.color = "#5c5142";
  note.style.margin = "0.4rem 0 0";
  note.style.cursor = "pointer";
  note.setAttribute("role", "button");
  note.setAttribute("tabindex", "0");
  note.setAttribute("aria-pressed", "false");
  note.title = "press to log one full play";
  var tick = function () {
    spins += 1;
    localStorage.setItem(key, String(spins));
    note.textContent = "Full plays logged this month: " + spins + " spins.";
  };
  note.addEventListener("click", tick);
  note.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); tick(); }
  });
  var foot = document.querySelector("footer.colophon");
  if (foot) foot.appendChild(note);

  // The bench lamp dims when the page loses focus, as a real bench lamp does.
  window.addEventListener("blur", function () {
    lamp.style.opacity = "0.45";
    lamp.title = "Bench lamp: dim";
  });
  window.addEventListener("focus", function () {
    lamp.style.opacity = "1";
    lamp.title = "Bench lamp: on";
  });
})();
