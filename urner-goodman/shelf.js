// The Pocket Dictionary of Dreams, Entry G-13 — press to stamp the entry
(function () {
  var page = document.querySelector(".page");
  var btn = document.getElementById("stampBtn");
  var stamp = document.getElementById("stamp");
  var count = 0;

  function thump() {
    count += 1;
    page.classList.remove("stamped");
    // force reflow so the animation can replay
    void stamp.offsetWidth;
    page.classList.add("stamped");
    stamp.textContent = count === 1
      ? "DREAMED · FILED · G-13"
      : "DREAMED · FILED · G-13 (×" + count + ")";
  }

  if (btn) {
    btn.addEventListener("click", thump);
  }
  if (stamp) {
    stamp.style.cursor = "pointer";
    stamp.addEventListener("click", thump);
  }
})();
