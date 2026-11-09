// Gallery 4 message desk — small touches for the Dual Monarchy apology.
(function () {
  "use strict";

  // The mangled folio line: the two smudged headings get a wash mark,
  // and the date reads out slowly like a stamp being pressed.
  var slip = document.getElementById("folio-slip");
  if (slip && !slip.dataset.dressed) {
    slip.dataset.dressed = "1";
    var text = slip.textContent;
    slip.textContent = "";
    var before = text.indexOf("the beach");
    var rest = text.slice(before);
    var head = text.slice(0, before);
    var beach = rest.indexOf("The Normandy end");
    slip.appendChild(document.createTextNode(head + rest.slice(0, beach)));
    var wash = document.createElement("span");
    wash.className = "mark-wash";
    wash.textContent = rest.slice(beach);
    slip.appendChild(wash);
  }

  // Footer line: counts the dual state down, the way the bench counts coats.
  var years = document.getElementById("years-left");
  if (years) {
    var total = 1918 - 1867; // 51
    var year = 1867;
    var timer = setInterval(function () {
      year += 1;
      if (year > 1918) { year = 1867; }
      years.textContent = (1918 - year) + " years left of the dual state — " + year;
      if (year === 1867) {
        clearInterval(timer);
        years.textContent = total + " years of the dual state";
      }
    }, 420);
    years.addEventListener("animationend", function () {}); // seal stamps; nothing owed
  }

  // Ink line under the signature, drawn on load.
  var signer = document.querySelector(".signer");
  if (signer) {
    signer.style.display = "block";
    signer.style.borderBottom = "2px solid rgba(143,29,29,0)";
    setTimeout(function () {
      signer.style.transition = "border-color 1.6s ease 0.8s";
      signer.style.borderBottom = "2px solid rgba(143,29,29,0.55)";
    }, 60);
  }
})();
