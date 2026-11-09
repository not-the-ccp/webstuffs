/* Recalde Press & Cooperage — Question File No. 47
   Gentle fade-in for the question cards as they enter view.
   Text is fully readable without this script. */
(function () {
  "use strict";

  var cards = document.querySelectorAll(".qa, .crateqa, .margin-note");
  if (!cards.length) return;

  if (!("IntersectionObserver" in window)) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("shown");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  cards.forEach(function (card) {
    card.classList.add("fade-in");
    io.observe(card);
  });

  // If JS runs after most cards are already visible, reveal the first one
  // immediately so the reader is never left staring at an empty top of page.
  var first = cards[0];
  if (first && first.getBoundingClientRect().top < window.innerHeight) {
    first.classList.add("shown");
    io.unobserve(first);
  }
})();
