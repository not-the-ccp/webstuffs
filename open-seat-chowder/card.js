// Card No. 814 — a small touch for the kitchen table.
// Without this the card simply sits there, which is also correct.
document.addEventListener("DOMContentLoaded", function () {
  var ledger = document.querySelectorAll(".ledger-line");
  for (var i = 0; i < ledger.length; i++) {
    ledger[i].addEventListener("click", function () {
      this.style.transform = "rotate(" + (Math.random() * 1.2 - 0.6) + "deg)";
    });
  }

  var slip = document.querySelector(".slip");
  if (slip) {
    slip.addEventListener("mouseenter", function () {
      slip.style.transform = "rotate(0deg)";
    });
    slip.addEventListener("mouseleave", function () {
      slip.style.transform = "rotate(-0.4deg)";
    });
  }
});
