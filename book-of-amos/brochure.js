/* Brochure No. 49 — turn the page, in order, do not flip backwards */
(function () {
  var days = Array.prototype.slice.call(document.querySelectorAll('#days .day'));
  var button = document.getElementById('page-turn');
  var note = document.getElementById('turn-note');
  if (!days.length || !button) return;

  var names = [
    'The desk is at the gate of Tekoa. The flock comes in.',
    'The locusts are counted and the Lord relents; the gourd is emptied.',
    'The feasts are despised at Bethel; the party dines at the gate, and it is better.',
    'Samaria holds its long peace under Jeroboam II; the ephah is not cheated.',
    'The flight into Judah is declined and paid for; the herdsman answers from the threshold.',
    'The plowshares are kept for ornament; the house is measured against the word.',
    'The plumb line is on the wall; the green fruit is in the basket in the late summer.',
    'The table is set with the least of the tour; the second chair is set, and nobody fills it.',
    'The day of the Lord is read out loud; the mercy is read last, and the hush is Track 8.'
  ];

  var at = 0; // 0 = not started; 1..9 = the current day

  function render() {
    days.forEach(function (d, i) {
      d.classList.toggle('active', i + 1 === at);
    });
    if (at === 0) {
      button.textContent = 'Turn the page — Day 1 of 9, in order';
      note.textContent = names[0];
    } else if (at <= 9) {
      button.textContent = 'Turn the page — Day ' + at + ' of 9, in order';
      note.textContent = names[at - 1];
    }
  }

  button.addEventListener('click', function () {
    if (at < 9) {
      at += 1;
      render();
      var current = days[at - 1];
      if (current && current.scrollIntoView) {
        current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      button.textContent = 'The tour is kept — do not flip';
      note.textContent = 'Nine chapters, in order, without flipping. The hush is Track 8. The second chair is set with a place.';
    }
  });
})();
