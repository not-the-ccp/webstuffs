// Macauley Island — resupply provisioning calculator
(function () {
  var body = document.getElementById("prov-body");
  var note = document.getElementById("prov-note");
  if (!body || !note) return;

  var WATER = 12;    // litres per person per day
  var FOOD = 2.5;    // kg of stores per person per day
  var FRUIT = 6;     // pieces of fresh fruit per person per day
  var BATTERY = 1;   // packs of AA batteries per leg

  var party = document.getElementById("party");
  var days = document.getElementById("days");
  var legs = document.getElementById("legs");

  function recalc() {
    var p = parseInt(party.value, 10);
    var d = parseInt(days.value, 10);
    var l = parseInt(legs.value, 10);

    var water = (WATER * p * d).toFixed(0) + " L";
    var food = (FOOD * p * d).toFixed(1) + " kg";
    var fruit = FRUIT * p * d + " pieces";
    var battery = BATTERY * l + " pack(s)";
    var boatDays = 2 * l + (l === 1 ? 1 : 0);
    var totalDays = d + boatDays;

    body.innerHTML =
      "<tr><td>Fresh water (12 L per person per day)</td><td>" + WATER + " L × " + p + " × " + d + "</td><td>" + water + "</td></tr>" +
      "<tr><td>Stores (2.5 kg per person per day)</td><td>" + FOOD + " kg × " + p + " × " + d + "</td><td>" + food + "</td></tr>" +
      "<tr><td>Fresh fruit, for the bunkhouse galley</td><td>" + FRUIT + " × " + p + " × " + d + "</td><td>" + fruit + "</td></tr>" +
      "<tr><td>Battery packs for the radio hut</td><td>" + BATTERY + " × " + l + " leg(s)</td><td>" + battery + "</td></tr>" +
      "<tr><td>Days counted for the run (island days + sea days + spare day aboard)</td><td>" + d + " + " + boatDays + " + 1</td><td>" + totalDays + " days</td></tr>";

    note.textContent =
      "Total for a party of " + p + " over " + d + " island day" + (d > 1 ? "s" : "") +
      ": " + water + " of water and " + food + " of stores, plus a spare day aboard. " +
      "The skipper's spare day is always carried aboard, never on the island.";
  }

  party.addEventListener("change", recalc);
  days.addEventListener("change", recalc);
  legs.addEventListener("change", recalc);
  recalc();
})();
