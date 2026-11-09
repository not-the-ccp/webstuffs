/* The breeding bench — a tiny genetic-programming run on eight-note rhythms. */
(function () {
  var NOTES = ["C", "D", "E", "G", "A"];
  var TARGET = ["C", "C", "G", "G", "A", "G", "C", "A"]; // the lunch motif
  var SIZE = 8;
  var POP = 8;
  var KEEPS = 4;

  var gen = 0;
  var population = [];

  function rand(n) { return Math.floor(Math.random() * n); }
  function randNote() { return NOTES[rand(NOTES.length)]; }
  function randomProgram() {
    var p = [];
    for (var i = 0; i < SIZE; i++) p.push(randNote());
    return p;
  }
  function fitness(p) {
    var f = 0;
    for (var i = 0; i < SIZE; i++) if (p[i] === TARGET[i]) f++;
    return f;
  }
  function fmt(p) { return p.join(" "); }

  function seed() {
    population = [];
    for (var i = 0; i < POP; i++) population.push(randomProgram());
    gen = 0;
  }

  function render(logText) {
    var fits = population.map(fitness);
    var best = Math.max.apply(null, fits);
    var mean = fits.reduce(function (a, b) { return a + b; }, 0) / POP;
    document.getElementById("gen").textContent = gen;
    document.getElementById("best").textContent = best;
    document.getElementById("mean").textContent = mean.toFixed(1);
    var html = "";
    for (var i = 0; i < POP; i++) {
      html += '<div class="row' + (fits[i] === best ? " winner" : "") + '">' +
        '<span class="no">P-' + (i + 1) + '</span>' +
        '<span class="notes">' + fmt(population[i]) + "</span>" +
        '<span class="fit">' + fits[i] + "/8</span></div>";
    }
    document.getElementById("pop").innerHTML = html;
    if (logText) document.getElementById("log").innerHTML = logText;
  }

  function pick(fits, exclude) {
    var i;
    do { i = rand(POP); } while (i === exclude || fits[i] < 1);
    return i;
  }

  function step() {
    gen++;
    var fits = population.map(fitness);
    var order = fits.map(function (f, i) { return [f, i]; })
      .sort(function (a, b) { return b[0] - a[0]; });
    var keepers = [];
    for (var k = 0; k < KEEPS; k++) keepers.push(order[k][1]);

    // selection + crossover: two keepers swap their back halves
    var a = keepers[rand(KEEPERS)];
    var b = a;
    while (b === a) b = keepers[rand(KEEPERS)];
    var child = population[a].slice();
    for (var j = SIZE / 2; j < SIZE; j++) child[j] = population[b][j];

    // mutation: one random fragment, one random note
    var m = rand(SIZE);
    var old = child[m];
    child[m] = randNote();

    // one random survivor also mutates a random fragment
    var s = keepers[rand(KEEPERS)];
    var sm = rand(SIZE);
    var sOld = population[s][sm];
    population[s][sm] = randNote();

    // copy the keepers over; the unselected four are replaced by offspring
    var next = keepers.map(function (i) { return population[i]; });
    next.push(child);
    while (next.length < POP) {
      var c = randomProgram();
      c[rand(SIZE)] = NOTES[rand(NOTES.length)];
      next.push(c);
    }
    population = next;

    var msg = "Gen " + gen + " &mdash; kept P-" + (keepers[0] + 1) + " (best), " +
      "crossed P-" + (a + 1) + " &times; P-" + (b + 1) + " (back halves swapped), " +
      "mutated a fragment of the offspring (" + old + " &rarr; " + child[m] +
      "), mutated P-" + (s + 1) + " (" + sOld + " &rarr; " + population[s][sm] +
      "), copied the rest over.";
    var bestFit = Math.max.apply(null, population.map(fitness));
    if (bestFit === SIZE) {
      msg += " <strong>Full match with the lunch motif &mdash; the tape judge has stopped. Dale calls &ldquo;step.&rdquo;</strong>";
    }
    render(msg);
  }

  document.getElementById("step").addEventListener("click", step);
  document.getElementById("reset").addEventListener("click", function () {
    seed();
    render("&mdash; population reseeded, generation 0 &mdash;");
  });

  seed();
  render("&mdash; press <em>Run a generation</em> to begin &mdash;");
})();
