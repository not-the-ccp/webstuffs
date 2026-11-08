/* South Congress storeroom desk — item GL-12 */
(function () {
  "use strict";

  var word = document.querySelector(".banner-word");
  if (!word) return;

  // The lamp over shelf 9 is bad: make the painted word flicker a little.
  word.classList.add("flicker");

  // On tap (touch has no hover), light the word once, then let it settle.
  word.addEventListener("click", function () {
    word.classList.add("lit");
    window.setTimeout(function () {
      word.classList.remove("lit");
    }, 900);
  });
})();
