/* The Farm — Lot 193 interactive touches */
(function () {
  "use strict";

  // Harvest wagon counter
  var buyBtn = document.getElementById("buy-btn");
  var buyCount = document.getElementById("buy-count");
  var stockLine = document.getElementById("stock-line");
  var wagon = 0;
  var stock = 3;

  if (buyBtn && buyCount) {
    buyBtn.addEventListener("click", function () {
      if (wagon >= stock) {
        stockLine.textContent = "The barn store is sold out; the farm will not argue about the hour.";
        return;
      }
      wagon += 1;
      buyCount.textContent = String(wagon);
      buyBtn.classList.remove("jolt");
      // force reflow so the animation can replay
      void buyBtn.offsetWidth;
      buyBtn.classList.add("jolt");
      stockLine.textContent =
        wagon < stock
          ? stock - wagon + " copies remain in the barn store"
          : "Last copy taken; the box is on the wagon, heading for the long table.";
    });
  }

  // Stamp the telegram with the farm postmark (click the telegram card)
  var telegram = document.getElementById("telegram");
  if (telegram) {
    var mark = document.createElement("span");
    mark.className = "postmark";
    mark.setAttribute("aria-hidden", "true");
    mark.textContent = "SCHRUTE FARMS\nSCRANTON, PA\nM 13 2013";
    telegram.appendChild(mark);
    telegram.addEventListener("click", function () {
      telegram.classList.toggle("posted");
    });
    telegram.style.cursor = "pointer";
    telegram.title = "Click to stamp the farm postmark";
  }

  // Ticker pauses while the visitor reads it
  var track = document.querySelector(".ticker-track");
  if (track) {
    track.addEventListener("mouseenter", function () { track.style.animationPlayState = "paused"; });
    track.addEventListener("mouseleave", function () { track.style.animationPlayState = "running"; });
  }
})();
