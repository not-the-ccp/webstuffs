// Card No. 214 — scaling bench for Huron River Maple Bread.
(function () {
  var MAX = 62; // town meeting: 123,851 / 2,000-ish plates, rounded up at the counter

  var loavesOut = document.getElementById("loaves");
  var note = document.getElementById("benchNote");
  var items = Array.prototype.slice.call(document.querySelectorAll("#ingredients li"));
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".bench-controls .step"));
  var current = 1;

  function fmt(n) {
    var q = Math.round(n * 4) / 4;
    if (q === 0) return "0";
    var whole = Math.floor(q);
    var frac = q - whole;
    var out = whole > 0 ? String(whole) : "";
    if (frac === 0.25) out += "\u00bc";
    else if (frac === 0.5) out += "\u00bd";
    else if (frac === 0.75) out += "\u00be";
    else if (frac > 0) out += (whole > 0 ? " " : "") + String(frac);
    return out === "" ? "0" : out;
  }

  function noteFor(n) {
    if (n === 1) return "One loaf, company one: the family at the table.";
    if (n <= 6) return n + " loaves, company two: the county seat, loaf by loaf, by the street.";
    return n + " loaves, company three: town meeting, one oven at a time.";
  }

  function render() {
    loavesOut.textContent = current;
    note.textContent = noteFor(current);
    items.forEach(function (li) {
      var base = parseFloat(li.getAttribute("data-base"));
      var amt = li.querySelector(".amt");
      if (amt) amt.textContent = fmt(base * current);
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var step = parseInt(btn.getAttribute("data-step"), 10);
      var next = current + step;
      if (next < 1) next = 1;
      if (next > MAX) next = MAX;
      if (next !== current) {
        current = next;
        render();
      }
    });
  });

  render();
})();
