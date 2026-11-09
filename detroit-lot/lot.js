/* Lot 143 — Day Two, Room C. The room says so, and the hammer follows. */
(function () {
  var btn = document.getElementById("hammerBtn");
  var word = document.getElementById("hammerWord");
  if (!btn || !word) return;

  var EST = "est. 140–180 USD";
  var SOLD = "SOLD — 155 USD, second bell";
  var lid = null;
  var sold = false;

  function makeLid() {
    lid = document.createElement("div");
    lid.className = "lid";
    lid.textContent = "THE LID DECLINES TO TRAVEL BY AIR";
    document.body.appendChild(lid);
  }

  function strike() {
    sold = !sold;
    word.classList.remove("sold");
    // restart the stamp animation
    void word.offsetWidth;
    if (sold) {
      word.textContent = SOLD;
      word.classList.add("sold");
      if (!lid) makeLid();
      lid.classList.remove("show");
      void lid.offsetWidth;
      lid.classList.add("show");
      setTimeout(function () { lid.classList.remove("show"); }, 4200);
    } else {
      word.textContent = EST;
    }
  }

  btn.addEventListener("click", strike);
  btn.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      strike();
    }
  });
})();
