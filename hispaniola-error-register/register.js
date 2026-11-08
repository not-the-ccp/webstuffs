/* Register No. 48,671 — a cursor kept alive on the uncorrected line. */
(function () {
  var line = document.querySelector(".verbatim p");
  if (!line) return;
  var caret = document.createElement("span");
  caret.className = "caret";
  caret.setAttribute("aria-hidden", "true");
  line.appendChild(caret);
})();
