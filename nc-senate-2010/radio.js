/* nc-senate-2010 · radio.js · subtle wire-room animation, text stays readable without it */
document.addEventListener("DOMContentLoaded", function () {
  var onair = document.getElementById("onair");
  var script = document.getElementById("script");
  var cue;

  if (onair) {
    (function blink() {
      onair.style.opacity = onair.style.opacity === "0.35" ? "1" : "0.35";
      setTimeout(blink, 450);
    })();
  }

  if (script) {
    cue = script.querySelector(".cue");
    if (cue) {
      cue.addEventListener("click", function () {
        this.style.borderLeftColor = this.style.borderLeftColor === "#5a1414" ? "#8a5a2e" : "#5a1414";
      });
    }
  }
});
