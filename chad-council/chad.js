/* Session I, N'Djamena — small clockwork for the lower room.
   The visitor of 16:42, and the pour of Article 7. */

(function () {
  "use strict";

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- The visitor of 16:42 ----
     A moth that comes in at the window, drifts between the pages,
     and occasionally alights on the register. It departs on its own
     schedule, which is quick. */
  var moth = document.getElementById("moth");
  if (moth && !reduced) {
    var x = -40, y = window.innerHeight * 0.7;
    var tx = window.innerWidth * 0.8, ty = window.innerHeight * 0.3;
    var perched = false, restUntil = 0, nextWing = 0;

    function step() {
      var now = Date.now();
      if (!perched && now > nextWing) {
        // wander toward a new point on the page
        tx = 60 + Math.random() * Math.max(200, window.innerWidth - 120);
        ty = 80 + Math.random() * Math.max(160, window.innerHeight - 200);
        nextWing = now + 2600 + Math.random() * 3200;
        if (Math.random() < 0.35) {
          // alight for a while; it is keeping to itself
          perched = true;
          restUntil = now + 2200 + Math.random() * 3800;
          moth.classList.add("perched");
        }
      }
      if (perched && now > restUntil) {
        perched = false;
        moth.classList.remove("perched");
      }
      if (perched) {
        x = tx; y = ty;
      } else {
        x += (tx - x) * 0.016;
        y += (ty - y) * 0.016 + Math.sin(now / 340) * 0.35;
      }
      moth.style.transform = "translate(" + x + "px," + y + "px)";
      requestAnimationFrame(step);
    }

    // it arrives with the evening, a moment after the room is read
    setTimeout(function () {
      moth.classList.add("seen");
      requestAnimationFrame(step);
      // the room being watched, it leaves on its own schedule
      setTimeout(function () {
        moth.classList.remove("seen");
        setTimeout(function () { moth.classList.add("seen"); }, 45000);
      }, 26000);
    }, 6000);
  }

  /* ---- Article 7 ----
     Where any name happens to be ready for use, pour over the table.
     Hover (or tap) the line and the tea goes over the table;
     the name, if it is a name, survives the pour. */
  var rule = document.getElementById("rule7");
  if (rule) {
    var pour = document.createElement("span");
    pour.className = "pour";
    rule.appendChild(pour);

    function doPour(clientX) {
      var r = rule.getBoundingClientRect();
      var frac = 0.5;
      if (typeof clientX === "number") {
        frac = Math.min(0.94, Math.max(0.06, (clientX - r.left) / r.width));
      }
      pour.style.setProperty("--pour-x", (frac * 100) + "%");
      rule.classList.remove("pouring");
      // restart the animation
      void rule.offsetWidth;
      rule.classList.add("pouring");
      clearTimeout(doPour._t);
      doPour._t = setTimeout(function () { rule.classList.remove("pouring"); }, 1500);
    }

    rule.addEventListener("mousemove", function (e) {
      if (rule.classList.contains("pouring")) return;
      doPour(e.clientX);
    });
    rule.addEventListener("click", function (e) { doPour(e.clientX); });
    // at the end of the session, once, the last of the tea goes over
    if (!reduced) {
      var foot = document.querySelector(".notice-foot");
      if (foot && "IntersectionObserver" in window) {
        var io = new IntersectionObserver(function (entries) {
          if (entries[0].isIntersecting) {
            doPour();
            io.disconnect();
          }
        }, { threshold: 0.8 });
        io.observe(foot);
      }
    }
  }
})();
