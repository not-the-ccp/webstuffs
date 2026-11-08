/* Anoka Answers Desk — FAQ: count up the 2020 census figure and keep the
   number of open questions displayed in the header. No JS required to read
   anything; the census line falls back to its final value. */
(function () {
  var pop = document.getElementById("population");
  if (!pop) return;
  var target = 17921;
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced) {
    pop.textContent = target.toLocaleString("en-US");
  } else {
    pop.textContent = "0";
    var start = null;
    var dur = 1600;
    function step(ts) {
      if (!start) start = ts;
      var t = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      pop.textContent = Math.round(target * eased).toLocaleString("en-US");
      if (t < 1) requestAnimationFrame(step);
    }
    // start the count when the question is first opened, or after a beat
    var started = false;
    function kick() {
      if (started) return;
      started = true;
      requestAnimationFrame(step);
    }
    pop.addEventListener("click", kick);
    var li = pop.closest("li");
    if (li) {
      var d = li.querySelector("details");
      d.addEventListener("toggle", kick);
    }
    setTimeout(kick, 1400);
  }
})();
