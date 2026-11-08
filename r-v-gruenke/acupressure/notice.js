// Notice No. 45 — a touch of life for the lost-and-found flyer.
(function () {
  "use strict";
  var flyer = document.getElementById("flyer");
  if (!flyer) return;

  // The stamp comes down when the page is ready.
  window.addEventListener("load", function () {
    flyer.classList.add("stamped");
  });

  // Pressing the qi dot "holds the point" for 22 seconds, like the session.
  var dot = flyer.querySelector(".qi-dot");
  var label = flyer.querySelector(".qi-label");
  if (dot && label) {
    var original = label.textContent;
    dot.style.cursor = "pointer";
    dot.addEventListener("click", function () {
      if (dot.dataset.holding) return;
      dot.dataset.holding = "1";
      var left = 22;
      label.textContent = "point pressed — hold " + left + " s";
      var t = window.setInterval(function () {
        left -= 1;
        if (left <= 0) {
          window.clearInterval(t);
          delete dot.dataset.holding;
          label.textContent = "point released — the session was not here";
          window.setTimeout(function () {
            label.textContent = original;
          }, 3200);
        } else {
          label.textContent = "point pressed — hold " + left + " s";
        }
      }, 1000);
    });
  }
})();
