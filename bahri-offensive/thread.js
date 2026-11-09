/* North Bank Bulletin — Thread No. 4412 — scroll reveals + wire clock */
(function () {
  "use strict";

  var posts = document.querySelectorAll(".post");

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    posts.forEach(function (p) { io.observe(p); });
  } else {
    posts.forEach(function (p) { p.classList.add("visible"); });
  }

  // the wire clock: posts count creeps as the reader moves down the thread
  var count = document.getElementById("postCount");
  var seen = 0;
  if ("IntersectionObserver" in window && count) {
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !entry.target.dataset.seen) {
          entry.target.dataset.seen = "1";
          seen += 1;
          count.textContent = String(seen).padStart(2, "0");
        }
      });
    }, { threshold: 0.4 });
    posts.forEach(function (p) { io2.observe(p); });
  }

  // stamp the thread-foot with the morning, in the river's own time
  var foot = document.querySelector(".thread-foot p");
  if (foot) {
    var d = new Date();
    var hh = String(d.getHours()).padStart(2, "0");
    var mm = String(d.getMinutes()).padStart(2, "0");
    foot.textContent += " · synced " + hh + ":" + mm + " west bank time";
  }
})();
