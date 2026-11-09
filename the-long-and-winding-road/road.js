/* The Long & Winding Road — interactive touches */
(function () {
  'use strict';

  var vinyl = document.querySelector('.vinyl');
  var needle = document.querySelector('.needle');
  var playing = false;

  if (needle && vinyl) {
    needle.addEventListener('click', function () {
      playing = !playing;
      vinyl.classList.toggle('spinning', playing);
      needle.classList.toggle('down', playing);
      needle.textContent = playing ? 'Lift the needle' : 'Drop the needle';
    });
  }

  var notes = ['\u266A', '\u266B', '\u266C'];
  document.body.addEventListener('click', function (event) {
    if (event.target.closest('a, button')) return;
    var note = document.createElement('div');
    note.className = 'floater';
    note.textContent = notes[Math.floor(Math.random() * notes.length)];
    note.style.left = event.clientX + 'px';
    note.style.top = event.clientY + 'px';
    note.style.fontSize = (12 + Math.random() * 26) + 'px';
    document.body.appendChild(note);
    setTimeout(function () { note.style.opacity = '0'; }, 500);
    setTimeout(function () { note.remove(); }, 1600);
  });
})();
