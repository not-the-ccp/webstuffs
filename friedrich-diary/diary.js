/* A small touch: the painting settles gently when its page scrolls into view. */
(function () {
  var card = document.querySelector('.card');
  if (!card || !('IntersectionObserver' in window)) return;
  card.style.transition = 'transform 1.4s ease, box-shadow 1.4s ease';
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        card.style.transform = 'rotate(0.6deg)';
        card.style.boxShadow = '0 4px 14px -8px rgba(44,40,34,0.45)';
        io.disconnect();
      }
    });
  }, { threshold: 0.4 });
  io.observe(card);
})();
