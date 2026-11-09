/* Notice No. 46 — the stamps come down, and the lamp keeps count */
(function () {
  var body = document.body;
  var lamp = document.getElementById("lamp");
  var days = document.getElementById("days");
  var remaining = 16;

  // the stamps are applied a moment after the paper is on the desk
  window.addEventListener("load", function () {
    body.classList.add("stamped");
  });

  if (lamp && days) {
    lamp.addEventListener("click", function () {
      lamp.classList.toggle("lit");
      if (remaining > 0) {
        remaining -= 1;
      }
      if (remaining === 0) {
        days.textContent = "the count is run out; the dish stands ready to be claimed";
      } else {
        days.textContent = remaining + " days of the count remain";
      }
    });
  }
})();
