/* SDS No. QM-1796-003 — The Dial: needle tracks the section being read */
(function () {
  var sections = Array.prototype.slice.call(document.querySelectorAll('.sec'));
  var needle = document.getElementById('needle');
  var secRead = document.getElementById('dial-sec');
  var valRead = document.getElementById('dial-val');
  var product = document.getElementById('product');
  if (!sections.length) return;

  var phrases = [
    'WHEN EARNED, WHEN PAID',
    'SIGNAL: DANGER',
    'THREE ELEMENTS, IN ORDER',
    'RESTITUTION, IMMEDIATELY',
    'STIPULATION, NOT EVIDENCE',
    'CONTAIN THE RELEASE',
    'FIFTY-ONE STORAGE STATES',
    'THE MEASURE IS THE LIMIT',
    'AS IT WAS EARNED',
    'DO NOT MIX WITH A PRICE',
    'THE ANTIDOTE, ON RECORD',
    'THE DEALING SEEPS IN',
    'FILED, UNCHANGED',
    'BY SERVICE, ONLY',
    'RE-DECLARE IN THE FORUM',
    'THE EIGHT COUNTS STAND'
  ];

  function setSection(i) {
    var angle = -90 + (i / (sections.length - 1)) * 180;
    needle.setAttribute('transform', 'rotate(' + angle.toFixed(1) + ' 100 120)');
    secRead.textContent = 'SECTION ' + String(i + 1).padStart(2, '0') + '/16';
    valRead.textContent = phrases[i] || 'WHEN EARNED, WHEN PAID';
    sections.forEach(function (s, j) { s.classList.toggle('active', j === i); });
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) setSection(sections.indexOf(e.target));
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* slow idle wobble of the needle, the way a dial waits for a payment */
  var wobble = 0;
  setInterval(function () {
    wobble = Math.sin(Date.now() / 1600) * 1.4;
    if (!needle.dataset.still) {
      var base = parseFloat(needle.dataset.base || '-90');
      needle.setAttribute('transform', 'rotate(' + (base + wobble).toFixed(2) + ' 100 120)');
    }
  }, 90);
  setInterval(function () {
    var m = /rotate\(([-0-9.]+)/.exec(needle.getAttribute('transform') || '');
    if (m) needle.dataset.base = m[1];
  }, 400);

  /* product name: types once on load, like the label being struck */
  if (product) {
    var text = 'QUANTUM MERUIT';
    var chars = 'QUMERTAIN016!';
    product.textContent = '';
    var frame = 0;
    var iv = setInterval(function () {
      frame++;
      var out = '';
      for (var i = 0; i < text.length; i++) {
        if (i < frame / 2) out += text[i];
        else if (text[i] === ' ') out += ' ';
        else out += chars[Math.floor(Math.random() * chars.length)];
      }
      product.textContent = out;
      if (frame / 2 >= text.length) {
        clearInterval(iv);
        product.innerHTML = 'QUANTUM&nbsp;MERUIT';
      }
    }, 55);
  }
})();
