// Caesium field response calculator — SDS No. 55, Cabinet 9
(function () {
  var form = document.getElementById("calc-form");
  var out = document.getElementById("calc-out");
  if (!form || !out) return;

  function band(t) {
    if (t < -116) {
      return {
        state: "solid",
        text: "solid, far below the water line — and note that caesium would react with water even at −116 °C, so this is the calm of the high mountains, not of the Sana."
      };
    }
    if (t < 28.5) {
      return {
        state: "solid",
        text: "solid, " + (28.5 - t).toFixed(1) + " °C below the melting point — the metal is still holding, the terrace is still safe, and August is not over. Pyrophoric on cutting or abrading; tongs in pairs, no water at any temperature."
      };
    }
    if (t < 671) {
      return {
        state: "liquid",
        text: "liquid — one of only five elemental metals that is liquid at or near room temperature, and this is it, on the terrace. Pyrophoric; it has ignited in air of its own accord, and the flame is the sky-blue that named it. Dry sand within reach; clear the wall, table 1 to table 27 and the half-table; the stew waits for the sand."
      };
    }
    return {
      state: "gas",
      text: "gas, above the 671 °C boiling point — a temperature not reached in the valley, where the stewpan does its work and stops. The sheet has no opinion; the water from the Sana, at 8 marks, is still not the answer."
    };
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var t = parseFloat(document.getElementById("temp").value);
    if (isNaN(t)) {
      out.innerHTML = "<p><strong>Enter a temperature</strong> — the sheet takes degrees Celsius, from −150 to 1,000, and it is not in the mood for symbols.</p>";
      return;
    }
    var b = band(t);
    out.innerHTML = "<p><strong>" + t + " °C:</strong> " +
      "<em>" + b.state + "</em> — " + b.text + "</p>";
  });
})();
