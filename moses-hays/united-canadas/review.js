/* The Montréal Dining Gazette — Review No. 47: the running bill and the five bells. */
(function () {
  "use strict";

  /* ---- the running bill: tap a course to mark it; the Gazette keeps the count ---- */
  var courses = Array.prototype.slice.call(document.querySelectorAll(".course"));
  var totalEl = document.getElementById("billTotal");
  var noteEl = document.getElementById("billNote");
  var ALL_TOTAL = 3.40;

  function money(n) {
    return "$" + (Math.round(n * 100) / 100).toFixed(2);
  }

  function recount() {
    var total = 0;
    var names = [];
    courses.forEach(function (c) {
      if (c.classList.contains("ordered")) {
        total += parseFloat(c.dataset.price) || 0;
        names.push(c.dataset.name.replace(/&amp;/g, "&"));
      }
    });
    if (totalEl) totalEl.textContent = money(total);
    if (noteEl) {
      if (names.length === 0) {
        noteEl.textContent = "Nothing marked. The table is set; the house waits.";
      } else if (names.length === courses.length) {
        noteEl.textContent = "All four courses, the full union, as dined. The house does not round.";
      } else {
        noteEl.textContent = "Marked: " + names.join("; ") + ". The house does not round.";
      }
    }
  }

  courses.forEach(function (c) {
    c.addEventListener("click", function () {
      c.classList.toggle("ordered");
      recount();
    });
    c.setAttribute("tabindex", "0");
    c.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        c.classList.toggle("ordered");
        recount();
      }
    });
  });

  /* the Gazette dined on the full union: mark all four on arrival */
  courses.forEach(function (c) { c.classList.add("ordered"); });
  recount();

  /* ---- the five bells: tap one to hear it swing ---- */
  var bells = Array.prototype.slice.call(document.querySelectorAll(".bell"));
  bells.forEach(function (b) {
    b.addEventListener("click", function () {
      b.classList.remove("swing");
      void b.offsetWidth; /* restart the swing */
      b.classList.add("swing");
      var n = b.dataset.bell;
      if (b.classList.contains("rung")) {
        b.setAttribute("aria-label", "Bell " + n + ", un-rung");
      } else {
        b.setAttribute("aria-label", "Bell " + n + ", rung");
      }
      b.classList.toggle("rung");
    });
  });

  /* ---- the stove keeps steaming behind the masthead ---- */
  var mast = document.querySelector(".masthead");
  if (mast && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(function () {
      if (document.hidden) return;
      var s = document.createElement("span");
      s.className = "steam";
      s.style.left = (38 + Math.random() * 24) + "%";
      s.style.animationDuration = (5.5 + Math.random() * 4).toFixed(1) + "s";
      mast.appendChild(s);
      setTimeout(function () { if (s.parentNode) s.parentNode.removeChild(s); }, 10000);
    }, 900);
  }
})();
