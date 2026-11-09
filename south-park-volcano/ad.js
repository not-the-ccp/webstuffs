// The South Park Ledger — a press stamp, struck at 5:48 p.m.
document.addEventListener("DOMContentLoaded", function () {
  var stamp = document.getElementById("stamp");
  if (stamp) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        stamp.classList.add("show");
      });
    });
  }
});
