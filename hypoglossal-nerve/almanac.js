/* Season book touches for Entry 1998/063 — the page reads fine without this. */
(function () {
  var visit = document.getElementById('visit');
  if (visit) {
    // the counter is wound by hand; give it one honest tick per visit
    var n = parseInt(visit.textContent.replace(/\D/g, ''), 10);
    if (isNaN(n)) n = 4831;
    n += 1;
    visit.textContent = ('000000' + n).slice(-6);
  }

  var ticker = document.getElementById('ticker');
  if (ticker) {
    var texts = [
      '24\u00B0F \u00B7 barometer 30.02 inHg, firm \u00B7 sky star-strewn, no moon \u00B7 gusts 39 kt, priced at the landing',
      'twelfth of twelve currents \u00B7 sole motor \u00B7 no return line \u00B7 the tongue visible from the glass',
      'rootlets counted at the hypoglossal nucleus \u00B7 canal clear \u00B7 neck lane held \u00B7 landing: the tongue'
    ];
    var i = 0;
    setInterval(function () {
      i = (i + 1) % texts.length;
      ticker.textContent = texts[i];
    }, 6000);
  }
})();
