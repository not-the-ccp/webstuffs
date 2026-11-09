/* Letter No. 9 — a few red-thread touches.
   The letter reads fine without this file; it only sprinkles
   baseball stitching across the page and keeps a quiet tally. */

(function () {
  "use strict";

  var reduce = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function dropSeam(x) {
    var s = document.createElement("span");
    s.className = "seam";
    if (typeof x === "number") {
      s.style.left = (x + (Math.random() * 40 - 20)) + "px";
    } else {
      s.style.left = (Math.random() * 100) + "vw";
    }
    document.body.appendChild(s);
    s.addEventListener("animationend", function () { s.remove(); });
  }

  // a gentle drizzle of stitches at load
  if (!reduce) {
    for (var i = 0; i < 10; i++) {
      setTimeout(function () { dropSeam(); }, 400 + i * 450);
    }
  }

  // clicking anywhere drops a small burst of stitches at the cursor
  document.addEventListener("click", function (e) {
    if (reduce) return;
    for (var j = 0; j < 5; j++) {
      setTimeout(function () { dropSeam(e.clientX); }, j * 90);
    }
  });

  // quiet tally in the console, the way the front office keeps counts
  try {
    console.log(
      "Letter No. 9 — filed. Pennants: 8. World Series: 2 (1980, 2008). " +
      "Apologies on file: 1, paid in full."
    );
  } catch (err) { /* the desk does not argue with the console */ }
})();
