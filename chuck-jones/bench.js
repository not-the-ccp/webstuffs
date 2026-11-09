// The Animation Bench, Vol. IX — a running frame count in the corner,
// like the exposure sheet tallying itself. Purely decorative; the page
// reads fine without it.
(function () {
  var el = document.createElement("div");
  el.id = "frame-count";
  el.setAttribute("aria-hidden", "true");
  var bench = document.getElementById("bench");
  if (!bench || !bench.firstElementChild) return;
  bench.firstElementChild.appendChild(el);

  var frame = 0;
  function tick() {
    frame = (frame + 1) % 1800; // 75 seconds at 24 frames a second
    el.textContent = "FRAME " + String(frame).padStart(4, "0") + " / 1800";
  }
  tick();
  setInterval(tick, 41.67);
})();
