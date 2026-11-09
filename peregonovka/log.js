/* The odometer: 0–600 km westward (June–September), 600–630 km eastward (the turn). */
(function () {
  var slider = document.getElementById("odoSlider");
  var km = document.getElementById("odoKilometres");
  var month = document.getElementById("odoMonth");
  var dir = document.getElementById("odoDirection");
  var thumb = document.getElementById("odoThumb");
  if (!slider) return;

  var MAX = 630;

  function monthFor(k) {
    if (k < 80) return "June, first week · the road begins west";
    if (k < 160) return "June, running west through the steppe";
    if (k < 260) return "July · the longest month of the retreat";
    if (k < 360) return "July, closing out · the water line gets thin";
    if (k < 470) return "August · the columns thin and the maps lie";
    if (k < 600) return "September · the road runs out west";
    if (k < 615) return "September · the fold — the army turns east";
    return "September · the walk home, toward Huliaipole";
  }

  function dirFor(k) {
    return k < 600
      ? "bound west, 1 cm = 10 km on the plank"
      : "bound east, in the red ochre, past the fold";
  }

  function update() {
    var k = Number(slider.value);
    km.textContent = k + " km";
    month.textContent = monthFor(k);
    dir.textContent = dirFor(k);
    thumb.style.left = (k / MAX) * 100 + "%";
  }

  slider.addEventListener("input", update);
  update();
})();
