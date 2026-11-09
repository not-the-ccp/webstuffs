/* Entry 27-B — the stamp settles onto the page, the way the barometer holds at 1,018 */
(function () {
  var stamp = document.querySelector('.stamp');
  if (!stamp || !window.requestAnimationFrame) return;
  stamp.style.transition = 'none';
  stamp.style.transform = 'rotate(-24deg) translateY(-14px)';
  stamp.style.opacity = '0';
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      stamp.style.transition = 'transform 0.9s cubic-bezier(0.22, 0.9, 0.3, 1.2), opacity 0.6s ease';
      stamp.style.transform = 'rotate(-9deg)';
      stamp.style.opacity = '0.72';
    });
  });
})();
