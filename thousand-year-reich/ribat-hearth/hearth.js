// Card No. 41 — the fire is never once stopped: embers rise, and the
// session clock runs 1054 to 1147, over, and over, and never once stopped.
(function () {
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* embers */
  var field = document.getElementById("embers");
  if (!reduced && field) {
    function ember() {
      var e = document.createElement("span");
      e.className = "ember";
      var x = Math.random() * 100;
      var drift = (Math.random() - 0.5) * 16;
      var size = 2.5 + Math.random() * 4.5;
      var dur = 6000 + Math.random() * 9000;
      e.style.left = x + "%";
      e.style.width = size + "px";
      e.style.height = size + "px";
      field.appendChild(e);
      var rise = e.animate(
        [
          { transform: "translate(0, 0) scale(1)", opacity: 0 },
          { transform: "translate(" + drift * 0.4 + "px, -18vh) scale(1)", opacity: 0.85, offset: 0.18 },
          { transform: "translate(" + drift + "px, -78vh) scale(0.55)", opacity: 0.5, offset: 0.7 },
          { transform: "translate(" + (drift * 1.6) + "px, -104vh) scale(0.2)", opacity: 0 }
        ],
        { duration: dur, easing: "ease-out", iterations: 1 }
      );
      rise.onfinish = function () { e.remove(); };
    }
    if (!document.hidden) ember();
    setInterval(function () {
      if (!document.hidden && field.children.length < 14) ember();
    }, 700);
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) ember();
    });
  }

  /* the session clock: 1054 to 1147, held open, never once stopped */
  if (!reduced) {
    var label = document.createElement("div");
    label.className = "session-clock";
    label.setAttribute("aria-hidden", "true");
    label.textContent = "session \u2014 1054";
    var foot = document.querySelector("footer.listen");
    if (foot) {
      var wrap = document.createElement("p");
      wrap.style.textAlign = "center";
      wrap.appendChild(label);
      foot.insertBefore(wrap, foot.firstChild);
    }
    var year = 1054;
    setInterval(function () {
      year += 1;
      if (year > 1147) year = 1054; /* the fire is never once stopped */
      label.textContent = "session \u2014 " + year;
    }, 900);
  }
})();
