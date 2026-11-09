// Special Number 63-A: the "Entered in the book" stamp settles into the paper
// as the leaf is read, and steadies itself if the reader pauses on the fragment.
(function () {
  var stamp = document.querySelector(".stamp");
  if (!stamp) return;

  function settle() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 1;
    var rotate = -14 + p * 8;           // drifts from -14deg toward -6deg
    var opacity = 0.55 + p * 0.25;      // darkens as the book accepts it
    stamp.style.transform = "rotate(" + rotate + "deg)";
    stamp.style.opacity = opacity.toFixed(3);
  }

  window.addEventListener("scroll", settle, { passive: true });
  window.addEventListener("resize", settle);
  settle();

  // One gentle press, like a thumb on the stamp, when the fragment is near.
  var block = document.querySelector("blockquote.find");
  if (block) {
    var seen = false;
    var check = function () {
      if (seen) return;
      var r = block.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.8) {
        seen = true;
        stamp.style.transition = "transform 0.9s ease-out, opacity 0.9s ease-out";
        stamp.style.transform = "rotate(-6deg) scale(0.94)";
        window.setTimeout(function () {
          stamp.style.transform = "rotate(-6deg)";
        }, 450);
      }
    };
    window.addEventListener("scroll", check, { passive: true });
    check();
  }
})();
