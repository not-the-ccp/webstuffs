// Notice No. 1147 — a small touch: the "Inquiries Welcome" seal presses in,
// the way a seal would, when the reader has reached the notice.
(function () {
  var stamp = document.getElementById("stamp");
  if (!stamp) return;

  function press() {
    stamp.classList.add("show");
  }

  if ("IntersectionObserver" in window) {
    var seen = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !seen) {
          seen = true;
          press();
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(document.querySelector(".notice-body") || stamp);
  } else {
    window.addEventListener("load", press);
  }
})();
