/* Field notes, Specimen Log No. 88 — the Kirkcaldy stillness meter.
   Counts the minutes of stillness the reader has held on this page.
   Any scroll or key press resumes the count; the meter itself only
   ever moves forward, the way a tide mark on a wall does. */
(function () {
  var meter = document.getElementById("stillMeter");
  if (!meter) return;

  var seconds = 0;
  var settled = false;
  var timer = null;
  var settleDelay = 4000; // four seconds of no motion = one held breath

  function render() {
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    meter.textContent = "stillness meter: " +
      String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0") +
      (settled ? "  ·  settled" : "");
  }

  function settle() {
    if (settled) return;
    timer = setTimeout(function () {
      settled = true;
      render();
    }, settleDelay);
  }

  function disturb() {
    if (settled) {
      settled = false;
      seconds = 0;
      render();
    }
    if (timer) clearTimeout(timer);
    settle();
  }

  ["scroll", "mousemove", "keydown", "touchstart"].forEach(function (ev) {
    window.addEventListener(ev, disturb, { passive: true });
  });

  setInterval(function () {
    if (settled) seconds += 1;
    render();
  }, 1000);

  render();
  settle();
})();
