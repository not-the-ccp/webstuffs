/* Northern Rosella — Visitor's Brochure: sighting log */
(function () {
  var log = document.getElementById('sighting-log');
  var btn = document.getElementById('log-sighting');
  if (!log || !btn) return;

  var places = [
    'East Alligator River, Kakadu',
    'salmon-gum woodland near Katherine',
    'Mitchell Plateau',
    'Prince Regent River country',
    'Gulf of Carpentaria coast',
    'Arnhem Land escarpment'
  ];
  var cheeks = ['white', 'blue'];

  btn.addEventListener('click', function () {
    var entry = document.createElement('p');
    var place = places[Math.floor(Math.random() * places.length)];
    var cheek = cheeks[Math.floor(Math.random() * cheeks.length)];
    var now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    entry.textContent = now + ' &middot; northern rosella sighted at ' + place + ' &middot; cheeks ' + cheek + '.';
    log.insertBefore(entry, log.firstChild);
  });
})();
