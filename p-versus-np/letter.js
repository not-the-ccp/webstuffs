/* Gazeta da Orquestra — letter to the editor, small touches */
(function () {
  "use strict";

  var line = document.getElementById("ledger-line");
  if (line) {
    line.style.cursor = "pointer";
    line.addEventListener("click", function () {
      line.classList.toggle("verified");
      var stamp = document.getElementById("verify-stamp");
      if (stamp) stamp.remove();
      if (line.classList.contains("verified")) {
        stamp = document.createElement("span");
        stamp.id = "verify-stamp";
        stamp.textContent = "VERIFIED";
        stamp.setAttribute("aria-hidden", "true");
        line.appendChild(stamp);
        line.style.setProperty("--stamped", "1");
        var css = line.style;
        css.position = "relative";
      }
    });
    // style the stamp once, without touching the stylesheet
    var tag = document.createElement("style");
    tag.textContent =
      "#verify-stamp{" +
      "position:absolute;right:10px;bottom:8px;" +
      "font-family:'Courier New',Courier,monospace;" +
      "font-size:0.7rem;letter-spacing:0.3em;font-weight:700;" +
      "color:#b3341f;border:2px solid #b3341f;border-radius:4px;" +
      "padding:2px 8px;transform:rotate(-8deg);opacity:0.85;" +
      "animation:vs-in 0.35s ease;" +
      "}@keyframes vs-in{" +
      "from{transform:rotate(-8deg) scale(2);opacity:0;}" +
      "to{transform:rotate(-8deg) scale(1);opacity:0.85;}" +
      "}";
    document.head.appendChild(tag);
  }

  var postmark = document.getElementById("postmark");
  if (postmark) {
    postmark.addEventListener("click", function () {
      postmark.style.transform =
        "rotate(" + (Math.random() * 40 - 20).toFixed(1) + "deg)";
    });
  }
})();
