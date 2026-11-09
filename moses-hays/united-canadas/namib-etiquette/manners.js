/* The Dry Coast, Chapter VII — the book keeps the running count in Marks, and does not round. */
(function () {
  var courses = Array.prototype.slice.call(document.querySelectorAll(".course[data-price]"));
  var value = document.getElementById("totalValue");
  var note = document.getElementById("totalNote");
  if (!courses.length || !value) return;

  function total() {
    var sum = 0, n = 0;
    courses.forEach(function (c) {
      if (c.classList.contains("chosen")) {
        sum += parseFloat(c.dataset.price);
        n++;
      }
    });
    return { sum: sum, n: n };
  }

  function render() {
    var t = total();
    value.textContent = t.sum.toFixed(2);
    note.textContent = t.n === courses.length
      ? "All four courses, the full feast, as dined. The book does not round."
      : t.n + " of " + courses.length + " courses marked. The book does not round.";
  }

  courses.forEach(function (c) {
    c.classList.add("chosen");
    c.setAttribute("tabindex", "0");
    c.setAttribute("role", "button");
    c.setAttribute("aria-pressed", "true");
    function toggle() {
      c.classList.toggle("chosen");
      c.setAttribute("aria-pressed", c.classList.contains("chosen") ? "true" : "false");
      render();
    }
    c.addEventListener("click", toggle);
    c.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
  });

  render();
})();
