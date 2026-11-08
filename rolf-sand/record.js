/* In re Sand — record touches */
(function () {
  "use strict";
  var line44 = document.getElementById("line44");
  var stamp = document.getElementById("stamp");

  // Mark the unexplained line the way a clerk would, once the reader reaches it.
  if (line44 && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          line44.classList.add("noted");
          io.disconnect();
        }
      });
    }, { threshold: 0.6 });
    io.observe(line44);
  }

  // Re-stamp on click, for those who wish to be sure.
  if (stamp) {
    stamp.addEventListener("click", function () {
      stamp.style.animation = "none";
      void stamp.offsetWidth;
      stamp.style.animation = "inked 0.9s ease-out both";
    });
  }

  // A quiet running clock beside the header, the way the court clock keeps the record.
  var session = document.querySelector(".session");
  if (session) {
    var el = document.createElement("span");
    el.className = "clock";
    el.setAttribute("aria-hidden", "true");
    var tick = function () {
      var d = new Date();
      var p = function (n) { return (n < 10 ? "0" : "") + n; };
      el.textContent = "\u00B7 record time " + p(d.getHours()) + ":" + p(d.getMinutes());
    };
    tick();
    setInterval(tick, 30000);
    session.appendChild(el);
  }
})();
