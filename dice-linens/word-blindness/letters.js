/* The Drawer — Blinded Letters, Bell Creek Table-Book, Chapter 9. */
(function () {
  "use strict";

  var drawer = [
    { letter: "b", twin: "d", note: "Every b on the page is now a d. The board will not be the one to tell the character." },
    { letter: "d", twin: "b", note: "Every d is a b. 'district' has been 'bistrict' all along, in the character's eyes." },
    { letter: "p", twin: "q", note: "Every p is a q. The character reads 'planning' as 'qlanning' and means to ask about it." },
    { letter: "q", twin: "p", note: "Every q is a p. The queue is a peel, and the character will wait at both." },
    { letter: "m", twin: "n", note: "Every m is an n. 'minutes' arrives as 'nintutes', which is close enough for the clerk." },
    { letter: "n", twin: "m", note: "Every n is an m. The character has been reading 'new' as 'mem' since September." },
    { letter: "f", twin: "ph", note: "Every f is a ph. The roof is a phoof, and the character insists on the pronunciation." },
    { letter: "w", twin: "vv", note: "Every w is two v's. 'whale' is vvhale, and the character is in the midst of it." }
  ];

  var btn = document.getElementById("deal");
  var out = document.getElementById("dealt");
  if (!btn || !out) return;

  var last = -1;

  btn.addEventListener("click", function () {
    var i;
    do {
      i = Math.floor(Math.random() * drawer.length);
    } while (i === last && drawer.length > 1);
    last = i;

    var card = drawer[i];
    out.innerHTML = "";
    out.appendChild(document.createTextNode("Blinded letter: "));
    var span = document.createElement("span");
    span.className = "letter";
    span.textContent = card.letter;
    out.appendChild(span);
    out.appendChild(document.createTextNode("\u2014 " + card.note));
  });

  /* Card 9-F sounds itself out, one letter at a time, and then settles. */
  var card = document.getElementById("card9f");
  if (card) {
    var text = card.textContent;
    card.addEventListener("click", function () {
      if (card.dataset.sounding) return;
      card.dataset.sounding = "1";
      var i = 0;
      var timer = setInterval(function () {
        i += 3;
        if (i >= text.length) {
          clearInterval(timer);
          card.textContent = text;
          delete card.dataset.sounding;
          return;
        }
        card.textContent = text.slice(0, i) + "\u2026";
      }, 55);
    });
    card.style.cursor = "pointer";
    card.title = "Sound it out";
  }
})();
