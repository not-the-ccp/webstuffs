/* Field Manual FM-13 · Chapter 4 · Slug · session board */
(function () {
  var elEno = document.getElementById('eno');
  var elEnoValue = document.getElementById('eno-value');
  var elU2 = document.getElementById('toggle-u2');
  var elSeibu = document.getElementById('toggle-seibu');
  var elBlack = document.getElementById('toggle-blacksea');
  var elVerdict = document.getElementById('verdict');
  var elDrift = document.getElementById('drift');
  var elDriftText = document.getElementById('drift-text');

  var fragments = [
    'the thoughts of a desolate soul',
    'the confusion of romance and faith',
    'King and Queen Street at Huddersfield',
    'the Black Sea is a lot',
    'the tape marked Seibu',
    'the second track on the album',
    'the studio on the far side',
    'a film with no frames'
  ];

  function toggle(btn) {
    var on = btn.classList.toggle('on');
    btn.classList.toggle('off', !on);
    btn.setAttribute('aria-pressed', on);
    btn.textContent = on ? btn.dataset.on : btn.dataset.off;
    updateVerdict();
  }

  function updateVerdict() {
    var eno = +elEno.value;
    var u2 = elU2.classList.contains('on');
    var seibu = elSeibu.classList.contains('on');
    var black = elBlack.classList.contains('on');
    var text;
    if (!seibu && !black) {
      text = 'Omitted. The box was never found and the chart never laid; the track does not make the master.';
    } else if (seibu && black) {
      text = 'Pressed. Seibu survives the cut and the Black Sea chart holds the room &mdash; Slug stands as the second track.';
    } else if (eno > 70 && !u2) {
      text = "Eno's session. The producer holds the floor and the tape runs to the fade.";
    } else {
      text = 'Mixed. The room is divided between the producer\'s chair and the band\'s attempt; the master waits.';
    }
    elVerdict.innerHTML = '<strong>VERDICT:</strong> ' + text;
  }

  elEno.addEventListener('input', function () {
    elEnoValue.textContent = elEno.value;
    updateVerdict();
  });
  elU2.addEventListener('click', function () { toggle(elU2); });
  elSeibu.addEventListener('click', function () { toggle(elSeibu); });
  elBlack.addEventListener('click', function () { toggle(elBlack); });

  elDrift.addEventListener('click', function () {
    var f = fragments.slice();
    for (var i = f.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = f[i]; f[i] = f[j]; f[j] = t;
    }
    elDriftText.textContent = f.slice(0, 3).join(', ') + '.';
  });

  updateVerdict();
})();
