/* Editorial Page — the received stamp is inked on load,
   and a light press lets the reader ink it again by hand. */
(function () {
  var stamp = document.getElementById("received");
  var letter = document.getElementById("letter");
  if (!stamp || !letter) return;

  function ink() {
    stamp.classList.remove("is-inked");
    // force reflow so the animation can replay
    void stamp.offsetWidth;
    stamp.classList.add("is-inked");
  }

  window.addEventListener("load", function () {
    setTimeout(ink, 450);
  });

  letter.addEventListener("click", function (e) {
    if (e.target.closest("a")) return; // never steal a link
    ink();
  });
})();
