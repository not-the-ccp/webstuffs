/* The Arena & Rundown — weather desk count. */
(function () {
  "use strict";

  var flash = document.getElementById("storm-flash");
  var btn = document.getElementById("storm-btn");
  var readout = document.getElementById("storm-readout");
  if (!btn || !readout) return;

  var running = false;

  function doFlash() {
    if (!flash) return;
    flash.classList.remove("flash");
    // force reflow so the animation can restart
    void flash.offsetWidth;
    flash.classList.add("flash");
  }

  function runCount() {
    if (running) return;
    running = true;
    var seconds = 6 + Math.floor(Math.random() * 9); // 6..14
    var politician = 3; // the politician, who appears in the country
    var remaining = seconds;
    readout.textContent = "Flash over the lot. Counting: " + remaining + "…";
    doFlash();

    var timer = setInterval(function () {
      remaining -= 1;
      if (remaining > 0) {
        readout.textContent = "Thunder close: " + remaining + "…";
      } else {
        clearInterval(timer);
        var quotient = seconds / politician;
        readout.textContent =
          "Count " + seconds + " ÷ " + politician + " = " + quotient +
          " — " + (quotient === 4 ? "four cues cut, card runs clean." : "cues cut from tonight's card.");
        running = false;
      }
    }, 700);
  }

  btn.addEventListener("click", runCount);
})();
