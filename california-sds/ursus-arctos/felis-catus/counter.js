// Platform Shop, Counter 3 — basket and till logic for sheet FC-012.
// The page is fully readable without this file.
(function () {
  "use strict";
  var add = document.getElementById("add");
  var qty = document.getElementById("qty");
  var confirm = document.getElementById("confirm");
  var count = 0;

  if (add && confirm) {
    add.addEventListener("click", function () {
      if (qty && qty.value === "2") {
        confirm.textContent = "The shop will not ship 2. One item only; the policy is in the ledger and the ledger is not for sale.";
        confirm.hidden = false;
        return;
      }
      count += 1;
      confirm.textContent = "Added to basket (" + count + "). The till is watching. Purr registered: " + count + ".";
      confirm.hidden = false;
      add.blur();
    });
  }
})();
