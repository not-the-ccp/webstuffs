// Placard No. 14 — a slow wind for the cloud diagram.
(function () {
  var cloud = document.querySelector('.cloud svg');
  if (!cloud || window.matchMedia && !window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return;
  cloud.style.animation = 'none';
  var t = 0;
  function drift() {
    t += 0.012;
    var y = Math.sin(t) * 5;
    var r = Math.sin(t * 0.7) * 0.4;
    cloud.style.transform = 'translateY(' + y + 'px) rotate(' + r + 'deg)';
    requestAnimationFrame(drift);
  }
  drift();
})();
