// The dial, read aloud: a small counter that runs the brass dial from zero to 195.
(function () {
  var value = document.getElementById("tryValue");
  var link = document.getElementById("countAgain");
  if (!value || !link) return;

  var target = parseInt(value.getAttribute("data-target"), 10) || 0;
  var timer = null;

  function run() {
    if (timer) return;
    var n = 0;
    value.textContent = "0";
    timer = setInterval(function () {
      n += 1;
      value.textContent = String(n);
      if (n >= target) {
        clearInterval(timer);
        timer = null;
      }
    }, 34);
  }

  link.addEventListener("click", function (e) {
    e.preventDefault();
    run();
  });
})();
