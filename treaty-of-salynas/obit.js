// The life of the peace, by the calendar — clickable timeline.
// Without this script the same entries are listed in .tl-fallback.

(function () {
  var events = [
    {
      year: "1384",
      label: "Königsberg",
      text: "The Treaty of Königsberg: Vytautas promises Samogitia to the Knights for the first time. The promise is made, the land is kept, and the first of the three promises fails quietly at the border."
    },
    {
      year: "1390",
      label: "Lyck",
      text: "The Treaty of Lyck: the second promise of Samogitia, sworn in the same season as Vytautas's conversion to Christianity. The Knights gain a paper; the Neman lowlands gain another border market."
    },
    {
      year: "12 Oct 1398",
      label: "Salynas",
      text: "The treaty is signed on the islet between Kulautuva and the mouth of the Nevėžis. For the first time the parties attempt to enforce the transfer of the land — fortresses ceded, borders kept — rather than merely promise it."
    },
    {
      year: "Spring 1399",
      label: "The fortresses",
      text: "Under cover of the treaty, the Grand Master Konrad von Jungingen takes the Samogitian fortresses one by one, pressing the enforcement that was Salynas's entire reason for living."
    },
    {
      year: "26–27 Oct 1399",
      label: "Blue Waters",
      text: "The Battle of the Blue Waters, some forty kilometres north of the islet: the Lithuanian army with Hungarian and Tatar auxiliaries breaks the Order's cavalry. The enforcement, and with it the treaty, is broken in a single afternoon."
    }
  ];

  var tl = document.getElementById("tl");
  var detail = document.getElementById("tl-detail");
  var fallback = document.getElementById("tl-fallback");
  if (!tl || !detail) return;

  // Without JS the interactive list is empty; hide it and show the fallback.
  // With JS we build buttons and hide the fallback.
  var buttons = [];
  events.forEach(function (ev, i) {
    var b = document.createElement("button");
    b.type = "button";
    b.textContent = ev.year + " · " + ev.label;
    b.setAttribute("aria-pressed", "false");
    b.addEventListener("click", function () {
      buttons.forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
      b.setAttribute("aria-pressed", "true");
      detail.textContent = ev.year + " — " + ev.text;
    });
    tl.appendChild(b);
    buttons.push(b);
  });

  detail.textContent = "Select a date above to read the record.";
  if (fallback) fallback.style.display = "none";
})();
