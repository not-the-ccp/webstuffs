/* George Hendy thread — lightweight post highlighting. Readable without JavaScript. */

(function () {
  var posts = document.querySelectorAll('.post');
  var current = null;

  posts.forEach(function (post) {
    post.addEventListener('click', function () {
      if (current) {
        current.classList.remove('current');
      }
      post.classList.add('current');
      current = post;
      post.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
})();
