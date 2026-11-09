/* The Deacon's Count — one, two, three. Never four. */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var countBox = document.getElementById("count");
  var numbers = document.getElementById("countNumbers");
  if (countBox && numbers) {
    var busy = false;
    function run() {
      if (busy) return;
      busy = true;
      numbers.innerHTML = "";
      countBox.classList.add("dunking");
      var words = ["1", "2", "3"];
      words.forEach(function (w, i) {
        setTimeout(function () {
          var span = document.createElement("span");
          span.className = "n";
          span.textContent = w;
          numbers.appendChild(span);
          if (i === words.length - 1) {
            // the coming up
            setTimeout(function () {
              countBox.classList.remove("dunking");
              busy = false;
            }, 900);
          }
        }, i * 700);
      });
    }
    countBox.addEventListener("click", run);
    countBox.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        run();
      }
    });
  }

  // Gentle scroll-reveal for the card's sections.
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }
})();
