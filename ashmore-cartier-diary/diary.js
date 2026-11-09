/* The Timor Sea Diary, Book No. 21 — a small tide for the page:
   the received stamp settles onto the cover after a moment,
   and an entry brightens briefly when read aloud (clicked). */
(function () {
  var stamp = document.querySelector(".stamp.received");
  if (stamp) {
    stamp.style.transition = "none";
    stamp.style.opacity = "0";
    stamp.style.transform = "rotate(-8deg) scale(1.6)";
    window.setTimeout(function () {
      stamp.style.transition = "opacity 260ms ease-out, transform 260ms cubic-bezier(0.2, 1.4, 0.4, 1)";
      stamp.style.opacity = "0.8";
      stamp.style.transform = "rotate(-8deg) scale(1)";
    }, 500);
  }
  document.querySelectorAll(".entry").forEach(function (entry) {
    entry.style.cursor = "default";
    entry.addEventListener("click", function () {
      entry.style.transition = "background 300ms ease";
      entry.style.background = "rgba(168, 189, 209, 0.28)";
      window.setTimeout(function () {
        entry.style.background = "transparent";
      }, 900);
    });
  });
})();
