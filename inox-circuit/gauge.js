/* The Inox Circuit — alloy gauge */
(function () {
  var cr = document.getElementById("cr");
  var crval = document.getElementById("crval");
  var film = document.getElementById("film");
  var made = document.getElementById("made");
  var buttons = document.querySelectorAll("#stamps button");
  if (!cr || !film || !made) return;

  var THRESHOLD = 10.5;

  function report() {
    var v = parseFloat(cr.value);
    if (crval) crval.textContent = v;
    if (v < THRESHOLD) {
      film.textContent = "No passive film — at " + v + "% chromium this is still just steel, and the tank at Stop 1 will blight it.";
    } else if (v < 12) {
      film.textContent = "Passive film present, thin — the working minimum just past " + THRESHOLD + "%.";
    } else if (v <= 18.5) {
      film.textContent = "Passive film present — " + v + "% is the classic figure, the 18/8 the kitchen knows.";
    } else {
      film.textContent = "Passive film heavy — above 18% the grain gets colder and the acid gives up sooner.";
    }
  }

  function stampReport() {
    var on = [];
    buttons.forEach(function (b) {
      if (b.getAttribute("aria-pressed") === "true") on.push(b.dataset.ele);
    });
    if (on.length === 0) {
      made.textContent = "As it stands: the plain, self-healing alloy — iron, chromium, and the film that stands.";
      return;
    }
    var notes = on.map(function (e) {
      for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].dataset.ele === e) return buttons[i].dataset.note;
      }
      return "";
    });
    made.textContent = "Stamped with " + on.join(", ") + ": " + notes.join("; ") + ".";
  }

  cr.addEventListener("input", report);
  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      var pressed = b.getAttribute("aria-pressed") === "true";
      b.setAttribute("aria-pressed", pressed ? "false" : "true");
      stampReport();
    });
  });

  report();
})();
