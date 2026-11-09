(function () {
  var form = document.getElementById('period-form');
  var input = document.getElementById('period-year');
  var result = document.getElementById('period-result');
  if (!form || !input || !result) return;

  var periods = [
    { start: 3150, end: 2686, name: 'Early Dynastic Period', note: 'Upper and Lower Egypt united under Menes, whom most Egyptologists take to be Narmer.' },
    { start: 2686, end: 2181, name: 'Old Kingdom', note: 'The Pyramid Age of the Early Bronze Age: Djoser, Sneferu, Khufu.' },
    { start: 2181, end: 2055, name: 'First Intermediate Period', note: 'Relative instability; power divided between Herakleopolis and Thebes.' },
    { start: 2055, end: 1650, name: 'Middle Kingdom', note: 'Reunified from Thebes; Middle Bronze Age literature and the classic tale of Sinuhe.' },
    { start: 1650, end: 1550, name: 'Second Intermediate Period', note: 'The Hyksos 15th Dynasty in the north; a Theban kingdom in the south.' },
    { start: 1550, end: 1077, name: 'New Kingdom', note: 'The empire period of the Late Bronze Age; Ahmose, Hatshepsut, Thutmose III (Menkheperre), Ramesses II.' },
    { start: 1077, end: 664, name: 'Third Intermediate Period', note: 'Libyan and Kushite rulers; authority divided between Tanis and Thebes.' },
    { start: 664, end: 332, name: 'Late Period', note: 'Native dynasties and Persian rule, ending with the conquest of Alexander.' }
  ];

  function find(year) {
    for (var i = 0; i < periods.length; i++) {
      var p = periods[i];
      if (year >= p.end && year <= p.start) return p;
    }
    if (year > 3150) return { name: 'Prehistoric Egypt', note: 'Before the unification of Upper and Lower Egypt around 3150 BC.' };
    return { name: 'After the Pharaohs', note: 'After 332 BC: Macedonian, Ptolemaic, then Roman Egypt.' };
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var year = parseInt(input.value, 10);
    if (!year || year < 1 || year > 6000) {
      result.textContent = 'Enter a year between 1 and 6000 BCE.';
      return;
    }
    var p = find(year);
    result.textContent = year + ' BC falls in the ' + p.name + ' (' + p.start + '\u2013' + p.end + ' BC). ' + p.note;
  });
})();
