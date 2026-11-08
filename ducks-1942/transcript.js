/* Verbatim record: a quiet "CERTIFIED" stamp settles onto the margin-line note. */
(function () {
  "use strict";
  if (!("IntersectionObserver" in window)) return;

  var target = document.querySelector(".minute, section.examination q");
  if (!target) return;

  var done = false;
  var stamp = document.createElement("span");
  stamp.className = "certified-stamp";
  stamp.textContent = "Certified";
  stamp.setAttribute("aria-hidden", "true");

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !done) {
        done = true;
        target.appendChild(stamp);
        requestAnimationFrame(function () {
          stamp.classList.add("landed");
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(target);

  // Keep the text readable without the script: stamp is purely decorative.
})();
