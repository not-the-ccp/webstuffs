/* The Hardwood Emporium — order slip */
(function () {
  var qty = 1;
  var remaining = 17;
  var total = 28.5;

  var qtyVal = document.getElementById("qty");
  var stock = document.getElementById("stock");
  var added = document.getElementById("added");
  var addBtn = document.getElementById("addBtn");

  function render() {
    qtyVal.textContent = qty;
    stock.textContent = remaining + " of 500 copies remaining on this shelf";
  }

  document.querySelectorAll(".qty-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var step = parseInt(btn.dataset.step, 10);
      var next = qty + step;
      if (next < 1) return;
      if (qty + (step > 0 ? 1 : 0) > remaining) return;
      qty = next;
      render();
    });
  });

  addBtn.addEventListener("click", function () {
    if (remaining < qty) return;
    remaining -= qty;
    added.textContent = "On the slip: " + qty + (qty === 1 ? " copy" : " copies") +
      " — $" + (total * qty).toFixed(2) + ".";
    qty = 1;
    render();
    addBtn.blur();
  });

  render();
})();
