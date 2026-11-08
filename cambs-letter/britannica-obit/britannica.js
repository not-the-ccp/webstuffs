/* The obituary's small touches: the IN MEMORIAM line settles into
   the paper slowly, and the wreath leaves take their place in turn.
   Everything reads fine with this script absent. */
(function () {
  "use strict";

  var heading = document.getElementById("in-memoriam");
  if (heading) {
    heading.style.opacity = "0";
    heading.style.transition = "opacity 2.4s ease 0.3s";
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { heading.style.opacity = "1"; });
    });
  }

  var leaves = document.querySelectorAll(".wreath ellipse");
  Array.prototype.forEach.call(leaves, function (leaf, i) {
    leaf.style.opacity = "0";
    leaf.style.transition = "opacity 0.8s ease " + (0.5 + i * 0.12) + "s";
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { leaf.style.opacity = "1"; });
    });
  });
})();
