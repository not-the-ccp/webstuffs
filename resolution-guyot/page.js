/* Chapter XIV — the depth rail: as you read down, the plate descends */
(function () {
  var rail = document.querySelector(".depth-rail");
  var plate = document.getElementById("plate");
  if (!rail || !plate) return;
  var depths = ["0 m", "410 m", "820 m", "1,320 m", "1,820 m"];
  var i = 0;
  function tick() {
    var top = 12 + (i / (depths.length - 1)) * 74; // percent down the rail
    plate.style.top = top + "%";
    plate.textContent = depths[i];
    i = (i + 1) % depths.length;
  }
  tick();
  setInterval(tick, 1600);
})();
