// The Eitel Building — manual.js
// A small crane dial for the manual: eight floors light in order,
// the eighth (new construction) always last, with a brass flicker.
(function () {
  "use strict";

  var tower = document.createElement("div");
  tower.className = "crane-tower";
  tower.setAttribute("aria-hidden", "true");
  tower.style.cssText =
    "display:flex;flex-direction:column-reverse;gap:4px;align-items:center;" +
    "margin:1.5rem auto 0.5rem;width:12rem;";
  tower.title = "Crane dial: the eighth floor was added in the renovation.";

  var lamp = document.createElement("button");
  lamp.type = "button";
  lamp.textContent = "\u25B2 Run the crane — light the floors";
  lamp.style.cssText =
    "font-family:'Courier New',monospace;font-size:0.8rem;letter-spacing:0.06em;" +
    "background:#123a42;color:#f4ecd8;border:2px solid #c9a24b;padding:0.4rem 0.9rem;" +
    "cursor:pointer;display:block;margin:0 auto 1rem;";

  var floors = [];
  for (var i = 1; i <= 8; i++) {
    var f = document.createElement("div");
    f.className = "floor" + (i === 8 ? " floor-new" : "");
    f.textContent = i + (i === 8 ? " (new)" : "");
    f.style.cssText =
      "width:100%;height:1.5rem;line-height:1.5rem;text-align:center;font-size:0.7rem;" +
      "font-family:Georgia,serif;color:#231c10;border:1px solid #123a42;" +
      "background:#e8dcbc;transition:background 0.35s, color 0.35s;";
    if (i === 8) { f.style.borderStyle = "dashed"; }
    floors.push(f);
    tower.appendChild(f);
  }

  var lit = 0;
  lamp.addEventListener("click", function () {
    if (lit > 0) return;
    (function step() {
      if (lit < 8) {
        lit += 1;
        floors[lit - 1].style.background = "#e6c877";
        floors[lit - 1].style.color = "#231c10";
        if (lit === 8) {
          floors[7].style.boxShadow = "0 0 10px 2px rgba(201,162,75,0.8)";
        }
        window.setTimeout(step, 380);
      }
    })();
  });

  var manual = document.querySelector(".manual");
  manual.insertBefore(tower, manual.querySelector(".colophon"));
  manual.insertBefore(lamp, tower);
})();
