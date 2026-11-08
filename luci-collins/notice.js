document.addEventListener('DOMContentLoaded', function () {
  var message = document.querySelector('.message');
  if (!message) return;
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'clear-btn';
  btn.textContent = 'Clear error';
  message.parentNode.insertBefore(btn, message.nextSibling);
  btn.addEventListener('click', function () {
    btn.disabled = true;
    btn.textContent = 'Error cannot be cleared &mdash; void is permanent';
  });
});
