/* Comparative Lexicon Manual · Chapter Twelve · Arabic — wash toggle */
(function () {
  "use strict";
  var btn = document.getElementById("wash-button");
  if (!btn) return;

  btn.addEventListener("click", function () {
    var body = document.body;
    body.classList.toggle("washed");
    if (body.classList.contains("washed")) {
      btn.textContent = "Let the page dry";
      // strip entries one by one, like the reagent running down the quay
      var items = document.querySelectorAll("#trade-ledger li");
      items.forEach(function (li, i) {
        li.style.transitionDelay = (i * 0.18) + "s";
      });
    } else {
      btn.textContent = "Pour the wash";
      var items = document.querySelectorAll("#trade-ledger li");
      items.forEach(function (li) { li.style.transitionDelay = "0s"; });
    }
  });
})();
