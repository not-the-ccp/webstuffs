(function () {
  "use strict";

  var offices = {
    mayor: {
      address: "Mr. Mayor",
      steps: "advance two steps to the second chair",
      stand: "stand on the door; sit when seated",
      close: "the city answers in its own time"
    },
    county: {
      address: "Mr. Executive",
      steps: "advance three steps to the county seat of the table",
      stand: "stand at the threshold only when he chooses",
      close: "the budget is read after the soup"
    },
    governor: {
      address: "Mr. Governor",
      steps: "advance four steps; the first chair is his before the others are seated",
      stand: "stand until he is seated",
      close: "do not ask where the weather report lies"
    },
    federal: {
      address: "the title alone",
      steps: "advance no steps; he is at the distant city and the distance does the courtesy",
      stand: "stand as the dispatch is read",
      close: "answer by dispatch, never by name"
    },
    unnamed: {
      address: "the office, whatever the nameplate",
      steps: "advance two steps and look at the door, not the nameplate",
      stand: "stand as permitted; no more",
      close: "the coat changes, the manners do not"
    }
  };

  var seats = {
    dispatch: "As dispatch officer you answer the crew question before the second course: three &mdash; Prentiss, Okafor, Delgado &mdash; and no count but three is spoken at the table.",
    crew: "As crew of the leg you are counted, not counted on: three on the manifest you sign, and the leg is flown only when the count holds.",
    host: "As host you set the four coats in their chairs, keep the fragment in the margin where it was pasted, and re-check the fix before the course changes.",
    visitor: "As visitor you are introduced to the office and not to the nameplate, you file what you hear verbatim, and you do not correct a broken dispatch at the table."
  };

  var form = document.getElementById("ledger-form");
  var out = document.getElementById("ledger-out");
  if (!form || !out) return;

  form.addEventListener("click", function (e) {
    if (e.target.tagName !== "BUTTON") return;
    var o = offices[form.office.value];
    var s = seats[form.seat.value];
    out.innerHTML =
      "<strong>The entry reads:</strong> address " + o.address + "; " +
      o.steps + "; standing rule, " + o.stand + ". " +
      s + " <em>" + o.close + ".&#8221;</em>";
  });
})();
