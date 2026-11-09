/* Thread NC-157 · Old North State Roads Board · progressive enhancements only */

(function () {
  "use strict";

  var odom = document.getElementById("odom");
  var lane = document.getElementById("lane");
  var caution = document.getElementById("caution");
  var totalMiles = 29.3;

  // Scroll-driven mile post odometer. Content is fully readable without it.
  if (odom && lane) {
    function updateOdom() {
      var rect = lane.getBoundingClientRect();
      var highway = document.getElementById("highway");
      var viewTop = highway.getBoundingClientRect().top;
      var progress = Math.max(0, Math.min(1, -viewTop / (window.innerHeight * 0.55)));
      var miles = (progress * totalMiles).toFixed(1);
      odom.textContent = miles + " of 29.3";
    }
    window.addEventListener("scroll", updateOdom, { passive: true });
    window.addEventListener("resize", updateOdom, { passive: true });
    updateOdom();
  }

  // Caution-light blinker.
  if (caution) {
    var lit = true;
    setInterval(function () {
      lit = !lit;
      caution.style.opacity = lit ? "1" : ".3";
    }, 700);
  }

  // Clicking a mile marker brings its post into view (native scroll, no library).
  var markers = document.querySelectorAll(".mile");
  markers.forEach(function (marker) {
    marker.addEventListener("click", function () {
      var id = this.id.replace(/^m/, "p");
      var post = document.getElementById(id);
      if (post) {
        post.scrollIntoView({ behavior: "smooth", block: "center" });
        markers.forEach(function (m) { m.style.boxShadow = "3px 3px 0 #111"; });
        this.style.boxShadow = "0 0 14px #ffb400, 3px 3px 0 #111";
      }
    });
  });
})();
