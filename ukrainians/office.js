/* Office effects for Specification No. 1207-987 */
(function () {
  "use strict";

  // Duplicate the ticker content so the roll loops seamlessly.
  var track = document.getElementById("ticker-track");
  if (track) {
    track.innerHTML += track.innerHTML;
  }

  // The reading counter advances one step per second, as the hall reads.
  var counter = document.getElementById("counter");
  if (counter) {
    var n = parseInt(counter.textContent, 10) || 0;
    var digits = counter.textContent.length;
    setInterval(function () {
      n += 1;
      counter.textContent = String(n).padStart(digits, "0");
    }, 1600);
  }

  // Decode the specification title the way the chronicle enters a year:
  // garbled, then legible.
  var title = document.getElementById("spec-title");
  if (title) {
    var finalText = title.textContent;
    var glyphs = "АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩ1207№–";
    var frame = 0;
    var total = 26;
    var timer = setInterval(function () {
      frame += 1;
      var reveal = Math.floor((frame / total) * finalText.length);
      var out = "";
      for (var i = 0; i < finalText.length; i += 1) {
        if (i < reveal || finalText[i] === " " || finalText[i] === "\u00a0") {
          out += finalText[i];
        } else {
          out += glyphs.charAt(Math.floor(Math.random() * glyphs.length));
        }
      }
      title.textContent = out;
      if (frame >= total) {
        clearInterval(timer);
        title.textContent = finalText;
      }
    }, 55);
  }

  // The stamp may be pressed again by a visitor, if they wait.
  var stamp = document.getElementById("stamp");
  if (stamp) {
    stamp.addEventListener("click", function () {
      stamp.style.animation = "none";
      // force reflow so the animation restarts
      void stamp.offsetWidth;
      stamp.style.animation = "";
    });
  }
})();
