/* The Acid Bench — bench dial: the gauge that remembers nothing */
(function () {
  var slider = document.getElementById('ph');
  var val = document.getElementById('phval');
  var out = document.getElementById('phout');
  if (!slider || !val || !out) return;

  var notes = [
    [0.5, 'pH {v} — battery-territory acid. Nothing lives here; the bench would rather not either.'],
    [2, 'pH {v} — the pickle. A Br\u00f8nsted\u2013Lowry donor in full exercise; the hydronium has the room.'],
    [3, 'pH {v} — citric, working. Three hydrogen atoms, spent with good grace.'],
    [5, 'pH {v} — a drained bath. The film has already started rebuilding on anything bright in the pit.'],
    [7, 'pH {v} — neutral. Water only. Batch six and batch nine live here: rinsed, standing, kept.'],
    [9, 'pH {v} — alkaline drift. The bench does not run it; it is logged and left alone.'],
    [14, 'pH {v} — the other side of the ledger. This bench has no use for it and has said so.']
  ];

  function paint(v) {
    val.textContent = v.toFixed(1);
    var note = notes[0][1];
    for (var i = 0; i < notes.length; i++) {
      if (v <= notes[i][0]) { note = notes[i][1]; break; }
    }
    out.textContent = note.replace('{v}', v.toFixed(1));
    document.getElementById('bath').style.filter =
      'hue-rotate(' + Math.round((v - 1.4) * -12) + 'deg)';
  }

  slider.addEventListener('input', function () { paint(parseFloat(slider.value)); });
  paint(parseFloat(slider.value));

  /* clicking the bath agitates it a little */
  var bath = document.getElementById('bath');
  var surface = document.getElementById('surface');
  if (bath && surface) {
    bath.style.pointerEvents = 'auto';
    bath.addEventListener('click', function (e) {
      var rect = bath.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width;
      var b = document.createElement('span');
      b.className = 'bubble b2';
      b.style.left = (x * 100) + '%';
      b.style.animationDuration = '3.5s';
      bath.appendChild(b);
      setTimeout(function () { b.remove(); }, 4000);
    });
  }
})();
