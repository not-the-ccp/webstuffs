/* Term Report No. 47 — small interactive touches.
   - A one-off warp streak sweeps across the starfield on arrival.
   - Clicking the badge gives the starfield a short burst of speed.
   Text is fully readable with scripts disabled. */
(function () {
  "use strict";

  var field = document.querySelector(".starfield");
  if (!field) return;

  // One-off warp streak over the whole page.
  var streak = document.createElement("div");
  streak.setAttribute("aria-hidden", "true");
  streak.style.cssText = [
    "position:fixed",
    "inset:0",
    "z-index:0",
    "pointer-events:none",
    "background:repeating-linear-gradient(100deg, transparent 0 46px, rgba(207,224,255,0.10) 46px 48px, transparent 48px 110px)",
    "animation:none",
    "opacity:0"
  ].join(";");
  document.body.appendChild(streak);

  requestAnimationFrame(function () {
    streak.style.transition = "transform 1.4s ease-out, opacity 1.4s ease-out";
    streak.style.opacity = "1";
    streak.style.transform = "translateX(0)";
    requestAnimationFrame(function () {
      streak.style.transform = "translateX(60%)";
      streak.style.opacity = "0";
    });
    setTimeout(function () { streak.remove(); }, 1700);
  });

  // Burst on badge click: briefly accelerate the drift.
  var badge = document.querySelector(".badge");
  if (badge) {
    badge.style.cursor = "pointer";
    badge.title = "warp";
    badge.addEventListener("click", function () {
      field.style.transition = "transform 0.9s ease-out";
      field.style.transform = "scale(1.25)";
      setTimeout(function () {
        field.style.transition = "transform 2.4s ease-out";
        field.style.transform = "scale(1)";
      }, 900);
    });
  }

  // Punch the grade stamp into the corner, the way Room 214 does.
  var sheet = document.querySelector(".sheet");
  if (sheet) {
    var stamp = document.createElement("div");
    stamp.textContent = "A / B+";
    stamp.setAttribute("aria-hidden", "true");
    stamp.style.cssText = [
      "position:absolute",
      "left:1rem",
      "bottom:1.2rem",
      "z-index:2",
      "font-family:'Courier New',Courier,monospace",
      "font-weight:bold",
      "font-size:0.95rem",
      "letter-spacing:0.2em",
      "color:#b3312e",
      "border:3px double #b3312e",
      "padding:0.25rem 0.6rem",
      "transform:rotate(-8deg)",
      "opacity:0",
      "transition:opacity 0.8s ease 0.6s"
    ].join(";");
    sheet.appendChild(stamp);
    requestAnimationFrame(function () { stamp.style.opacity = "0.8"; });
  }
})();
