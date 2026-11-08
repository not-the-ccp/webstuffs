// Tap the seal: the pronunciation of the system turns, as the room turns.
(function () {
  var readings = [
    "mr: mə-KWEEN RYSHE-ow-ər",
    "the maps agree",
    "the catalogues differ, by two per page, in no place that matters",
    "spelling owed to the bearer, not the system",
    "the map is rolled; the reading proceeds"
  ];
  var i = 0;
  var el = document.getElementById("pron");
  var seal = document.getElementById("seal");
  if (!el || !seal) return;
  seal.addEventListener("click", function () {
    i = (i + 1) % readings.length;
    el.textContent = readings[i];
  });
})();
