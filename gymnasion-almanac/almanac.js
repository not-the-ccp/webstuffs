/* Court Street Weather Almanac — the hill barometer's slow needle */
(function () {
  var gauge = document.getElementById("gauge");
  if (!gauge || !window.matchMedia || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  gauge.setAttribute("title", "Hill barometer: steady, the season holds.");
  var label = gauge.querySelector(".gauge-label");
  if (label) label.textContent = "HILL BAROMETER, IN. OF MERCURY \u00B7 STEADY";
})();
