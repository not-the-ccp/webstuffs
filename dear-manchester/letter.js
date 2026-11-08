/* Dear Manchester — ink the signature and settle the seal */
(function () {
  var block = document.querySelector(".signature-block");
  var signature = document.getElementById("signature");
  if (!block || !signature) return;

  // Fallback if anything below throws: always leave the letter legible.
  block.classList.remove("no-js");
  try {
    var done = function () { signature.classList.add("inked"); };
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { done(); io.disconnect(); }
        });
      }, { threshold: 0.4 });
      io.observe(signature);
    } else {
      done();
    }
    // Safety net in case the observer never fires.
    setTimeout(done, 3000);
  } catch (e) {
    signature.classList.add("inked");
  }
})();
