/* Standing FAQ No. 11 — progressive answer toggles. All answers are visible without this script. */

(function () {
  var buttons = document.querySelectorAll('.toggle');
  for (var i = 0; i < buttons.length; i++) {
    (function (button) {
      var qa = button.parentElement;
      var answer = qa.querySelector('.answer');
      button.addEventListener('click', function () {
        var hidden = answer.style.display === 'none';
        answer.style.display = hidden ? '' : 'none';
        button.textContent = hidden ? 'hide answer' : 'show answer';
        button.setAttribute('aria-expanded', String(hidden));
      });
    })(buttons[i]);
  }
})();
