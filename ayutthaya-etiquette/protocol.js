/* Chapter XIV — the tribute calculator */
(function () {
  var greetings = {
    vassal: "Greeting rendered: \u201cI come by the sea door, with my name spoken aloud, and I ask to be counted, not seated.\u201d Three prostrations on the river; one white elephant, or a picture of one; nine oxen for the boat.",
    neighbor: "Greeting rendered: \u201cWe are two kingdoms that see the same sea.\u201d One prostration, from the hull; no elephant, but gold and white cloth, each item announced by name; six oxen for the boat.",
    great: "Greeting rendered: \u201cThe middle seat is empty, and I have been told it is mine to offer.\u201d One prostration, exchanged at equal height; one white elephant, given in return; twelve oxen, and a boat of your own.",
    hostile: "Greeting rendered: \u201cYou are not in the book. You are being written into it.\u201d No prostrations, no elephants; the count is of heads, not of animals, and the oxen are all of them, for the war."
  };

  var select = document.getElementById("station");
  var output = document.getElementById("greeting");
  var rows = document.querySelectorAll(".tribute-table tbody tr");

  function render() {
    if (!select || !output) return;
    output.textContent = greetings[select.value] || greetings.vassal;
    rows.forEach(function (row) {
      row.classList.toggle("lit", row.getAttribute("data-station") === select.value);
    });
  }

  if (select) {
    select.addEventListener("change", render);
  }
  render();
})();
