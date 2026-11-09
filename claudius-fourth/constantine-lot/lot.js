/* Lot 272 — gauge of the thirty-one years, and the catalogue stamp. */

(function () {
  "use strict";

  var readout = document.getElementById("gauge-readout");
  var slider = document.getElementById("year-slider");
  if (readout && slider) {
    var marks = {
      306: "AD 306 — the accession. Constantine proclaimed emperor by his troops at Eboracum; the first hand opens the ledger of the Fifth Bell.",
      312: "AD 312 — the bridge over the Tiber at the place called Milvian, in October. The household adopts the sign of the labarum.",
      313: "AD 313 — the Edict of Milan. The practice of the Christians is decriminalised; the persecutions cease; the catacombs come up into the weather.",
      324: "AD 324 — the last of the four quarters ruled out. The Tetrarchy's third loaf is struck; the line is one hand, from York to the Bosphorus.",
      325: "AD 325 — the council at Nicaea. The first hand is joined by the second in the ledger; the pantry keeps its accounts through the sessions.",
      330: "AD 330 — the New Rome consecrated. The city of Byzantium takes the emperor's name; Constantinople becomes the capital of the Empire, and it stays one for over a millennium.",
      337: "AD 337 — the baths, on 22 May. The emperor dies in the palace baths at Constantinople; the last entry is ruled, dry, in the brown ink. The ledger closes."
    };
    function render() {
      var y = parseInt(slider.value, 10);
      var text = marks[y];
      if (!text) {
        text = "AD " + y + " — the ledger runs; the pantry keeps its butter for the tea, and the bell stands unstruck.";
      }
      readout.textContent = text;
    }
    slider.addEventListener("input", render);
    render();
  }

  var seal = document.getElementById("seal");
  if (seal) {
    seal.addEventListener("click", function () {
      seal.classList.remove("stamped");
      void seal.offsetWidth; /* restart the thud */
      seal.classList.add("stamped");
    });
  }

  var clock = document.getElementById("session-clock");
  if (clock) {
    var notes = [
      "the session awaits the gavel",
      "the tin is at the front of the room, unopened",
      "the bell will be rung once, at the fall of the hammer",
      "no paddle shall strike twice at one lot",
      "the weather is not edited in public"
    ];
    var i = 0;
    setInterval(function () {
      i = (i + 1) % notes.length;
      clock.textContent = notes[i];
    }, 5000);
  }
})();
