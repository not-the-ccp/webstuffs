// The three entries, rendered as lanes. Pure garnish; the manifest in
// Section 3 carries the same record without this script.
(function () {
  var wrap = document.getElementById('lanes');
  if (!wrap) return;
  var entries = [
    { evt: 'Athletics — M 400 m', who: 'Ieremia Manoa', fin: 'OAKA, August 2004 — heat logged' },
    { evt: 'Athletics — W 100 m', who: 'Rokena Teikane', fin: 'OAKA, August 2004 — heat logged' },
    { evt: 'Weightlifting — W 69 kg', who: 'Meamea Thomas', fin: 'Peace and Friendship Stadium — best I-Kiribati finish to date' }
  ];
  entries.forEach(function (e) {
    var d = document.createElement('div');
    d.className = 'lane';
    d.innerHTML = '<div class="evt">' + e.evt + '</div>' +
                  '<div class="who">' + e.who + '</div>' +
                  '<div class="fin">' + e.fin + '</div>';
    wrap.appendChild(d);
  });
})();
