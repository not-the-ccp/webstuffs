// Field Manual FM-229 · Chapter Seventeen · interactive touches
// The baton turns with the pointer; the spotlight follows. Text stays readable without it.
(function () {
  var baton = document.getElementById("baton");
  var spot = document.getElementById("spot");
  var cx = window.innerWidth / 2;
  var cy = window.innerHeight * 0.4;
  var angle = -12;

  document.addEventListener("mousemove", function (event) {
    var dx = (event.clientX - cx) * 0.12;
    var dy = (event.clientY - window.innerHeight * 0.4) * 0.12;
    angle = -12 + dx * 0.5;
    if (angle < -40) angle = -40;
    if (angle > 16) angle = 16;
    baton.style.transform = "translate(-50%, -50%) rotate(" + angle + "deg)";
    spot.style.transform =
      "translate(" + (event.clientX - cx) + "px, " + (event.clientY - cy) + "px)";
  });

  document.addEventListener("touchmove", function (event) {
    var t = event.touches[0];
    var dx = (t.clientX - cx) * 0.12;
    var dy = (t.clientY - window.innerHeight * 0.4) * 0.12;
    angle = -12 + dx * 0.5;
    if (angle < -40) angle = -40;
    if (angle > 16) angle = 16;
    baton.style.transform = "translate(-50%, -50%) rotate(" + angle + "deg)";
    spot.style.transform =
      "translate(" + (t.clientX - cx) + "px, " + (t.clientY - cy) + "px)";
  }, { passive: true });

  window.addEventListener("resize", function () {
    cx = window.innerWidth / 2;
    cy = window.innerHeight * 0.4;
  });
})();
