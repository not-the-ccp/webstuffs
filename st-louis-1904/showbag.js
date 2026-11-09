/* Turnverein & Sons Supply — the show bag */
(function () {
  "use strict";

  var stock = 7;
  var bag = 0;
  var stockEl = document.getElementById("stock-count");
  var noteEl = document.getElementById("added-note");
  var addBtn = document.getElementById("add");

  if (!stockEl || !noteEl || !addBtn) return;

  function render() {
    stockEl.textContent = stock;
    if (bag === 0) {
      noteEl.textContent = "— nothing in the bag yet";
    } else {
      noteEl.textContent = "in the bag: " + bag + " ledger" + (bag > 1 ? "s" : "") + ", counted twice";
    }
  }

  function puff(x, y) {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var star = document.createElement("span");
    star.className = "puff";
    star.textContent = "★";
    star.style.left = (x - 8) + "px";
    star.style.top = (y - 8) + "px";
    document.body.appendChild(star);
    star.addEventListener("animationend", function () {
      if (star.parentNode) star.parentNode.removeChild(star);
    });
  }

  addBtn.addEventListener("click", function (e) {
    if (stock <= 0) {
      noteEl.textContent = "the counter is bare — the binder's stock is gone, as foretold";
      return;
    }
    stock -= 1;
    bag += 1;
    render();
    puff(e.clientX, e.clientY);
    if (stock === 0) {
      addBtn.textContent = "Counter bare";
    }
  });

  render();
})();
