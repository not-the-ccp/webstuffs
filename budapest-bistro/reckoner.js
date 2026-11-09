(function () {
  var form = document.getElementById('reckoner-form');
  var out = document.getElementById('reckoner-out');
  if (!form || !out) return;

  var perServing = {
    beef: 120,
    onion: 60,
    paprikaSweet: 1.5,
    paprikaHot: 0.25,
    caraway: 0.5,
    potato: 100,
    carrot: 40,
    pepper: 30,
    tomato: 25,
    salt: 1.5
  };
  var unit = {
    beef: ' g', onion: ' g', paprikaSweet: ' tsp', paprikaHot: ' tsp',
    caraway: ' tsp', potato: ' g', carrot: ' g', pepper: ' g',
    tomato: ' g', salt: ' g'
  };
  var name = {
    beef: 'Beef shin, cubed',
    onion: 'Onion, diced',
    paprikaSweet: 'Sweet paprika',
    paprikaHot: 'Hot paprika',
    caraway: 'Caraway seed',
    potato: 'Potatoes, waxy',
    carrot: 'Carrots',
    pepper: 'Sweet pepper',
    tomato: 'Tomato',
    salt: 'Salt'
  };

  function reckon() {
    var guests = Math.max(1, parseInt(form.elements.guests.value, 10) || 1);
    var html = '<p>For <strong>' + guests + '</strong> servings of guly&aacute;s leves:</p><ul>';
    var key;
    for (key in perServing) {
      if (perServing.hasOwnProperty(key)) {
        var amount = perServing[key] * guests;
        amount = unit[key].indexOf('tsp') !== -1 ? Math.round(amount * 2) / 2 : Math.round(amount);
        html += '<li><strong>' + name[key] + ':</strong> ' + amount + unit[key] + '</li>';
      }
    }
    html += '</ul><p>Brown the beef, soften the onion, bloom the paprika off the heat, then simmer four hours. Bread on the side.</p>';
    out.innerHTML = html;
  }

  form.addEventListener('input', reckon);
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    reckon();
  });
  reckon();
})();
