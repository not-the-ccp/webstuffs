/* The Vermilion Seal — press the seal, and the seal presses back. */
(function () {
  var btn = document.getElementById("pressBtn");
  var masthead = document.querySelector(".masthead");
  var char = document.getElementById("sealChar");
  if (!btn || !masthead || !char) return;

  btn.addEventListener("click", function () {
    masthead.classList.remove("sealed");
    /* force reflow so the animation may play again */
    void masthead.offsetWidth;
    masthead.classList.add("sealed");
  });
})();
