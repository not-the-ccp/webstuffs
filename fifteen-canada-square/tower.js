/* The windows keep their own hours. */
(function () {
  var tower = document.getElementById("tower");
  if (!tower) return;
  var windows = tower.querySelectorAll(".win");

  function set(w, lit) {
    w.classList.toggle("lit", lit);
  }

  // A first scattering of light, as if arriving in the small dark hour.
  windows.forEach(function (w) {
    set(w, Math.random() < 0.4);
  });

  // Tap the tower to wake a window; a lit one may go out.
  tower.addEventListener("click", function () {
    var pick = Math.floor(Math.random() * windows.length);
    set(windows[pick], !windows[pick].classList.contains("lit"));
  });

  // The building keeps its own hours on its own.
  setInterval(function () {
    var pick = Math.floor(Math.random() * windows.length);
    set(windows[pick], Math.random() < 0.5);
  }, 2200);
})();
