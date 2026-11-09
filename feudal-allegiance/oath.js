// The Tally of Oaths — a little clerk for the reader.
(function () {
  var seals = document.querySelectorAll(".seal");
  var note = document.getElementById("tally-note");
  if (!seals.length || !note) return;

  var words = {
    sworn:  "sworn, and let it stand",
    kept:   "kept, as the horses of the Mark kept theirs",
    broken: "broken, and entered for the house to answer"
  };

  seals.forEach(function (seal) {
    seal.addEventListener("click", function () {
      var mark = seal.getAttribute("data-mark");
      var count = document.querySelector('.count[data-count="' + mark + '"]');
      var n = parseInt(count.textContent, 10) + 1;
      count.textContent = n;
      note.textContent = "Oath " + n + " " + words[mark] + ".";
    });
  });
})();
