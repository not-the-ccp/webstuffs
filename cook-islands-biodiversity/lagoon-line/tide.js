// The Lagoon Line — small harbour touches.
// Text is fully readable without this; this only adds the tide lamp and scroll reveal.

(function () {
  document.documentElement.classList.add("js");

  // Avarua runs UTC+13. A gentle harbour clock in the colophon.
  var col = document.querySelector(".colophon p");
  if (col) {
    var span = document.createElement("span");
    span.className = "tide-lamp";
    span.setAttribute("aria-hidden", "true");
    function tick() {
      var t = new Date(Date.now() + (13 * 60 + new Date().getTimezoneOffset()) * 60000);
      var h = t.getUTCHours(), m = t.getUTCMinutes();
      span.textContent = " · Avarua time " +
        String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0");
    }
    tick();
    setInterval(tick, 30000);
    col.appendChild(span);
  }

  // Scroll reveal for the brochure sections.
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("shown");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("shown"); });
  }
})();
