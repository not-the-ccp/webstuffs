// Small touch: the tea-house card line reveals its ink slowly,
// and the postmark wobbles a little if you press it.
document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelector(".entry em");
  if (cards) {
    cards.classList.add("inked");
  }
  var stamp = document.querySelector(".stamp");
  if (stamp) {
    stamp.addEventListener("click", function () {
      stamp.style.transition = "transform 0.35s ease";
      var tilt = 8 + (Math.random() * 14 - 7);
      stamp.style.transform = "rotate(" + tilt.toFixed(1) + "deg) scale(0.97)";
      setTimeout(function () {
        stamp.style.transform = "rotate(" + (8 + (Math.random() * 6 - 3)).toFixed(1) + "deg) scale(1)";
      }, 350);
    });
  }
});
