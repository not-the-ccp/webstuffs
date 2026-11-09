/* Florence thread — light interactivity. The text reads fine without this. */

(function () {
  var posts = document.querySelectorAll('.post');

  // Clicking a post pulses it (a struck note) and toggles a read mark.
  posts.forEach(function (post) {
    post.addEventListener('click', function () {
      post.classList.toggle('touched');
    });
  });

  // Spawn a small floating music note where the user clicks inside the thread.
  var thread = document.querySelector('.thread');
  var notes = ['♩', '♪', '♫', '♬'];

  thread.addEventListener('click', function (event) {
    var target = event.target;
    if (!target.closest('.post-body')) return;

    var note = document.createElement('span');
    note.textContent = notes[Math.floor(Math.random() * notes.length)];
    note.style.position = 'absolute';
    note.style.left = event.clientX + 'px';
    note.style.top = event.clientY + 'px';
    note.style.fontSize = (18 + Math.random() * 14) + 'px';
    note.style.color = '#c95a88';
    note.style.pointerEvents = 'none';
    note.style.zIndex = '5';
    note.style.transition = 'top 1.2s ease-out, opacity 1.2s ease-out';
    document.body.appendChild(note);

    requestAnimationFrame(function () {
      note.style.top = (note.offsetTop - 90) + 'px';
      note.style.opacity = '0';
    });

    setTimeout(function () {
      note.remove();
    }, 1300);
  });
})();
