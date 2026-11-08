// The house stamp: press to re-stamp, like a table settling under a deal.
(function () {
  var stamp = document.getElementById("house-stamp");
  if (!stamp) return;
  var angle = 9;
  function restamp() {
    angle = -14 + Math.random() * 26;
    stamp.style.transition = "transform 120ms ease";
    stamp.style.transform = "rotate(" + angle.toFixed(1) + "deg) scale(0.92)";
    window.setTimeout(function () {
      stamp.style.transform = "rotate(" + angle.toFixed(1) + "deg) scale(1)";
    }, 90);
  }
  stamp.addEventListener("click", restamp);
  stamp.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      restamp();
    }
  });
  stamp.setAttribute("role", "button");
  stamp.setAttribute("tabindex", "0");
  stamp.setAttribute("aria-label", "House stamp of the Gasthof zum Bären — press to re-stamp");
})();

// A deal: on load, the rule sections settle in one after another,
// like hands going down the table. Purely cosmetic; text is fully
// readable without it.
(function () {
  var sections = document.querySelectorAll(".manual .rules, .manual .variants .variant, .manual .house, .manual .catalogue");
  if (!sections.length || !("IntersectionObserver" in window)) return;
  var seen = new WeakSet();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !seen.has(entry.target)) {
        seen.add(entry.target);
        var el = entry.target;
        el.style.transition = "opacity 480ms ease, transform 480ms ease";
        el.style.opacity = "1";
        el.style.transform = (el.style.transform || "") + "";
      }
    });
  }, { threshold: 0.12 });
  sections.forEach(function (el) {
    el.style.opacity = "0.25";
    observer.observe(el);
  });
})();
