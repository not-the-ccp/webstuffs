/* Build Log No. 3 — the office files. */
(function () {
  "use strict";

  /* ---- the stamp: click it and the office says no ---- */
  var stamp = document.getElementById("stamp");
  var words = ["ABGELEHNT", "DENIED", "GEPRÜFT", "EXAMINED", "DEFERRED", "KEIN FORMULAR"];
  var ghosts = 0;

  if (stamp) {
    stamp.addEventListener("click", function (e) {
      stamp.classList.remove("thump");
      void stamp.offsetWidth; /* restart the animation */
      stamp.classList.add("thump");

      document.body.classList.remove("shake");
      void document.body.offsetWidth;
      document.body.classList.add("shake");

      if (ghosts >= 8) return;
      ghosts += 1;
      var g = document.createElement("div");
      g.className = "ghost-stamp";
      g.textContent = words[Math.floor(Math.random() * words.length)];
      g.style.setProperty("--rot", (Math.random() * 24 - 12).toFixed(1) + "deg");
      g.style.left = Math.min(Math.max(e.clientX - 40, 8), window.innerWidth - 170) + "px";
      g.style.top = (e.clientY - 16) + "px";
      document.body.appendChild(g);
      setTimeout(function () { if (g.parentNode) g.parentNode.removeChild(g); }, 12000);
    });
  }

  /* ---- the filing counter ticks, as all offices tick ---- */
  var fileno = document.getElementById("fileno");
  if (fileno) {
    var n = 78;
    setInterval(function () {
      n += 1;
      fileno.textContent = "Filing No. " + String(n).padStart(5, "0");
    }, 4200);
  }

  /* ---- the found note types itself, once, in pencil ---- */
  var note = document.querySelector(".found-note");
  if (note && "IntersectionObserver" in window) {
    var text = note.textContent;
    var started = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !started) {
          started = true;
          io.disconnect();
          note.classList.add("typing");
          note.textContent = "";
          var i = 0;
          (function type() {
            if (i <= text.length) {
              note.textContent = text.slice(0, i);
              i += 1;
              setTimeout(type, 22 + Math.random() * 40);
            } else {
              setTimeout(function () { note.classList.remove("typing"); }, 1400);
            }
          })();
        }
      });
    }, { threshold: 0.4 });
    io.observe(note);
  }
})();
