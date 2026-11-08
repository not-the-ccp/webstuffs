// Counter 4 trade room — quantity and subtotal
(function () {
  var UNIT = 470000;
  var qtyEl = document.getElementById("qty");
  var subEl = document.getElementById("subtotal");
  var minus = document.getElementById("minus");
  var plus = document.getElementById("plus");
  var add = document.getElementById("add");
  var added = document.getElementById("added");
  var qty = 1;

  function fmt(n) {
    return "\u20A9" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function render() {
    qtyEl.textContent = String(qty);
    subEl.textContent = fmt(qty * UNIT);
  }

  if (minus) minus.addEventListener("click", function () { qty = Math.max(1, qty - 1); render(); });
  if (plus) plus.addEventListener("click", function () { qty = Math.min(9, qty + 1); render(); });
  if (add) add.addEventListener("click", function () {
    added.hidden = false;
    add.textContent = "In the crate — " + qty + " \u00D7 JJY-9209";
    add.disabled = true;
    add.style.opacity = "0.6";
  });

  render();
})();
