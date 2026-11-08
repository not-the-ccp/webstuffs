/* The Ambulance — small touches at the table */
(function () {
  "use strict";

  /* Peppermint dispenser: twenty-four, the number of the stewards. */
  var btn = document.getElementById("mintbtn");
  var countEl = document.getElementById("mintcount");
  if (btn && countEl) {
    var n = 0, total = 24;
    btn.addEventListener("click", function () {
      n = n >= total ? 0 : n + 1;
      countEl.textContent = n + " / " + total;
      if (n === total) {
        btn.classList.add("full");
        countEl.textContent = total + " / " + total;
      } else {
        btn.classList.remove("full");
      }
    });
  }

  /* The mangled card: tap it and the type settles itself. */
  var card = document.getElementById("passline");
  if (card) {
    var last = 0;
    card.style.cursor = "pointer";
    card.setAttribute("title", "Settled, weekly, at the six-pound table");
    card.addEventListener("click", function () {
      var now = Date.now();
      if (now - last < 700) return;
      last = now;
      card.classList.remove("jolt");
      /* force reflow so the animation can restart */
      void card.offsetWidth;
      card.classList.add("jolt");
    });
    card.addEventListener("animationend", function () {
      card.classList.remove("jolt");
    });
  }
})();
