// The Venetian Desk — a single quiet touch: the register line settles in.
document.addEventListener('DOMContentLoaded', function () {
  var line = document.querySelector('.record-line');
  if (!line || !('IntersectionObserver' in window)) return;
  line.style.opacity = '0';
  line.style.transition = 'opacity 1.4s ease';
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        line.style.opacity = '1';
        io.disconnect();
      }
    });
  }, { threshold: 0.4 });
  io.observe(line);
});
