/* Field notes extras: the tray, the loupe, the weather */
(function () {
  "use strict";

  // Soft parallax on the etched diamond, as if the notebook shifts in the tray.
  var bg = document.querySelector(".diamond-bg");
  window.addEventListener("scroll", function () {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (bg) bg.style.backgroundPosition = "0 " + (y * 0.06) + "px, 0 " + (y * 0.06) + "px";
  }, { passive: true });

  // A loupe: hold Shift anywhere over an entry to magnify the text under the cursor.
  var active = false;
  function apply(e) {
    if (!active) return;
    document.body.style.zoom = "1.35";
    document.body.style.cursor = "zoom-in";
  }
  function release() {
    if (!active) return;
    active = false;
    document.body.style.zoom = "1";
    document.body.style.cursor = "";
  }
  window.addEventListener("keydown", function (e) {
    if (e.key === "Shift") { active = true; apply(e); }
  });
  window.addEventListener("keyup", function (e) {
    if (e.key === "Shift") release();
  });

  // Weather line for the masthead, noted the old way.
  var local = document.querySelector(".locality");
  if (local) {
    var h = new Date().getHours();
    var wx = h < 6 ? "first light" : h < 12 ? "morning air" : h < 18 ? "afternoon" : "evening shade";
    local.insertAdjacentHTML("beforeend",
      ' &middot; notes taken at ' + wx + ", " + h + " hours");
  }
})();
