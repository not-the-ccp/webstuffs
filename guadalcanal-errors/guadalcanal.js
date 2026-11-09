/* Guadalcanal Error Reference — console effects */
(function () {
  "use strict";

  var terminal = document.getElementById("terminal");
  if (terminal) {
    var lines = Array.prototype.slice.call(terminal.querySelectorAll(".t-line"));
    // Keep text present for no-JS readers; reveal line by line when JS runs.
    lines.forEach(function (line) { line.style.opacity = "0"; });
    var i = 0;
    var cursor = terminal.querySelector(".cursor");

    function revealNext() {
      if (i >= lines.length) return;
      var line = lines[i];
      var full = line.textContent;
      line.textContent = "";
      if (line === lines[lines.length - 1] && cursor) {
        cursor.remove();
      }
      var j = 0;
      var timer = setInterval(function () {
        j += 1;
        line.textContent = full.slice(0, j);
        line.style.opacity = "1";
        if (j >= full.length) {
          clearInterval(timer);
          if (line === lines[lines.length - 1]) {
            var span = document.createElement("span");
            span.className = "cursor";
            span.setAttribute("aria-hidden", "true");
            span.textContent = "\u25FC";
            line.appendChild(span);
          }
          i += 1;
          setTimeout(revealNext, 350);
        }
      }, 14);
    }

    // Start the log once the terminal scrolls into view.
    if ("IntersectionObserver" in window) {
      var seen = false;
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting && !seen) {
            seen = true;
            io.disconnect();
            revealNext();
          }
        });
      }, { threshold: 0.4 });
      io.observe(terminal);
    } else {
      revealNext();
    }
  }

  // Error cards: a short "acknowledge" flicker when clicked.
  var cards = document.querySelectorAll(".err-card");
  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      card.style.transition = "none";
      card.style.boxShadow = "0 0 26px rgba(255, 77, 77, 0.55)";
      setTimeout(function () {
        card.style.transition = "box-shadow 0.8s ease";
        card.style.boxShadow = "";
      }, 120);
    });
  });
})();
