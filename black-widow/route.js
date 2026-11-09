// Route No. 52 — the departure stamp
(function () {
  var stamp = document.querySelector(".stamp");
  if (!stamp) return;
  var label = "ROUTE 52 · KEEP LEFT AT SOKOVIA";
  var caret = 0;
  setInterval(function () {
    caret = (caret + 1) % (label.length + 1);
    stamp.style.opacity = 0.55 + 0.45 * Math.abs(Math.sin(caret * 0.9));
  }, 700);
})();
