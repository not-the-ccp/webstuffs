// Application No. 31-074 — Exhibit A: the console re-prints itself.
(function () {
  var line = document.getElementById("console-line");
  if (!line) return;
  var original = line.textContent;

  // The printer complains in the alphabet it was built for:
  // a small rotation of glyphs, then it recovers.
  var mangled = original
    .replace(/a/g, "å")
    .replace(/e/g, "œ")
    .replace(/s/g, "ſ")
    .replace(/h/g, "ß")
    .replace(/o/g, "ɵ")
    .replace(/u/g, "ý");

  var busy = false;
  line.addEventListener("click", function () {
    if (busy) return;
    busy = true;
    line.classList.add("glitch");
    line.textContent = mangled;
    setTimeout(function () {
      line.classList.remove("glitch");
      line.textContent = original;
      busy = false;
    }, 900);
  });
})();
