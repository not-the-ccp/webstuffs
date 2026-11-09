/* Guestbook of Chapter XLII - the keeper signs on the hour bell */

function guestbookSign() {
  var form = document.querySelector('.guest-form');
  var who = form.signatory.value.trim();
  var entry = form.entry.value.trim();
  var reply = document.getElementById('guestbookReply');
  if (!who || !entry) {
    reply.textContent = 'The keeper wants a name and a line, in that order.';
    return false;
  }
  if (/\b(ten|10)\b/.test(entry) && /\bguns?\b/.test(entry)) {
    reply.textContent = 'The committee asks that you not count the guns in your entry.';
    return false;
  }
  reply.textContent = 'Signed on the hour bell. The mat at the foot of the bunk remains yours.';
  form.reset();
  return false;
}
