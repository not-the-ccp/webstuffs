// The Bay Sessions — a slow turntable: the disc eases to a stop on hover,
// and each track's running time ticks its seconds like a clock.
(function () {
  var disc = document.querySelector(".disc");
  if (disc) {
    disc.addEventListener("pointerenter", function () {
      disc.style.animationPlayState = "paused";
    });
    disc.addEventListener("pointerleave", function () {
      disc.style.animationPlayState = "running";
    });
  }

  var seconds = 0;
  var clock = document.createElement("p");
  clock.style.cssText =
    "text-align:center;font-family:'Courier New',Courier,monospace;" +
    "font-size:.75rem;letter-spacing:.2em;color:rgba(28,23,18,.6);margin:.75rem 0 0;";
  clock.textContent = "00:00 · the needle is down";
  var header = document.querySelector(".liner-header");
  if (header && header.lastElementChild) {
    header.insertBefore(clock, header.lastElementChild);
  } else if (header) {
    header.appendChild(clock);
  }

  var shown = document.createElement("span");
  setInterval(function () {
    seconds = (seconds + 1) % (9 * 60 + 9); // The Bay: 9:09, then back to the start
    var m = String(Math.floor(seconds / 60)).padStart(2, "0");
    var s = String(seconds % 60).padStart(2, "0");
    clock.firstChild ? (clock.childNodes[0].nodeValue = m + ":" + s + " · ") : null;
  }, 1000);
})();
