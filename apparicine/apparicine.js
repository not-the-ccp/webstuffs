/* Apparicine — MG-1988-19 · gauge of the river and the oven */
(function () {
  "use strict";

  var fill = document.getElementById("gauge-fill");
  var read = document.getElementById("gauge-read");
  var now = document.getElementById("now");

  if (!fill || !read) return;

  // The gauge alternates between the two clocks of the album.
  var states = [
    { w: 34, label: "the water holds" },
    { w: 58, label: "the water moves — take called good" },
    { w: 46, label: "the oven holds, door ajar" },
    { w: 71, label: "the heat stops holding — take called good" },
    { w: 29, label: "the leaf has not moved" }
  ];
  var i = 0;

  setInterval(function () {
    i = (i + 1) % states.length;
    fill.style.width = states[i].w + "%";
    read.textContent = states[i].label;
  }, 3200);

  // Track hover: the needle announces the track it is over.
  var tracks = document.querySelectorAll(".tracks .t");
  tracks.forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      if (now) now.textContent = 'Needle: "' + el.textContent.trim() + '" — side of the record you are on.';
    });
    el.addEventListener("mouseleave", function () {
      if (now) now.textContent = "Needle: rest on the run-out groove, beside the indole cornerstone.";
    });
  });
})();
