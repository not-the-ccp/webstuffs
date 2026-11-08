// The Silkmen — a small touch: the stars of the review come in one by one,
// like the courses of The Ten Years. Without this script the review is
// complete and fully rated.
document.addEventListener("DOMContentLoaded", function () {
  var stars = document.querySelectorAll("#stars .star");
  if (!stars.length) return;
  stars.forEach(function (s) { s.classList.add("js-hidden"); });
  stars.forEach(function (s, i) {
    setTimeout(function () { s.classList.remove("js-hidden"); }, 500 + i * 350);
  });
});
