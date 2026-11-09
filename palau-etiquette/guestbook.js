/* Guestbook of Chapter XXVII - a waiting-room courtesy */

window.guestbookSign = function () {
  var form = document.querySelector('.guest-form');
  var name = form ? form.signatory.value.trim() : '';
  var entry = form ? form.entry.value.trim() : '';
  var reply = document.getElementById('guestbookReply');
  if (!reply) return;
  if (!name || !entry) {
    reply.textContent = 'The committee asks for both a signatory and a line.';
    return;
  }
  reply.textContent = 'Line ' + (42 + (name.length % 90)) +
    ', the ' + (name.length % 2 ? 'dry' : 'wet') + ' season: signed, and the book is full again.';
};

/* The waiting-room counter, advanced by hand once a season. */
(function () {
  var counter = document.getElementById('visitorCount');
  if (!counter) return;
  var n = parseInt(counter.textContent.replace(/\D/g, ''), 10) || 4127;
  counter.textContent = ('000000' + (n + 1)).slice(-6);
})();
