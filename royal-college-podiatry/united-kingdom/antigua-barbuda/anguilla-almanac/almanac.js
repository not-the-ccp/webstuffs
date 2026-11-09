/* Station 12 vane: click a month row to turn the needle to its standing wind. */
(function () {
  var dirToBearing = {
    N: 0, NNE: 22.5, NE: 45, ENE: 67.5, E: 90, ESE: 112.5, SE: 135,
    SSE: 157.5, S: 180, SSW: 202.5, SW: 225, WSW: 247.5, W: 270,
    WNW: 292.5, NW: 315, NNW: 337.5
  };

  var needle = document.getElementById("vane-needle");
  var read = document.getElementById("vane-read");
  var table = document.getElementById("normals");
  if (!needle || !table) return;

  table.addEventListener("click", function (e) {
    var row = e.target.closest("tbody tr");
    if (!row) return;

    var rows = table.querySelectorAll("tbody tr");
    for (var i = 0; i < rows.length; i++) rows[i].classList.remove("active");
    row.classList.add("active");

    var dir = row.getAttribute("data-wind") || "NE";
    var kn = row.getAttribute("data-kn") || "13";
    var bearing = dirToBearing[dir] !== undefined ? dirToBearing[dir] : 45;
    // needle tip is drawn at north; rotate so the tip points from where the wind blows
    needle.style.transform = "rotate(" + (180 - bearing) + "deg)";
    if (read) read.textContent = "Standing wind: " + dir + ", " + kn + " kn";
  });
})();
