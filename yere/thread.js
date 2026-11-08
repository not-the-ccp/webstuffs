// The Onomast's Board — small touches for thread No. 8814
(function () {
  var posts = Array.prototype.slice.call(document.querySelectorAll('.post'));

  posts.forEach(function (post) {
    var head = post.querySelector('.post-head');
    if (!head) return;
    head.style.cursor = 'pointer';
    head.title = 'Flash this post';
    head.addEventListener('click', function () {
      post.classList.add('flash');
      post.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(function () { post.classList.remove('flash'); }, 900);
    });
  });

  // Stamp the board's clock in the crumb, quietly.
  var crumb = document.querySelector('.crumb-flag');
  if (crumb) {
    var now = new Date();
    var h = String(now.getHours()).padStart(2, '0');
    var m = String(now.getMinutes()).padStart(2, '0');
    crumb.textContent = 'pinned 14 March 2011 · viewed ' + h + ':' + m;
  }
})();
