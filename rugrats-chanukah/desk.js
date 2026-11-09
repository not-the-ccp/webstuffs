/* The desk by the ticket desk — Entry No. 215 */
(function () {
  "use strict";

  /* --- the chanukkiah: light the nights, shamash first, then in order --- */
  var nights = [
    "Night 1 of 7 — one flame. The babies are in the cast. Nobody has asked.",
    "Night 2 of 7 — two flames. Grandpa Boris has claimed the robe.",
    "Night 3 of 7 — three flames. Shlomo has arrived, and he brought his own robe.",
    "Night 4 of 7 — four flames. The play has a script. The script is one minute.",
    "Night 5 of 7 — five flames. The latkes are made, and the oil is on.",
    "Night 6 of 7 — six flames. The audience of one has taken the front seat.",
    "Night 7 of 7 — seven flames. Both men speak the line. The dream is cleared by the eighth.",
    "All eight nights counted. The dreamer is the lead. Pleased, and slightly afraid, in that order."
  ];

  var candles = Array.prototype.slice.call(document.querySelectorAll("#candles .candle"));
  var line = document.getElementById("night-line");
  var litCount = 0;

  function updateLine() {
    if (!line) return;
    if (litCount === 0) {
      line.textContent = "Night 0 of 7 — the desk is dark; click any candle to light it in order, shamash first.";
      return;
    }
    line.textContent = nights[Math.min(litCount, nights.length - 1)];
  }

  candles.forEach(function (c) {
    c.addEventListener("click", function () {
      var n = parseInt(c.getAttribute("data-n"), 10);
      var shamash = candles.filter(function (x) { return x.getAttribute("data-n") === "9"; })[0];
      var shamashLit = shamash.classList.contains("lit");

      if (c.classList.contains("lit")) return;
      if (n === 9 && !shamashLit) {
        c.classList.add("lit");
        litCount += 1;
        updateLine();
        return;
      }
      if (!shamashLit) {
        line.textContent = "The desk requires the shamash first. It is the helper, and the helper is not on holiday.";
        return;
      }
      var expected = litCount; // nights light in order 1..7 after the shamash
      if (n === expected) {
        c.classList.add("lit");
        litCount += 1;
        updateLine();
      } else {
        line.textContent = "Not that one yet. The nights go in order, and the Concordance is not in the habit of breaking its own rules.";
      }
    });
  });

  /* --- the dreidel: four faces, four letters, no fifth side --- */
  var faces = [
    { letter: "נ", name: "nun", text: "Nothing — you do nothing. The robe stays in the bag; the minute stays unplayed. Sleep." },
    { letter: "ג", name: "gimel", text: "A great deal — you get up and go. The play is on, the oil is on, and the front seat is being held for you." },
    { letter: "ה", name: "hey", text: "Of a higher power — the argument is not yours. Boris and Shlomo settle it the way they always settle it, which is to say, they do not." },
    { letter: "ש", name: "shin", text: "All of it — you stand up and take the whole thing. The candle that will not go out is yours, and you are pleased, and slightly afraid, in that order." }
  ];

  var dreidel = document.getElementById("dreidel");
  var letterEl = document.getElementById("dreidel-letter");
  var caption = document.getElementById("dreidel-caption");
  var spinning = false;

  if (dreidel) {
    dreidel.addEventListener("click", function () {
      if (spinning) return;
      spinning = true;
      dreidel.classList.add("spinning");
      var ticks = 0;
      var tick = setInterval(function () {
        letterEl.textContent = faces[ticks % 4].letter;
        ticks += 1;
      }, 90);
      setTimeout(function () {
        clearInterval(tick);
        dreidel.classList.remove("spinning");
        var f = faces[Math.floor(Math.random() * 4)];
        letterEl.textContent = f.letter;
        caption.textContent = f.name + ": " + f.text;
        spinning = false;
      }, 1450);
    });
  }
})();
