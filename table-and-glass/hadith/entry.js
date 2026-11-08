/* Entry No. 41 — the isnād chain reveals itself link by link,
   at the ledger's speed, once the chain is on screen. */
(function () {
  var chain = document.getElementById("isnad");
  if (!chain || !("IntersectionObserver" in window)) return;

  var done = false;
  function reveal() {
    if (done) return;
    done = true;
    chain.classList.add("armed");
    var links = chain.querySelectorAll("li");
    links.forEach(function (li, i) {
      setTimeout(function () { li.classList.add("shown"); }, 260 + i * 520);
    });
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        reveal();
        io.disconnect();
      }
    });
  }, { threshold: 0.3 });
  io.observe(chain);
})();
