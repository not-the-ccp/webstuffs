/* The Spellboard — lantern motes and the dispatch-desk tally. */
(function () {
  "use strict";

  // Rising embers of lantern light.
  var field = document.getElementById("motes");
  if (field) {
    var glyphs = ["✦", "✧", "⋆", "✳", "·", "✶"];
    var count = window.innerWidth < 640 ? 14 : 26;
    for (var i = 0; i < count; i++) {
      var s = document.createElement("span");
      s.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
      s.style.left = (Math.random() * 100).toFixed(2) + "%";
      s.style.fontSize = (8 + Math.random() * 14).toFixed(1) + "px";
      s.style.animationDuration = (9 + Math.random() * 14).toFixed(1) + "s";
      s.style.animationDelay = (-Math.random() * 20).toFixed(1) + "s";
      field.appendChild(s);
    }
  }

  // The dispatch desk keeps a tally of silver fish paid for.
  var tally = 0;
  document.addEventListener("click", function (e) {
    var head = e.target.closest && e.target.closest(".ad-head");
    if (!head || head.textContent.indexOf("SILVER FISH") === -1) return;
    tally += 1;
    var price = head.querySelector(".price");
    if (!price) {
      price = document.createElement("span");
      price.className = "price";
      head.appendChild(document.createTextNode(" "));
      head.appendChild(price);
    }
    price.textContent = "Tally: " + tally + " fish paid for, prints fresh.";
  });
})();
