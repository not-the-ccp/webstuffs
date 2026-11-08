/* The Lagan Valley Weather Almanac — the barometer keeps its own counsel. */
(function () {
  var fill = document.getElementById("baroFill");
  var needle = document.getElementById("baroNeedle");
  var read = document.getElementById("baroRead");
  if (!fill || !needle || !read) return;

  var base = 1018; // millibars, as entered on card 27
  var value = base;

  function render() {
    // 960–1040 mb mapped across the track
    var pct = Math.max(2, Math.min(98, ((value - 960) / 80) * 100));
    fill.style.width = pct + "%";
    needle.style.left = pct + "%";
    read.textContent = Math.round(value) + " mb";
  }

  render();

  // the barometer drifts a little, holds mostly at 1,018, and refuses thunderstorms
  setInterval(function () {
    var drift = (Math.random() - 0.5) * 1.6;
    value = value * 0.9 + (base + drift) * 0.1;
    render();
  }, 4000);
})();
