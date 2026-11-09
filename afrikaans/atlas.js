// The desk lamp at the Veld & Harbour Desk — forty watts, as always.
(function () {
  var lamp = document.getElementById("lamp");
  var bulb = lamp ? lamp.querySelector(".bulb") : null;
  var note = document.getElementById("lamp-note");
  if (!lamp || !bulb) return;

  var lit = false;
  var on = ["40 watts, as always.", "The moth would approve.", "Same wattage as No. 14 Kruiskade."];
  var off = ["Dark, for now.", "The harbour book stays shut."];

  function setLit() {
    lit = !lit;
    bulb.classList.toggle("lit", lit);
    lamp.setAttribute("aria-pressed", lit ? "true" : "false");
    if (note) {
      var bank = lit ? on : off;
      note.textContent = bank[Math.floor(Math.random() * bank.length)];
    }
  }

  lamp.addEventListener("click", setLit);
  lamp.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setLit();
    }
  });
})();
