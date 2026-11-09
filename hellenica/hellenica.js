/* Hellenica — the Keeper's Test, Supplement No. 11 */
(function () {
  var QUESTIONS = [
    {
      q: "1. With its nine regions, up to how many inhabited islands does the board of Hellenica hold?",
      opts: ["11", "81", "227", "43"],
      a: 2
    },
    {
      q: "2. Which square on the board is marked with the small black square, the capital and largest Greek city?",
      opts: ["Thessaloniki", "Patras", "Athens", "Nikaia"],
      a: 2
    },
    {
      q: "3. Which sea is marked west of the mainland, at the left of the eldest player?",
      opts: ["The Aegean", "The Ionian", "The gulf", "The strait"],
      a: 1
    },
    {
      q: "4. North Macedonia and Bulgaria stand which way of the board, the wall it leans against?",
      opts: ["East", "South", "West", "North"],
      a: 3
    },
    {
      q: "5. The ferry is long-nosed, travels the strait and the far shore, and is:",
      opts: ["counted at the smoke hour", "never counted", "counted as 4 honey", "the eleventh token"],
      a: 1
    }
  ];

  var form = document.getElementById("test-form");
  var verdict = document.getElementById("test-verdict");
  var scoreLine = document.getElementById("test-score");
  if (!form) return;

  QUESTIONS.forEach(function (item, i) {
    var label = document.createElement("label");
    label.textContent = item.q;
    form.appendChild(label);
    var row = document.createElement("div");
    row.className = "opts";
    item.opts.forEach(function (opt, j) {
      var lab = document.createElement("label");
      var radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "q" + i;
      radio.value = j;
      lab.appendChild(radio);
      lab.appendChild(document.createTextNode(opt));
      row.appendChild(lab);
    });
    form.appendChild(row);
  });

  var button = document.createElement("button");
  button.type = "button";
  button.textContent = "Let the keeper score me";
  form.appendChild(button);

  button.addEventListener("click", function () {
    var score = 0;
    QUESTIONS.forEach(function (item, i) {
      var chosen = form.querySelector('input[name="q' + i + '"]:checked');
      var row = form.querySelectorAll(".opts")[i];
      row.querySelectorAll("label").forEach(function (lab) {
        lab.classList.remove("right", "wrong");
      });
      if (chosen) {
        if (Number(chosen.value) === item.a) {
          score += 1;
          chosen.parentElement.classList.add("right");
        } else {
          chosen.parentElement.classList.add("wrong");
          var correct = row.querySelectorAll("label")[item.a];
          if (correct) correct.classList.add("right");
        }
      }
    });
    scoreLine.textContent = score + " of 5";
    if (score >= 4) {
      verdict.textContent = "You may run the table. The ferry is in the strait and the smoke puffs are set in their rows.";
    } else if (score === 3) {
      verdict.textContent = "You are one puff short of the keeper's chair. Read the manual once, standing, and sit down on the second reading.";
    } else {
      verdict.textContent = "The keeper gives you a smoke puff and tells you to read the manual once, standing, as the eighty-one names are read. The game is not argued while you read.";
    }
  });
})();
