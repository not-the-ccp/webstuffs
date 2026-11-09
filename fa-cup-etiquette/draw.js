(function () {
  var list = document.querySelector('.balls');
  if (!list) return;
  var items = [].slice.call(list.querySelectorAll('.ball'));
  var button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Mix the draw again';
  button.style.marginLeft = '10px';
  button.style.font = 'inherit';
  list.parentNode.insertBefore(button, list.nextSibling);
  button.addEventListener('click', function () {
    items.sort(function () { return 0.5 - Math.random(); });
    items.forEach(function (item) { list.appendChild(item); });
    button.textContent = 'Mixed';
    setTimeout(function () { button.textContent = 'Mix the draw again'; }, 1200);
  });
})();
