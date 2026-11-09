(function () {
  var btn = document.getElementById("weather-roller");
  var out = document.getElementById("weather-result");
  if (!btn || !out) return;

  var faces = ["Fair ground, dry sieves.", "Fair ground, dry sieves.", "Fair ground, dry sieves.", "Damp soil; lift slowly.", "Damp soil; lift slowly.", "Rain — halt play, cover the trench."];

  btn.addEventListener("click", function () {
    var n = Math.floor(Math.random() * 6) + 1;
    btn.setAttribute("aria-label", "Roll " + n);
    out.textContent = "d6 → " + n + ": " + faces[n - 1];
    out.classList.remove("rolled");
    void out.offsetWidth;
    out.classList.add("rolled");
  });
})();
