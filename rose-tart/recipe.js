/* Card No. 84 — proportion the tarte, one ingredient at a time */
(function () {
  var base = [
    { name: "Pastries flour, stone-milled", g: 220, unit: "g" },
    { name: "Butter, cold, from Normandy", g: 140, unit: "g" },
    { name: "Caster sugar", g: 90, unit: "g" },
    { name: "Eggs, from the lane farm", g: 3, unit: "eggs", whole: true },
    { name: "Damask rose petals", g: 40, unit: "g" },
    { name: "Rose water", g: 30, unit: "ml" },
    { name: "Wildflower honey", g: 2, unit: "tablespoons" }
  ];
  var BASE_SERVINGS = 6;

  var slider = document.getElementById("servings");
  var count = document.getElementById("serving-count");
  var tbody = document.querySelector("#calc-table tbody");
  if (!slider || !count || !tbody) return;

  function nice(n) {
    var r = Math.round(n * 2) / 2;
    if (Number.isInteger(r)) return String(r);
    return r.toFixed(1).replace(/\.0$/, "");
  }

  function render() {
    var s = Number(slider.value);
    count.textContent = s;
    var rows = "";
    for (var i = 0; i < base.length; i++) {
      var item = base[i];
      var amount = (item.g / BASE_SERVINGS) * s;
      rows += "<tr><td>" + item.name + "</td><td>" + nice(amount) + " " + item.unit + "</td></tr>";
    }
    rows += "<tr><td>Baking</td><td>190&nbsp;&deg;C, 40&ndash;45 minutes</td></tr>";
    tbody.innerHTML = rows;
  }

  slider.addEventListener("input", render);
  render();
})();
