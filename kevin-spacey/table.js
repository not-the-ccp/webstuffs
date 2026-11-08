/* Seat the seven (and the eighth). The page reads fine without this. */
(function () {
  var seats = Array.prototype.slice.call(document.querySelectorAll(".seat"));
  var seated = 0;

  seats.forEach(function (seat) {
    seat.addEventListener("click", function () {
      var isEighth = seat.classList.contains("eighth");

      if (isEighth) {
        // the eighth seat seats itself, and undoes the whole table
        if (!seat.classList.contains("seated")) {
          seats.forEach(function (s) { s.classList.add("seated"); });
        } else {
          seats.forEach(function (s) { s.classList.remove("seated"); });
        }
        return;
      }

      if (seat.classList.contains("seated")) {
        seat.classList.remove("seated");
        seated = Math.max(0, seated - 1);
      } else {
        seat.classList.add("seated");
        seated += 1;
      }

      // all seven seated: the eighth rises on its own
      if (seated >= 7) {
        var eighth = document.querySelector(".seat.eighth");
        if (eighth) eighth.classList.add("seated");
      } else {
        var e = document.querySelector(".seat.eighth");
        if (e && !e.classList.contains("seated")) e.classList.remove("seated");
      }
    });
  });
})();
