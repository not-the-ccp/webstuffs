/* The wing at the foot of the page slowly rotates through the sun,
   so its interference colours slide from blue to green to gold —
   the moth's own courtship angle, at a slower pace. */
(function () {
  var wing = document.getElementById("wing");
  if (!wing) return;
  var angle = 0;
  function turn() {
    angle = (angle + 0.12) % 360;
    wing.style.transform = "rotate(" + angle + "deg)";
    requestAnimationFrame(turn);
  }
  requestAnimationFrame(turn);
})();
