/* The Plate & Post — small press effects. The page reads fine without this. */
(function () {
  var run = document.getElementById("run");
  if (!run) return;
  var target = 22;
  var count = 0;
  var timer = setInterval(function () {
    count += 1;
    run.textContent = "Print run: " + count + (count === target ? " copies, one for each of the plates on the rack." : " of " + target);
    if (count >= target) clearInterval(timer);
  }, 70);

  var stamp = document.querySelector(".stamp");
  if (stamp) {
    stamp.addEventListener("click", function () {
      stamp.style.transform = "rotate(" + (Math.random() * 8 - 4).toFixed(1) + "deg)";
    });
  }
})();
