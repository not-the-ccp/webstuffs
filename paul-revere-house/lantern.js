// Nineteen North Square — the steeple signal.
// One lantern if by land, two if by sea. The room keeps the distinction.
(function () {
  "use strict";

  var one = document.getElementById("lantern-one");
  var two = document.getElementById("lantern-two");
  var btnOne = document.getElementById("btn-one");
  var btnTwo = document.getElementById("btn-two");
  var readout = document.getElementById("signal-read");

  if (!one || !two || !btnOne || !btnTwo || !readout) return;

  function setLantern(el, lit) {
    if (lit) {
      el.classList.add("lit");
    } else {
      el.classList.remove("lit");
    }
  }

  function signal(mode) {
    if (mode === "land") {
      setLantern(one, true);
      setLantern(two, false);
      readout.textContent =
        "One lantern, up the steeple — the party comes by land. The 6:40 seating holds its order.";
    } else if (mode === "sea") {
      setLantern(one, true);
      setLantern(two, true);
      readout.textContent =
        "Two lanterns in the old window — the party comes by sea. The pass opens and the oysters are shucked.";
    } else {
      setLantern(one, false);
      setLantern(two, false);
      readout.textContent = "No signal tonight — the room is dark.";
    }
  }

  btnOne.addEventListener("click", function () { signal("land"); });
  btnTwo.addEventListener("click", function () { signal("sea"); });

  // At the hour of the ride, if nobody has signalled, the steeple signals itself.
  var raised = false;
  setInterval(function () {
    var now = new Date();
    if (!raised && now.getHours() === 18 && now.getMinutes() >= 40 &&
        !one.classList.contains("lit") && !two.classList.contains("lit")) {
      raised = true;
      signal("sea");
    } else if (now.getHours() !== 18) {
      raised = false;
    }
  }, 10000);
})();
