// Trackside & Signal Box — thread 802
// Posts light up their signal marker on click; staggered fade-in on load.
(function () {
  var posts = document.querySelectorAll(".post");
  posts.forEach(function (post, i) {
    post.style.opacity = "0";
    post.style.transform = "translateY(6px)";
    post.style.transition = "opacity 0.45s ease, transform 0.45s ease";
    setTimeout(function () {
      post.style.opacity = "1";
      post.style.transform = "none";
    }, 120 + i * 140);

    post.addEventListener("click", function (e) {
      if (e.target.closest("a")) return; // don't steal link clicks
      post.classList.toggle("lit");
    });
  });
})();
