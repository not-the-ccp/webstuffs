// The Turn Table — Thread No. 218: the clifftop weather roll (d6).
(function () {
  var calls = [
    "Marsh on the moor — halt play, cover the trench.",
    "Thin rain before the noon tide — bag the finds, dry the sieves.",
    "Overcast, path still open — peg the grid at fifty-metre centres.",
    "Fair ground, dry sieves. The path is open.",
    "Sea mist off the path — record the quadrant, keep the log dry.",
    "Full cloud from the top of the headland — the hessian goes on."
  ];
  var roller = document.getElementById("weather-roller");
  var out = document.getElementById("weather-result");
  if (!roller || !out) return;
  roller.addEventListener("click", function () {
    var n = 1 + Math.floor(Math.random() * 6);
    out.textContent = "d6: " + n + " — " + calls[n - 1];
  });
})();
