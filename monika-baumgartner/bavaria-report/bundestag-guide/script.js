/* The Bundestag — 630 seats, filled one at a time, then emptied again.
   Purely decorative; the text stands without it. */
(function () {
  var holder = document.querySelector(".seats");
  if (!holder) return;
  var total = 630;
  for (var i = 0; i < total; i++) {
    var seat = document.createElement("span");
    holder.appendChild(seat);
  }
  var seats = holder.querySelectorAll("span");
  var caption = document.querySelector(".seat-caption");
  var filling = false;

  function fill(done) {
    seats.forEach(function (s, i) {
      setTimeout(function () { s.classList.add("filled"); }, i * 14);
    });
    if (caption) caption.textContent = done ? "Sitting resumed — 630 of 630" : "Filling the semicircle\u2026";
  }

  holder.addEventListener("click", function () {
    if (filling) return;
    filling = true;
    fill(false);
    setTimeout(function () {
      seats.forEach(function (s, i) {
        setTimeout(function () { s.classList.remove("filled"); }, (total - i) * 10);
      });
      if (caption) caption.textContent = "13:05 — the hour when it is empty";
      filling = false;
    }, total * 14 + 900);
  });
})();
