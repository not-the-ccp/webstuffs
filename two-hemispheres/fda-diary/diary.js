// The Rockville Diary — small touches only; the text stands without this.

(function () {
  "use strict";

  // The Monday entry mentions the federal stamp; press it to apply it.
  var monday = document.querySelector(".entry:nth-of-type(5)");
  if (monday && !monday.querySelector(".stamp-retain")) {
    var p = monday.querySelectorAll("p")[1];
    if (p) {
      var stamp = document.createElement("span");
      stamp.className = "stamp-retain";
      stamp.textContent = "RETAIN · DO NOT RELEASE";
      stamp.title = "Apply the stamp";
      p.appendChild(stamp);
      stamp.addEventListener("click", function () {
        stamp.classList.remove("stamp-retain");
        void stamp.offsetWidth; // restart the drop animation
        stamp.classList.add("stamp-retain");
      });
    }
  }

  // A faint settling of the paper when it loads.
  var paper = document.getElementById("paper");
  if (paper && window.matchMedia && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    paper.animate(
      [
        { transform: "translateY(-6px)", opacity: 0.4 },
        { transform: "translateY(0)", opacity: 1 }
      ],
      { duration: 700, easing: "ease-out" }
    );
  }
})();
