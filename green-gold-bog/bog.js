/* Lot 41 — the Green-Gold Bog: fireflies, ripples, and the paddle. */
(function () {
  "use strict";

  // Fireflies over the bog
  var field = document.getElementById("fireflies");
  if (field) {
    var N = 26;
    for (var i = 0; i < N; i++) {
      var f = document.createElement("span");
      f.className = "firefly";
      f.style.left = (Math.random() * 96 + 2) + "%";
      f.style.top = (Math.random() * 88 + 8) + "%";
      f.style.setProperty("--dx", (Math.random() * 160 - 80).toFixed(0) + "px");
      f.style.setProperty("--dy", (Math.random() * 160 - 110).toFixed(0) + "px");
      f.style.setProperty("--drift", (8 + Math.random() * 12).toFixed(1) + "s");
      f.style.setProperty("--flicker", (1.8 + Math.random() * 3.4).toFixed(1) + "s");
      f.style.animationDelay = (-Math.random() * 12).toFixed(1) + "s, " +
                                (-Math.random() * 4).toFixed(1) + "s";
      var s = 3 + Math.random() * 3;
      f.style.width = s + "px";
      f.style.height = s + "px";
      field.appendChild(f);
    }
  }

  // A ripple where the reader touches the water
  document.addEventListener("click", function (e) {
    var r = document.createElement("span");
    r.className = "click-ripple";
    r.style.left = e.clientX + "px";
    r.style.top = e.clientY + "px";
    document.body.appendChild(r);
    setTimeout(function () { r.remove(); }, 1500);
  });

  // The paddle goes up
  var paddle = document.getElementById("paddle");
  var bid = document.getElementById("bid");
  if (paddle && bid) {
    var amount = 410;
    paddle.addEventListener("click", function (ev) {
      ev.stopPropagation();
      amount += 10;
      bid.textContent = "$" + amount;
      bid.classList.remove("pop");
      // force reflow so the animation replays
      void bid.offsetWidth;
      bid.classList.add("pop");
      if (amount >= 600) {
        paddle.textContent = "The paddle is down at the top of the estimate";
      }
    });
  }
})();
