/* Card No. 44 — tick ingredients into the pot, one at a time, like the bells: one at a time, no second service. */
(function () {
  "use strict";
  var ings = document.querySelectorAll("li.ing");
  var n = 0;
  for (var i = 0; i < ings.length; i++) {
    (function (li) {
      li.style.cursor = "pointer";
      li.title = "tick it into the pot";
      li.addEventListener("click", function () {
        li.classList.toggle("picked");
        n = document.querySelectorAll("li.ing.picked").length;
        if (li.classList.contains("picked") && n === ings.length) {
          var note = document.createElement("p");
          note.style.cssText = "font-family:'Courier New',monospace;font-size:.85rem;color:#3f6b62;";
          note.textContent = "— the pot is full. the bell has called. one seating.";
          var method = document.querySelector("ol.method");
          if (method && !document.querySelector(".bell-note")) {
            note.classList.add("bell-note");
            method.parentNode.insertBefore(note, method.nextSibling);
          }
        }
      });
    })(ings[i]);
  }
})();
