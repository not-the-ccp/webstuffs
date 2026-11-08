// Destroyer thread — sounding line scope
(function () {
  var sonar = document.getElementById('sonar');
  var blip = document.getElementById('blip');
  var readout = document.getElementById('sonarReadout');
  var btn = document.getElementById('pingBtn');
  if (!sonar || !btn || !readout) return;

  var ranges = [
    '2,600 tonnes of escort off the bow. She is holding station. The escort does not stop.',
    'Return at thirty knots, bow wave breaking. The almanac, by the record, was never wrong.',
    'Faint return off the bridge. Somebody left the almanac on the table again.',
    'Contact, small and fast, closing from the dark. The 1892 order stands: destroy.',
    'Nothing returning. The frost is on the glass until 2 a.m.; the watch is unbroken.'
  ];
  var i = 0;

  btn.addEventListener('click', function () {
    sonar.classList.remove('ping');
    void sonar.offsetWidth; // restart the ring animation
    sonar.classList.add('ping');

    blip.classList.remove('lit');
    setTimeout(function () { blip.classList.add('lit'); }, 700);
    setTimeout(function () {
      readout.textContent = ranges[i % ranges.length];
      i++;
    }, 900);
  });
})();
