/* The Rink — Lost & Found Desk. A small touch: the UNCLAIMED stamp
   settles as the paper is read, and the stamp-line answers when touched. */

(function () {
  "use strict";

  var stamp = document.querySelector(".stamp-unclaimed");
  if (stamp) {
    // settle from a hard knock to a quiet rest
    stamp.style.transform = "rotate(-9deg) scale(1.18)";
    stamp.style.opacity = "0.35";
    window.addEventListener("load", function () {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          stamp.style.transition = "transform 0.5s ease, opacity 0.5s ease";
          stamp.style.transform = "";
          stamp.style.opacity = "";
        });
      });
    });
    // re-stamp, word for word, on click
    stamp.addEventListener("click", function () {
      stamp.animate(
        [
          { transform: "rotate(-4deg) scale(1)" },
          { transform: "rotate(-6deg) scale(1.12)" },
          { transform: "rotate(-4deg) scale(1)" }
        ],
        { duration: 260, easing: "ease-out" }
      );
    });
  }
})();
