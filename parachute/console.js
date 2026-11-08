/* PAR-70 — console touches. All content remains readable without this script. */
(function () {
  var box = document.getElementById("console");
  if (!box) return;

  // Trailing block cursor on the final log line.
  var last = box.querySelector("p:last-child");
  if (last) {
    var cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.textContent = "█";
    last.appendChild(cursor);
    var css = document.createElement("style");
    css.textContent =
      ".cursor{display:inline-block;margin-left:0.5ch;animation:curblink 1.1s steps(2,start) infinite}" +
      "@keyframes curblink{to{visibility:hidden}}";
    document.head.appendChild(css);
  }

  // The FAULT badge row: clicking it copies nothing, it only acknowledges —
  // the console answers with a short amber pulse.
  var hot = box.querySelector("p.hot");
  if (hot) {
    hot.style.cursor = "help";
    hot.addEventListener("click", function () {
      hot.animate(
        [{ filter: "none" }, { filter: "brightness(1.9)" }, { filter: "none" }],
        { duration: 600 }
      );
    });
  }
})();
