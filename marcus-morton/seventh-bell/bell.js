/* The Seventh Bell — bell row, seal, and toll counter */
(function () {
  "use strict";

  var bells = Array.prototype.slice.call(document.querySelectorAll("#bells .bell"));
  var seal = document.getElementById("seal");
  var counter = document.getElementById("toll-count");
  var KEY = "seventh-bell-tolls";
  var count = 0;
  try { count = parseInt(localStorage.getItem(KEY) || "0", 10) || 0; } catch (e) { count = 0; }

  if (counter) counter.textContent = String(count);

  function toll() {
    count += 1;
    try { localStorage.setItem(KEY, String(count)); } catch (e) {}
    if (counter) counter.textContent = String(count);
    bells.forEach(function (bell, i) {
      setTimeout(function () {
        bell.classList.remove("toll");
        void bell.offsetWidth; /* restart the swing */
        bell.classList.add("toll");
      }, i * 140);
    });
    if (seal) {
      seal.classList.remove("rung");
      void seal.offsetWidth;
      seal.classList.add("rung");
    }
  }

  if (seal) seal.addEventListener("click", toll);
  var bellsRow = document.getElementById("bells");
  if (bellsRow) bellsRow.addEventListener("click", toll);

  /* the seven stars of the seal */
  var starGroup = document.getElementById("sealstars");
  if (starGroup) {
    var svgNS = "http://www.w3.org/2000/svg";
    for (var i = 0; i < 7; i++) {
      var angle = (i / 7) * Math.PI * 2 - Math.PI / 2;
      var x = 50 + Math.cos(angle) * 34;
      var y = 50 + Math.sin(angle) * 34;
      var star = document.createElementNS(svgNS, "text");
      star.setAttribute("x", x.toFixed(1));
      star.setAttribute("y", (y + 4).toFixed(1));
      star.setAttribute("text-anchor", "middle");
      star.setAttribute("font-size", "11");
      star.textContent = "\u2606";
      starGroup.appendChild(star);
    }
  }
})();
