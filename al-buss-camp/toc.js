/* Table-of-contents toggle for the Al-Buss entry. The article is fully
   readable with the script disabled; this only folds the box. */
(function () {
  var toc = document.getElementById("toc");
  var toggle = document.getElementById("tocToggle");
  if (!toc || !toggle) return;

  function flip() {
    var collapsed = toc.classList.toggle("collapsed");
    toggle.textContent = collapsed ? "show" : "hide";
    toggle.setAttribute("aria-expanded", String(!collapsed));
  }

  toggle.addEventListener("click", flip);
  toggle.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      flip();
    }
  });

  // Smooth-scroll the in-page anchor jumps.
  var links = toc.querySelectorAll("a[href^='#']");
  links.forEach(function (a) {
    a.addEventListener("click", function (e) {
      var target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", a.getAttribute("href"));
      }
    });
  });
})();
