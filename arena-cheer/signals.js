// Squadwork — signal the run. Two of three and the desk (hypothetically) confirms.
(function () {
  var box = document.getElementById("signals");
  if (!box) return;
  var verdict = document.getElementById("verdict");
  var reset = document.getElementById("reset-signals");

  function tally() {
    var whites = box.querySelectorAll(".signal.white.pressed").length;
    var reds = box.querySelectorAll(".signal.red.pressed").length;
    var posted = whites + reds;
    if (posted < 3) {
      verdict.textContent = posted + " of 3 signals posted.";
      verdict.className = "verdict";
    } else if (whites >= 2) {
      verdict.textContent = "CONFIRMED. Two of three white. The desk, hypothetically, releases the bar.";
      verdict.className = "verdict ok";
    } else {
      verdict.textContent = "MISS. One signal. The desk records a miss, as it did in 1984.";
      verdict.className = "verdict miss";
    }
  }

  box.querySelectorAll(".signal").forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.classList.toggle("pressed");
      tally();
    });
  });

  reset.addEventListener("click", function () {
    box.querySelectorAll(".pressed").forEach(function (b) { b.classList.remove("pressed"); });
    verdict.textContent = "No signals posted.";
    verdict.className = "verdict";
  });
})();
