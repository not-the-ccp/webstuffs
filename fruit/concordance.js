/* Entry No. 216 — Fruit · the desk pomegranate. Text remains readable without this. */
(function () {
  var btn = document.getElementById("pome");
  var seedGroup = document.getElementById("pome-seeds");
  var caption = document.getElementById("count-caption");
  if (!btn || !seedGroup || !caption) return;

  var TOTAL = 137;
  var svgNS = "http://www.w3.org/2000/svg";

  // Lay the seeds in rows inside the fruit body, the way the thin wall sets them.
  var rows = [
    { y: 44, n: 5, x0: 44, step: 11 },
    { y: 56, n: 7, x0: 36, step: 10 },
    { y: 68, n: 9, x0: 29, step: 9.5 },
    { y: 80, n: 9, x0: 29, step: 9.5 },
    { y: 92, n: 7, x0: 36, step: 10 },
    { y: 102, n: 5, x0: 44, step: 11 }
  ];
  var totalPlaced = 0;
  rows.forEach(function (row) {
    for (var i = 0; i < row.n; i++) {
      totalPlaced += 1;
      var c = document.createElementNS(svgNS, "circle");
      c.setAttribute("cx", (row.x0 + i * row.step).toFixed(1));
      c.setAttribute("cy", String(row.y));
      c.setAttribute("r", "2.6");
      c.setAttribute("data-seed", String(totalPlaced));
      seedGroup.appendChild(c);
    }
  });
  // Fill the remaining seeds as a fine border ring, so the count is exactly 137.
  for (var s = totalPlaced + 1; s <= TOTAL; s++) {
    var angle = (s / (TOTAL - totalPlaced + 1)) * Math.PI * 2;
    var ring = document.createElementNS(svgNS, "circle");
    ring.setAttribute("cx", (60 + Math.cos(angle) * 26).toFixed(1));
    ring.setAttribute("cy", (74 + Math.sin(angle) * 22).toFixed(1));
    ring.setAttribute("r", "1.8");
    ring.setAttribute("data-seed", String(s));
    seedGroup.appendChild(ring);
  }

  var seeds = Array.prototype.slice.call(seedGroup.querySelectorAll("circle"));
  var pressed = false;

  btn.addEventListener("click", function () {
    if (pressed) return;
    pressed = true;
    btn.classList.add("pressed");
    var n = 0;
    var tick = setInterval(function () {
      n += 1;
      seeds[n - 1].style.transitionDelay = "0ms";
      seeds[n - 1].classList.add("lit");
      if (n === TOTAL) {
        clearInterval(tick);
        btn.querySelector(".press-line").textContent = "137, the whole count — the drawer is shut";
        caption.textContent = "137, the whole count. One of the seeds is always left for the morning not yet chosen; it stays dark in the drawer, and that is the whole of the symbol. The desk does not do twice.";
        caption.classList.add("done");
      }
    }, 40);
  });
})();
