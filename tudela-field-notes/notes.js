// Field Notes No. 208 — a small mist counter for the colophon.
(function () {
  var el = document.getElementById("count");
  if (!el) return;
  var base = el.textContent;
  var mist = 0;
  setInterval(function () {
    mist = (mist + 1) % 40;
    el.textContent = base + "  \u00b7  mist index: " + mist + "/40";
  }, 3000);
})();
