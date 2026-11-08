// The "Przeglądano" stamp thumps onto the page a moment after load;
// clicking it re-inks the stamp. All of it is decorative — the minutes
// read fine with scripts disabled.
(function () {
  var stamp = document.getElementById("stamp");
  if (!stamp) return;

  function thump() {
    stamp.classList.remove("shown");
    // force reflow so the animation can replay
    void stamp.offsetWidth;
    stamp.classList.add("shown");
  }

  window.addEventListener("load", function () {
    setTimeout(thump, 900);
  });

  stamp.addEventListener("click", thump);
})();
