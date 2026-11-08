/* The Roman Post — small machinery for the notice counter */
(function () {
  "use strict";

  var odo = document.getElementById("odo");
  if (!odo) return;

  var total = 57;
  var n = 0;
  var out = "0 notices this year &middot; 400 won each &middot; one correct spelling accepted";

  var timer = setInterval(function () {
    n += 1;
    odo.innerHTML = n + " notices this year &middot; 400 won each &middot; one correct spelling accepted";
    if (n >= total) clearInterval(timer);
  }, 60);

  /* The stamp, if the reader clicks it, turns once, like a door */
  var stamp = document.getElementById("stamp");
  if (stamp) {
    stamp.style.pointerEvents = "auto";
    stamp.style.cursor = "pointer";
    stamp.addEventListener("click", function () {
      stamp.style.transition = "transform 400ms ease";
      stamp.style.transform = "rotate(46deg) scale(1)";
      window.setTimeout(function () {
        stamp.style.transform = "rotate(-14deg) scale(1)";
      }, 460);
    });
  }
})();
