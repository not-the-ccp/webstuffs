/* Memorial lamp: the candle count breathes; a lamp glyph flickers beside it. */
(function () {
  var el = document.getElementById("candles");
  if (!el) return;
  var base = parseInt(el.textContent.replace(/[^\d]/g, ""), 10) || 1844;
  var n = base;
  setInterval(function () {
    if (Math.random() < 0.7) n += 1;
    el.textContent = n.toLocaleString("en-US");
  }, 4000);
  var lamp = document.createElement("span");
  lamp.id = "memoriam-lamp";
  lamp.textContent = "\u26A1";
  lamp.title = "one lamp, still burning";
  el.parentNode.insertBefore(lamp, el);
})();
