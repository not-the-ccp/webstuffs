/* The smoke hour, Nikaia School, 3 November 1952.
   Fifteen puffs, one per minute in the game; here, one per click.
   The ferry is never counted. */
(function () {
  var TOTAL = 15;
  var button = document.getElementById("puff-button");
  var countEl = document.getElementById("puff-count");
  var box = document.getElementById("smoke-hour");
  if (!button || !countEl || !box) return;

  var burned = 0;

  function render() {
    countEl.textContent = "puffs burned: " + burned + " of " + TOTAL;
  }

  function puff() {
    if (burned >= TOTAL) return;
    burned += 1;

    var dot = document.createElement("span");
    dot.className = "puff";
    dot.style.left = (12 + Math.random() * 76) + "%";
    dot.style.animationDuration = (2.1 + Math.random() * 1.6) + "s";
    box.appendChild(dot);
    setTimeout(function () { dot.remove(); }, 4000);

    render();
    if (burned === TOTAL) {
      button.disabled = true;
      button.textContent = "the smoke hour is over";
      countEl.textContent = "puffs burned: 15 of 15 — what happens at the smoke hour happens once";
    }
  }

  button.addEventListener("click", puff);
  render();
})();
