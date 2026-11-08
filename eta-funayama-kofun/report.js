/* Eta Funayama Kofun — school report sheet */
(function () {
  // Redraw the ruled lines so they stay aligned under the margin line.
  var paper = document.getElementById("paper");
  if (!paper) return;
  // A gentle re-stamp whenever the sheet regains focus.
  var stamp = document.getElementById("stamp");
  if (stamp) {
    paper.addEventListener("mouseenter", function () {
      stamp.style.animation = "none";
      // Force reflow, then let the keyframe run again.
      void stamp.offsetWidth;
      stamp.style.animation = "";
    });
  }
})();
