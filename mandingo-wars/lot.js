/* Sale No. 123, Lot 131 — the catalogue stamp and the session clock */
(function () {
  "use strict";

  var seal = document.getElementById("seal");
  if (seal) {
    seal.addEventListener("click", function () {
      seal.classList.remove("stamped");
      // force reflow so the stamp can be struck again
      void seal.offsetWidth;
      seal.classList.add("stamped");
    });
  }

  var clock = document.getElementById("session-clock");
  if (clock) {
    var marks = [
      "the session awaits the gavel",
      "the paddle waits on the wind",
      "the Bise blows; the paddle waits",
      "true to the north and to no one else"
    ];
    var i = 0;
    setInterval(function () {
      i = (i + 1) % marks.length;
      clock.textContent = marks[i];
    }, 6000);
  }
})();
