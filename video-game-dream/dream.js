/* The Dreamer's Concordance · Entry No. 145 — small dream effects.
   The page is fully readable without this script. */

(function () {
  "use strict";

  var pause = document.getElementById("pause");

  function openPause() {
    pause.hidden = false;
  }
  function closePause() {
    pause.hidden = true;
  }

  /* The pause menu is the dream's signature figure: Escape, or a
     double-click on the page, holds the story in the dreamer's hands. */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !pause.hidden) { closePause(); return; }
    if (e.key === "Escape" && e.shiftKey) { openPause(); return; }
    if (e.key.toLowerCase() === "p" && !e.metaKey && !e.ctrlKey && !e.altKey) {
      /* P: pause, but never while the dreamer is typing in a field. */
      var tag = (document.activeElement && document.activeElement.tagName) || "";
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      openPause();
    }
  });
  document.addEventListener("dblclick", function (e) {
    if (e.target.closest && e.target.closest("a, button, [contenteditable]")) return;
    openPause();
  });
  pause.addEventListener("click", closePause);

  /* A single cello note rises where the dreamer taps the dark —
     the music moving to the inside of the room. */
  var notes = ["♪", "♫", "♩"];
  document.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest("a, button, .pause")) return;
    var n = document.createElement("span");
    n.className = "dream-note";
    n.textContent = notes[Math.floor(Math.random() * notes.length)];
    n.style.left = e.clientX + "px";
    n.style.top = e.clientY + "px";
    document.body.appendChild(n);
    setTimeout(function () { n.remove(); }, 2600);
  });

  var style = document.createElement("style");
  style.textContent =
    ".dream-note{position:fixed;z-index:8;pointer-events:none;color:#ffe98a;" +
    "font-size:1.3rem;text-shadow:0 0 10px rgba(217,167,255,0.8);" +
    "animation:dream-note 2.4s ease-out forwards;}" +
    "@keyframes dream-note{from{opacity:0.95;transform:translate(-50%,-50%)}" +
    "to{opacity:0;transform:translate(-50%,-260%) rotate(14deg)}}";
  document.head.appendChild(style);
})();
