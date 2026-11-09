// The Dry Salvages brochure — the harbour bell, sounded (quietly) on the page.
(function () {
  "use strict";

  // A tiny metronome of harbour bells: every hour-tick the masthead
  // tagline blinks, as if the light on the rock had turned.
  var tagline = document.querySelector(".tagline");
  if (!tagline) return;

  var struck = false;
  setInterval(function () {
    if (struck) return;
    struck = true;
    tagline.style.transition = "color 1.2s ease, opacity 0.6s ease";
    tagline.style.color = "#a33b2a";
    tagline.style.opacity = "0.75";
    setTimeout(function () {
      tagline.style.color = "";
      tagline.style.opacity = "";
      struck = false;
    }, 1400);
  }, 60000);

  // On load: one strike, so a passing traveller hears the hour at once.
  setTimeout(function () {
    struck = true;
    tagline.style.transition = "color 1.2s ease, opacity 0.6s ease";
    tagline.style.color = "#a33b2a";
    setTimeout(function () {
      tagline.style.color = "";
      struck = false;
    }, 1400);
  }, 2500);
})();
