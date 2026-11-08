/* Tap the funnel: count the courses out, one, two, three — oh! */
(function () {
  var funnel = document.getElementById("funnel");
  var out = document.getElementById("count");
  if (!funnel || !out) return;
  var words = ["one,", "two,", "three\u2014oh!"];
  var i = -1;
  funnel.addEventListener("click", function () {
    i = (i + 1) % words.length;
    out.textContent = words[i];
    funnel.classList.remove("pulse");
    void funnel.offsetWidth; /* restart the smoke puffs */
    funnel.classList.add("pulse");
  });
})();
