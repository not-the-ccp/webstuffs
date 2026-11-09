/* Council of the Benelux Union — Minutes No. 14
   quorum reveals, the carried-3-0 stamp, and a clock that
   adjourns at 14:14 on the fourteenth. */
(function () {
  "use strict";

  // Number the items so the margin squares read 1–8.
  var items = document.querySelectorAll(".item");
  items.forEach(function (el, i) {
    el.setAttribute("data-no", String(i + 1));
  });

  // Reveal items as they enter the record.
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // Stamp the foot once the resolutions are in view.
  var stamp = document.getElementById("stamp");
  if (stamp) {
    var foot = stamp.closest(".minute-foot");
    if ("IntersectionObserver" in window && foot) {
      var so = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setTimeout(function () { stamp.classList.add("stamped"); }, 350);
            so.disconnect();
          }
        });
      }, { threshold: 0.4 });
      so.observe(foot);
    } else if (stamp) {
      stamp.classList.add("stamped");
    }
  }

  // A small clock in the file line: the session ran 09:00–14:14;
  // the counter runs the same span, once, at the top of the page.
  var fileLine = document.querySelector(".min-file");
  if (fileLine) {
    var start = 9 * 60;
    var end = 14 * 60 + 14;
    var t0 = null;
    var span = 12000; // 12 seconds for the whole sitting
    function frame(now) {
      if (t0 === null) t0 = now;
      var p = Math.min(1, (now - t0) / span);
      var mins = Math.round(start + (end - start) * p);
      var h = String(Math.floor(mins / 60)).padStart(2, "0");
      var m = String(mins % 60).padStart(2, "0");
      fileLine.setAttribute("data-clock", h + ":" + m);
      if (p < 1 && now - t0 < span + 4000) {
        requestAnimationFrame(frame);
      }
    }
    if ("requestAnimationFrame" in window) {
      requestAnimationFrame(frame);
    }
  }
})();
