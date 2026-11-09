/* Cyclopedia entry No. 41 — a quiet reading mark in the margin. */
(function () {
  "use strict";
  var mark = document.createElement("div");
  mark.className = "readmark";
  mark.textContent = "Athena \u00b7 No. 41";
  document.body.appendChild(mark);

  var sections = Array.prototype.slice.call(document.querySelectorAll(".entry h2"));
  var current = null;

  function onScroll() {
    var vh = window.innerHeight;
    var active = null;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= vh * 0.35) active = sections[i];
    }
    var label = active ? active.textContent.replace(/\s+/g, " ").trim() : "Athena \u00b7 No. 41";
    if (label !== current) {
      current = label;
      mark.textContent = label;
    }
    var done = window.scrollY + vh >= document.body.scrollHeight - 4;
    mark.classList.toggle("on", !done && window.scrollY > 60);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
})();
