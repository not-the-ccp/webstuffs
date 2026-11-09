/* Le Journal Français — the motto writes itself, then rests */
(function () {
  document.documentElement.classList.add("js");
  var el = document.getElementById("motto");
  if (!el) return;
  var phrases = (el.getAttribute("data-phrases") || "bonjour").split(",").map(function (s) {
    return s.trim();
  });
  var i = 0,
    c = 0,
    deleting = false;

  function tick() {
    var word = phrases[i];
    if (!deleting) {
      c++;
      if (c >= word.length) {
        deleting = true;
        el.textContent = word;
        setTimeout(tick, 2600);
        return;
      }
      el.textContent = word.slice(0, c);
      setTimeout(tick, 110);
    } else {
      c--;
      if (c <= 0) {
        deleting = false;
        i = (i + 1) % phrases.length;
        el.textContent = "";
        setTimeout(tick, 500);
        return;
      }
      el.textContent = word.slice(0, c);
      setTimeout(tick, 45);
    }
  }
  tick();

  /* a soft ink ripple when an entry is scrolled into view */
  var entries = document.querySelectorAll(".entry");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (rows) {
        rows.forEach(function (r) {
          if (r.isIntersecting) {
            r.target.classList.add("inked");
            io.unobserve(r.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    entries.forEach(function (e) { io.observe(e); });
  }
})();
