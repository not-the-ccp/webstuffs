/* The Bluegrass Tally — LP 4801
   Sleeve interactions: needle drop, track select, letterhead flicker. */

(function () {
  "use strict";

  var disc = document.getElementById("disc");
  var title = document.getElementById("album-title");

  /* --- letterpress flicker on the title: letters settle one by one --- */
  if (title && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var original = title.getAttribute("data-text") || title.textContent;
    var glyphs = original.split("");
    title.textContent = "";
    glyphs.forEach(function (g, i) {
      var s = document.createElement("span");
      s.textContent = g;
      s.style.display = "inline-block";
      s.style.opacity = "0";
      s.style.transform = "translateY(0.35em)";
      s.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      if (g === " ") s.style.width = "0.35em";
      title.appendChild(s);
      setTimeout(function () {
        s.style.opacity = "1";
        s.style.transform = "translateY(0)";
      }, 120 + i * 70);
    });
  }

  /* --- needle drop: click the disc to run / rest the platter --- */
  if (disc) {
    disc.style.cursor = "pointer";
    disc.setAttribute("role", "button");
    disc.setAttribute("tabindex", "0");
    disc.setAttribute("aria-label", "Run or rest the platter");

    function toggle() {
      disc.classList.toggle("paused");
    }
    disc.addEventListener("click", toggle);
    disc.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
  }

  /* --- tracklist: one track plays at a time, like the record allows --- */
  var lists = document.querySelectorAll(".tracklist");
  lists.forEach(function (list) {
    list.addEventListener("click", function (e) {
      var li = e.target.closest("li");
      if (!li) return;
      var wasPlaying = li.classList.contains("playing");
      list.querySelectorAll("li.playing").forEach(function (other) {
        other.classList.remove("playing");
      });
      if (!wasPlaying) li.classList.add("playing");
      if (disc) disc.classList.remove("paused");
    });
  });

  /* --- slow wax: every 26 seconds the platter wobbles a beat faster --- */
  if (disc && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(function () {
      if (disc.classList.contains("paused")) return;
      disc.style.animationDuration = "3.1s";
      setTimeout(function () {
        disc.style.animationDuration = "4s";
      }, 3000);
    }, 26000);
  }
})();
