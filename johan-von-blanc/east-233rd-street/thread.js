/* Back Bench Bulletin, Thread No. 88 — small touches only; the thread reads fine without this. */
(function () {
  // Stamp each post with the number of the bench row it was "read" from.
  var posts = document.querySelectorAll(".post");
  posts.forEach(function (post, i) {
    var when = post.querySelector(".when");
    if (when && !when.dataset.stamped) {
      when.appendChild(" · read from bench " + (i % 4 + 1));
      when.dataset.stamped = "1";
    }
  });

  // The scrap gets a gentle lift when the mouse rests on it.
  var scrap = document.querySelector(".scrap");
  if (scrap) {
    scrap.addEventListener("mouseenter", function () {
      scrap.style.transform = "rotate(0deg) translateY(-2px)";
    });
    scrap.addEventListener("mouseleave", function () {
      scrap.style.transform = "";
    });
  }

  // Platform voice: announce the next stop on load, once, quietly.
  var meta = document.querySelector(".thread-meta");
  if (meta) {
    setTimeout(function () {
      meta.textContent =
        "Board: The Bronx · Street Register · Thread No. 88 · 7 posts · " +
        "214 replies read aloud · next stop, Dyre Avenue";
    }, 3000);
  }
})();
