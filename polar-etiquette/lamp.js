/* The Frozen North, Chapter IX — the kitchen lamp of the drift.
   Adds the small decorative lamp; the chapter reads fine without it. */
(function () {
  var book = document.querySelector(".book");
  if (!book || book.querySelector(".lamp")) return;
  var lamp = document.createElement("div");
  lamp.className = "lamp";
  lamp.setAttribute("aria-hidden", "true");
  lamp.title = "Trimmed at two o'clock";
  book.appendChild(lamp);
})();
