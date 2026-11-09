// The Fabian Sunday — scale the kettles, never the standing order.
(function () {
  "use strict";

  var slider = document.getElementById("guests");
  var out = document.getElementById("guests-out");
  var kettlesOut = document.getElementById("kettles-out");
  var body = document.getElementById("scale-body");
  var foot = document.getElementById("scale-foot");
  if (!slider || !body) return;

  // base quantities "for four"
  var base = {
    kettles: { n: 4, unit: "", whole: true },
    flour: { n: 1.5, unit: " cups" },
    sugar: { n: 0.75, unit: " cup" },
    eggs: { n: 4, unit: "", whole: true },
    butter: { n: 60, unit: " g", whole: true }
  };

  function fmt(v, item) {
    var s = (item.whole ? Math.round(v) : (Math.round(v * 100) / 100).toString()) + item.unit;
    if (s.trim() === "") s = "";
    return s;
  }

  function update() {
    var g = parseInt(slider.value, 10) || 4;
    var k = g / 4;
    out.textContent = g;
    kettlesOut.textContent = "kettles: " + (Math.ceil(k) + " on the stove, 1 spare");
    var rows = body.rows;
    for (var i = 0; i < rows.length; i++) {
      var key = ["kettles", "flour", "sugar", "eggs", "butter"][i];
      var cell = rows[i].cells[2];
      cell.textContent = fmt(base[key].n * k, base[key]);
    }
    if (g <= 0) {
      foot.textContent = "No souls at the table? The standing order does not scale. It is kept, whole, at the foot of the channel.";
    } else {
      foot.textContent = "The standing order does not scale. It is kept, whole, at the foot of the channel.";
    }
  }

  slider.addEventListener("input", update);
  update();
})();
