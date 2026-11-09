// The kept sentence is read aloud in the Office, and then underlined twice.
(function () {
  var kept = document.getElementById("kept");
  if (!kept) return;
  var mark = function () {
    kept.classList.add("read");
  };
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          mark();
          io.disconnect();
        }
      });
    }, { threshold: 0.9 });
    io.observe(kept);
  } else {
    mark();
  }
})();
