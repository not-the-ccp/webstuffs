/* Console 7: types out the printed error line on load, like the terminal did at 04:40.
   The full sentence is already in the markup; this only re-performs it. */
(function () {
  var block = document.querySelector(".err-line p");
  if (!block) return;
  var full = block.textContent;
  block.textContent = "";
  var i = 0;
  var timer = setInterval(function () {
    block.textContent = full.slice(0, ++i);
    if (i >= full.length) {
      clearInterval(timer);
      block.textContent = full;
    }
  }, 28);
})();
