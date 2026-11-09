/* PROVIDENCE (The 1764 Sessions) — LP 1764 · turntable, sides and runout line */
(function () {
  "use strict";

  var vinyl = document.getElementById("vinyl");
  var runout = document.getElementById("runout");
  var labelSide = document.getElementById("label-side");
  var sides = Array.prototype.slice.call(document.querySelectorAll(".side"));
  var spinning = true;
  var activeSide = "A";

  function sideEl(name) {
    for (var i = 0; i < sides.length; i++) {
      if (sides[i].getAttribute("data-side") === name) return sides[i];
    }
    return null;
  }

  function baseRunout(name) {
    var el = sideEl(name);
    if (!el) return "";
    return el.getAttribute("data-runout").replace(/&middot;/g, "\u00B7");
  }

  function setRunout(text) {
    if (!runout) return;
    runout.style.opacity = "0";
    window.setTimeout(function () {
      runout.textContent = text;
      runout.style.opacity = "1";
    }, 180);
  }

  function update() {
    if (labelSide) labelSide.textContent = "SIDE " + activeSide;
    if (spinning) {
      setRunout(baseRunout(activeSide));
    } else {
      setRunout("NEEDLE UP \u00B7 " + activeSide + " \u00B7 AWELE 1764 \u00B7 G \u00B7 THE LEDGER IS A LEDGER");
    }
  }

  if (vinyl) {
    vinyl.addEventListener("click", function () {
      spinning = !spinning;
      vinyl.classList.toggle("spinning", spinning);
      vinyl.setAttribute("aria-pressed", String(spinning));
      update();
    });
  }

  sides.forEach(function (side) {
    var tab = side.querySelector(".side-tab");
    var name = side.getAttribute("data-side");
    if (tab) {
      tab.addEventListener("click", function () {
        activeSide = name;
        sides.forEach(function (s) {
          var on = s === side;
          s.classList.toggle("active", on);
          var t = s.querySelector(".side-tab");
          if (t) t.setAttribute("aria-pressed", String(on));
        });
        update();
      });
    }
    var rows = side.querySelectorAll(".tracks li");
    rows.forEach(function (row) {
      row.addEventListener("mouseenter", function () {
        var track = row.getAttribute("data-track");
        if (track && spinning) {
          setRunout(activeSide + " \u00B7 \u201C" + track + "\u201D \u00B7 AWELE 1764 \u00B7 G");
        }
      });
      row.addEventListener("mouseleave", function () {
        if (spinning) setRunout(baseRunout(activeSide));
      });
    });
  });

  update();
})();
