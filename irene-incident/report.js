// St Brendan's — end-of-term report: stamps and the red-pen trail.

(function () {
  "use strict";

  // Grading stamps: click a mark box to ink the stamp (idempotent).
  var boxes = document.querySelectorAll(".mark-box");
  boxes.forEach(function (box) {
    box.addEventListener("click", function () {
      box.classList.add("stamped");
    });
  });

  // The first box (History, the Irene paper) is stamped by the school itself,
  // a short while after the report is opened.
  var historyBox = document.getElementById("mark-history");
  if (historyBox) {
    setTimeout(function () { historyBox.classList.add("stamped"); }, 1400);
  }

  // Red-pen dashes that follow the pointer and fade like pencil on paper.
  var dashes = [];
  var last = { x: -999, y: -999 };
  var lastMove = 0;

  function makeDash(x, y) {
    var d = document.createElement("span");
    d.className = "ink-dash";
    d.style.left = x + "px";
    d.style.top = y + "px";
    d.style.transform = "rotate(" + (Math.random() * 24 - 12) + "deg)";
    document.body.appendChild(d);
    dashes.push(d);
    setTimeout(function () {
      d.style.opacity = "0";
    }, 650);
    setTimeout(function () {
      var i = dashes.indexOf(d);
      if (i > -1) dashes.splice(i, 1);
      d.remove();
    }, 1500);
  }

  document.addEventListener("mousemove", function (e) {
    var now = Date.now();
    var dx = e.clientX - last.x;
    var dy = e.clientY - last.y;
    if (now - lastMove < 240) return;
    if (dx * dx + dy * dy < 2400) return;
    last.x = e.clientX;
    last.y = e.clientY;
    lastMove = now;
    if (dashes.length > 10) return;
    makeDash(e.clientX, e.clientY);
  });

  // The foot stamp settles from a harder angle once, like a real one.
  var foot = document.getElementById("foot-stamp");
  if (foot) {
    setTimeout(function () {
      foot.animate(
        [
          { transform: "rotate(-16deg) scale(1.5)", opacity: "0" },
          { transform: "rotate(-3deg) scale(0.97)", opacity: "0.85" },
          { transform: "rotate(-3deg) scale(1)", opacity: "0.85" }
        ],
        { duration: 500, easing: "cubic-bezier(0.2, 1.4, 0.4, 1)" }
      );
    }, 800);
  }
})();
