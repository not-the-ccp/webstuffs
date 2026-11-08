/* The Mars Post — small touches of the post office */
(function () {
  "use strict";

  var mark = document.querySelector(".g-silent");
  var corrector = document.getElementById("corrector");

  // Hold the pointer over the mark and the silent letter is read aloud.
  if (mark && corrector) {
    var original = corrector.innerHTML;
    var shown = false;
    function readIt() {
      if (shown) return;
      shown = true;
      mark.textContent = "G";
      corrector.innerHTML = "— read the silent letter: <strong>Magrs</strong> —";
    }
    function unreadIt() {
      if (!shown) return;
      shown = false;
      mark.textContent = "A";
      corrector.innerHTML = original;
    }
    mark.addEventListener("mouseenter", readIt);
    mark.addEventListener("mouseleave", unreadIt);
    mark.addEventListener("click", function () {
      if (shown) { unreadIt(); } else { readIt(); setTimeout(unreadIt, 2600); }
    });
  }

  // The postmark: strikes once per scroll pass, then holds.
  var postmark = document.getElementById("postmark");
  if (postmark) {
    var struck = false;
    function strike() {
      if (struck) return;
      struck = true;
      postmark.classList.add("struck");
      postmark.style.opacity = "0.95";
      postmark.animate(
        [
          { transform: "rotate(8deg) scale(1.35)", opacity: 0 },
          { transform: "rotate(8deg) scale(0.96)", opacity: 0.95 },
          { transform: "rotate(8deg) scale(1)", opacity: 0.95 }
        ],
        { duration: 420, easing: "ease-out", fill: "forwards" }
      );
    }
    window.addEventListener("scroll", strike, { passive: true, once: true });
    if (window.scrollY > 40) strike();
  }

  // A slow postmark date on the folio, set from the local clock, in small print.
  var folio = document.getElementById("folio");
  if (folio) {
    var now = new Date();
    var d = String(now.getDate()).padStart(2, "0");
    var m = String(now.getMonth() + 1).padStart(2, "0");
    var tag = document.createElement("span");
    tag.className = "stamp-dent live-dent";
    tag.textContent = "POSTED " + d + " " + (now.getMonth() + 1) + " " + now.getFullYear();
    tag.style.position = "fixed";
    tag.style.right = "18px";
    tag.style.bottom = "18px";
    tag.style.left = "auto";
    tag.style.top = "auto";
    tag.style.opacity = "0.55";
    tag.style.transform = "rotate(-6deg)";
    tag.style.zIndex = "7";
    document.body.appendChild(tag);
  }
})();
