/* Newsletter No. 33 — a touch of ink */
(function () {
  "use strict";

  // Give the 2028 in The Reckoning a slow ink-fade, so the
  // twenty-ninth day is the year that keeps moving.
  var sections = document.querySelectorAll(".article");
  for (var i = 0; i < sections.length; i++) {
    var h = sections[i].querySelector("h2");
    if (h && h.textContent.indexOf("Reckoning") !== -1) {
      sections[i].innerHTML = sections[i].innerHTML.replace(
        "1828 by the almanac and 2028 by the hallway clock",
        '1828 by the almanac and <span class="leap">2028</span> by the hallway clock'
      );
      break;
    }
  }

  // A small received-stamp that settles onto the masthead.
  var masthead = document.querySelector(".masthead");
  if (masthead) {
    var stamp = document.createElement("div");
    stamp.className = "stamp";
    stamp.textContent = "RECEIVED · 4 FEB 2028";
    stamp.setAttribute("aria-hidden", "true");
    masthead.appendChild(stamp);
  }
})();
