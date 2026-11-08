/* The Expansive — radio hour touches */
(function () {
  var counter = document.getElementById("counter");
  if (counter) {
    var n = 0;
    var id = setInterval(function () {
      n += 1 + Math.floor(Math.random() * 3);
      counter.textContent = String(n).padStart(4, "0");
      if (n >= 9999) { n = 137; }
    }, 180);
    // stop the counter when the tab is hidden
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { clearInterval(id); }
      else {
        id = setInterval(function () {
          n += 1 + Math.floor(Math.random() * 3);
          counter.textContent = String(n).padStart(4, "0");
          if (n >= 9999) { n = 137; }
        }, 180);
      }
    });
  }
  var onair = document.getElementById("onair");
  if (onair) {
    onair.style.cursor = "pointer";
    onair.title = "Tap to put the lamp out";
    onair.addEventListener("click", function () {
      onair.classList.toggle("off");
      onair.textContent = onair.classList.contains("off") ? "STANDBY" : "ON AIR";
    });
  }
})();
