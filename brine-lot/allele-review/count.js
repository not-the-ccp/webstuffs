// The running count, kept at the chart office, second floor.
// The code is counted, not guessed.

(function () {
  var button = document.getElementById("gavel");
  var bases = document.getElementById("bases");
  var result = document.getElementById("result");
  var stream = document.getElementById("stream");
  if (!button || !bases || !stream) return;

  var TARGET = 1342;
  var LETTERS = ["A", "T", "C", "G"];
  var running = false;

  button.addEventListener("click", function () {
    if (running) return;
    running = true;
    result.hidden = true;
    var n = 0;
    var step = function () {
      n += 17 + Math.floor(Math.random() * 30);
      if (n >= TARGET) n = TARGET;
      bases.textContent = n.toLocaleString("en-US");
      var span = document.createElement("span");
      span.textContent = LETTERS[Math.floor(Math.random() * 4)] + " ";
      stream.insertBefore(span, stream.firstChild);
      while (stream.childNodes.length > 8) {
        stream.removeChild(stream.lastChild);
      }
      if (n < TARGET) {
        window.setTimeout(step, 60);
      } else {
        running = false;
        result.hidden = false;
      }
    };
    step();
  });
})();
