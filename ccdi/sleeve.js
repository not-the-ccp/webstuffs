/* sleeve.js — Red Seal Records · CCDI-001 · tape counter and wax-stamp marks */
(function () {
  "use strict";

  var totalSeconds = 44 * 60 + 18;
  var start = Date.now();
  var counter = document.getElementById("tape-counter");

  function tick() {
    var elapsed = Math.floor((Date.now() - start) / 1000);
    var t = Math.min(elapsed, totalSeconds);
    var m = Math.floor(t / 60);
    var s = t % 60;
    counter.textContent = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    if (t < totalSeconds) {
      requestAnimationFrame(tick);
    }
  }
  tick();

  var seal = document.querySelector(".seal");
  if (seal) {
    seal.addEventListener("click", function () {
      seal.classList.toggle("broken");
    });
  }

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".sleeve") || e.target.closest("a, button")) {
      return;
    }
    var mark = document.createElement("div");
    mark.className = "stamp-mark";
    mark.style.left = e.clientX + "px";
    mark.style.top = e.clientY + "px";
    document.body.appendChild(mark);
    setTimeout(function () {
      mark.remove();
    }, 900);
  });
})();
