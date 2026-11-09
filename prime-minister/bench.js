// The Platform Bench — gavel & verbatim stamp. Text remains fully readable without this.
(function () {
  var stamp = document.getElementById("stamp");
  var ruling = document.getElementById("ruling");
  if (!stamp || !ruling) return;

  var gavels = 0;
  stamp.addEventListener("click", function () {
    gavels += 1;
    stamp.classList.remove("gavelling");
    // force reflow so the animation can replay
    void stamp.offsetWidth;
    stamp.classList.add("gavelling");
    if (gavels >= 3) {
      ruling.classList.add("stamped");
      stamp.textContent = "Gavel x" + gavels + " — entered verbatim, register of the bench";
    } else {
      stamp.textContent = "Gavel x" + gavels + " — excerpt, entered verbatim, register of the bench";
    }
  });
})();
