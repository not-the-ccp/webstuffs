/* Thread No. 896 — the Charter Card, which has never been read clean. */
(function () {
  "use strict";

  var CANONICAL =
    "The duty or function of recording true time only so long as those made without Meat_.)";

  var WORDS = CANONICAL.split(" ");
  var MISPOTS = [
    { word: "function", alt: "fiction" },
    { word: "recording", alt: "roaching" },
    { word: "true", alt: "tree" },
    { word: "only", alt: "onely" },
    { word: "long", alt: "longs" },
    { word: "made", alt: "mailed" },
    { word: "Meat_.)", alt: "Meat?)" }
  ];

  var btn = document.getElementById("attemptBtn");
  var log = document.getElementById("attemptLog");
  var line = document.getElementById("lineText");
  var box = document.getElementById("cardLine");
  if (!btn || !line || !box) return;

  var attempts = 11; // the eleven Gus has already filed
  var notes = [
    "One word changed. Filed to the error handler\u2019s jurisdiction.",
    "The prompter raises a pencil. Filed. The line stands until the curtain call.",
    "You altered the parenthesis. That is a word. Filed.",
    "The Meat survived. You did not. Filed.",
    "Eleven by Gus, thirteen by you. The jurisdiction is spacious.",
    "Read clean \u2014 no. Card K-1754 remains the only never-clean card in the deck, again."
  ];

  function scrambleThen(text) {
    var glyphs = "\u00a7\u00b6\u2039\u203a\u00d7\u00f7\u2116\u2021";
    var i = 0;
    var timer = setInterval(function () {
      if (i >= text.length) {
        clearInterval(timer);
        line.textContent = "\u201c" + text + "\u201d";
        box.classList.remove("flicker");
        return;
      }
      var tail = text.slice(i);
      line.textContent =
        "\u201c" +
        text.slice(0, i) +
        Array.from(tail).map(function (ch) {
          return ch === " " ? " " : glyphs[Math.floor(Math.random() * glyphs.length)];
        }).join("") +
        "\u201d";
      i += 2;
    }, 34);
  }

  btn.addEventListener("click", function () {
    attempts += 1;
    var pick = MISPOTS[Math.floor(Math.random() * MISPOTS.length)];
    var altered = WORDS.map(function (w) {
      return w === pick.word ? pick.alt : w;
    }).join(" ");

    box.classList.add("flicker");
    scrambleThen(altered);

    log.textContent =
      "Attempt " +
      attempts +
      ": " +
      notes[(attempts - 12 + notes.length * 99) % notes.length] +
      " Copy " +
      attempts +
      " joins the twenty-seven at the far end of the table.";
  });
})();
