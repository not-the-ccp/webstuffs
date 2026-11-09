// WO-1954 0643 — office stamp: files the specification's reading time
// in old-style figures, in the margin, once per visit.
(function () {
  var foot = document.querySelector(".foot");
  if (!foot || window.localStorage.getItem("wo1954-0643-stamped")) return;
  window.localStorage.setItem("wo1954-0643-stamped", "1");

  var line = document.createElement("p");
  line.className = "stamp";
  var now = new Date();
  var hh = ("0" + now.getHours()).slice(-2);
  var mm = ("0" + now.getMinutes()).slice(-2);
  line.textContent = "Received for the file, " +
    now.getDate() + " " + now.toLocaleDateString(undefined, { month: "long", year: "numeric" }) +
    ", at " + hh + ":" + mm + " — office copy retained, reading copy yours.";
  line.style.marginTop = "1.25rem";
  line.style.fontSize = ".8rem";
  line.style.fontStyle = "normal";
  line.style.letterSpacing = ".06em";
  line.style.textTransform = "uppercase";
  line.style.color = "#8a2b1d";
  foot.appendChild(line);
})();
