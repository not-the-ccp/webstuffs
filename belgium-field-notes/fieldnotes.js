/* Field book visitor counter — keeps its count in the browser's own storage. */
(function () {
  var key = 'egms-field-notes-belgium-visitors';
  var stored = localStorage.getItem(key);
  var count = stored ? parseInt(stored, 10) + 1 : 1;
  localStorage.setItem(key, count);
  var el = document.getElementById('counter');
  if (el) el.textContent = count;

  function signBook() {
    var textarea = document.getElementById('gb-entry');
    if (!textarea || !textarea.value.trim()) {
      alert('Write a line in the field book before you sign it.');
      return;
    }
    alert('Signed: ' + textarea.value.trim().slice(0, 60) + '\nThe field book is kept on paper in Room 214.');
    textarea.value = '';
  }
  window.signBook = signBook;
})();
