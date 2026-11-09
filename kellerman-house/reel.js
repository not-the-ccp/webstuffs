/* The Kellerman House — marquee bulbs and one stubborn letter.
   Pure decoration: the letter reads fine with scripts off. */

(function () {
  "use strict";

  function seedBulbs(id, count) {
    var row = document.getElementById(id);
    if (!row) return;
    for (var i = 0; i < count; i++) {
      var b = document.createElement("span");
      b.className = "bulb" + (i % 3 === 0 ? " lit" : "");
      row.appendChild(b);
    }
  }

  seedBulbs("bulbs-top", 22);
  seedBulbs("bulbs-bottom", 22);

  // The classic failing-sign trick: one bulb on each row keeps stuttering,
  // the way the 17th of March stutters on this street.
  var sign = document.querySelector(".sign .word");
  var failers = [];

  function failer(el, base) {
    setTimeout(function () {
      el.classList.toggle("flicker");
      setTimeout(failer, base + Math.random() * base * 4);
    }, base + Math.random() * base * 4);
  }

  if (sign) {
    var chars = sign.textContent;
    sign.textContent = "";
    for (var i = 0; i < chars.length; i++) {
      var s = document.createElement("span");
      s.textContent = chars[i];
      sign.appendChild(s);
      if (Math.random() < 0.3) failers.push(s);
    }
    failers.forEach(function (s) { failer(s, 900); });
  }

  // The projection counter: the house keeps the count of the Long Night.
  var note = document.querySelector(".kept-note");
  if (note) {
    var original = note.textContent;
    var n = 0;
    var iv = setInterval(function () {
      n += 1;
      if (n >= 212) {
        clearInterval(iv);
        note.textContent = original;
        return;
      }
      note.textContent = "counting the room \u2014 " + n + " of 212 \u2026";
    }, 40);
  }
})();
