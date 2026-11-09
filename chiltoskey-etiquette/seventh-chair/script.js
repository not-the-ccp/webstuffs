// Lot 412 — the hammer falls a moment after the lot is read.
(function () {
  "use strict";
  var card = document.getElementById("lotcard");
  if (!card) return;
  var fall = function () {
    card.classList.add("hammered");
    card.removeEventListener("load", fall);
  };
  if (document.readyState === "complete") {
    window.setTimeout(fall, 200);
  } else {
    window.addEventListener("load", function () {
      window.setTimeout(fall, 200);
    });
  }
})();
