/* Form B board flag: the Line notes its own state for the reader.
   The timetable is fully readable without this script. */
(function () {
  "use strict";
  var now = new Date();
  var month = now.getMonth() + 1;
  // September (9): the Line ran its one return working. Otherwise, in force, spring 1854.
  var running = month >= 3 && month <= 8;
  var flag = document.createElement("span");
  flag.className = "board-flag" + (running ? "" : " cancelled");
  flag.textContent = running ? "In force" : "Cancelled, 10 Sept 1855";
  var h1 = document.querySelector(".linehead h1");
  if (h1 && flag) {
    h1.appendChild(document.createTextNode(" "));
    h1.appendChild(flag);
  }
})();
