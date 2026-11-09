// Red-pen marking: tap a paragraph to underline it like a teacher's comment.
// The text stays perfectly readable without this script.
var paras = document.querySelectorAll('main p, .correction p, .sources p');
paras.forEach(function (paragraph) {
  paragraph.addEventListener('click', function () {
    this.classList.toggle('marked');
  });
});
