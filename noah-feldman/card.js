/* The Charles River Almanac — a small touch: the solstice reading, once. */
(function () {
  var line = document.querySelector("blockquote.obituary");
  if (!line) return;

  var original = line.textContent;
  var words = original.split(" ");

  // Reveal the entered record word by word, like a reading given aloud.
  line.style.transition = "none";
  var i = 0;

  function step() {
    i += 1;
    line.textContent = words.slice(0, i).join(" ");
    if (i < words.length) {
      setTimeout(step, 180);
    } else {
      // A held breath, then the record stands as it was made.
      line.style.transition = "background-color 1.2s ease";
      line.style.backgroundColor = "";
    }
  }

  // Only animate if the card is on screen; otherwise leave the text as written.
  if ("IntersectionObserver" in window) {
    var seen = false;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !seen) {
          seen = true;
          line.textContent = "";
          setTimeout(step, 400);
          obs.disconnect();
        }
      });
    }, { threshold: 0.4 });
    obs.observe(line);
  }
})();
