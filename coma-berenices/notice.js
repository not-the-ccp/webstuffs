/* Coma Berenices Lost & Found Notice — interactive touches (progressive enhancement) */
(function () {
  "use strict";

  // Generate a small drifting star field behind the notice without images.
  function seedStars(count) {
    var wrap = document.querySelector(".notice");
    if (!wrap) return;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
      var star = document.createElement("div");
      star.className = "star-corner";
      star.style.left = Math.floor(Math.random() * 92) + "%";
      star.style.top = Math.floor(Math.random() * 96) + "%";
      star.style.opacity = 0.35 + Math.random() * 0.65;
      star.style.transform = "scale(" + (0.6 + Math.random()) + ")";
      star.style.transition = "transform 1.2s ease, opacity 1.2s ease";
      frag.appendChild(star);
    }
    wrap.appendChild(frag);
  }

  // Gentle reaction to pointer movement: the hair ornaments breathe.
  function bindParallax() {
    var ornaments = document.querySelectorAll(".hair::before, .hair::after");
    // Pseudo-elements cannot be targeted directly; instead nudge the .hair block.
    var hair = document.querySelector(".hair");
    if (!hair) return;
    document.addEventListener("pointermove", function (evt) {
      var x = (evt.clientX / window.innerWidth - 0.5) * 14;
      var y = (evt.clientY / window.innerHeight - 0.5) * 14;
      hair.style.transform = "translateX(-50%) translate(" + x + "px, " + y + "px)";
    }, { passive: true });
  }

  // Highlight the required stability sentence on click.
  function bindClaim() {
    var paras = document.querySelectorAll(".body p");
    paras.forEach(function (p) {
      if (p.textContent.indexOf("stability claims begin") !== -1) {
        p.style.cursor = "pointer";
        p.addEventListener("click", function () {
          p.classList.toggle("claimed");
          if (p.classList.contains("claimed")) {
            p.textContent = p.textContent.replace(/which is how most stability claims begin\./, "CLAIMED — which is how most stability claims begin.");
          } else {
            p.textContent = p.textContent.replace("CLAIMED — which is how most stability claims begin.", "which is how most stability claims begin.");
          }
        });
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    seedStars(22);
    bindParallax();
    bindClaim();
  });
})();
